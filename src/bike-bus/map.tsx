import {ChangeEvent, Dispatch, Fragment, ReactNode, useCallback, useEffect, useMemo, useReducer, useState} from 'react';
import L, {LeafletEventHandlerFnMap, LeafletMouseEvent} from 'leaflet';
import 'leaflet/dist/leaflet.css';

import css from './map.module.scss';

import {Circle, MapContainer, Marker, Polyline, TileLayer, Tooltip, useMapEvents,} from 'react-leaflet'
import {MapContainerProps} from "react-leaflet/lib/MapContainer";
import {Props, SchoolSignups} from "./map-utils";
import {entries, filterEntries, fromEntries, mapEntries, o2a} from "next-utils/objs";
import {LL} from "next-utils/params";
import {ParsedParams} from "./params";
import {routes, routeStops, Stop} from "./routes";
import {SettingsGear} from "./settings";
import {Actions} from "next-utils/use-set";

export const MAPS = {
    openstreetmap: {
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution: "&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors",
    },
    alidade_smooth_dark: {
        url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    },
}

type Point = [ number, number ]
type Points = Point[]
const path = (points: Points) => `M${points.map(([ x, y ]) => `${x} ${y}`).join(" L")} Z`

const schoolPath = () => {
    const g = 8
    const l = 50 + g/2
    const h = 40
    const r = 10
    const R = 20
    const H = h + r
    const ypad = (100 - H) / 2
    const rightPoints: Points = [
        [ l, 100 - ypad ],
        [ l, 100 - ypad - h ],
        [ l + R, 100 - ypad - h - r ],
        [ l + R, 100 - ypad - r ],
    ]
    const leftPoints: Points = rightPoints.map(([ x, y ]) => [ 100 - x, y ])
    const rightPath = path(rightPoints)
    const leftPath = path(leftPoints)
    // console.log("paths:", leftPath, rightPath)
    return `${rightPath} ${leftPath}`
}

type Icon = { size: number, bg: string, fg: string, opacity: number }

const schoolIcon = ({ size, bg, fg, opacity }: Icon) =>
    L.divIcon({
        html: `
<svg
  width="${size}"
  height="${size}"
  viewBox="0 0 100 100"
  version="1.1"
  preserveAspectRatio="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <!-- <circle r="45" cx="50" cy="50" fill="${bg}" stroke="white" stroke-width="5"></circle> -->
  <path d="M5 5 H95 V95 H5 Z" fill="${bg}" stroke-width="5" stroke="white" fill-opacity="${opacity}" opacity="${opacity}"></path>
  <path style="stroke: transparent; width: 0" stroke-width="0" d="${schoolPath()}" fill="${fg}" fill-opacity="${opacity}" opacity="${opacity}"></path>
</svg>`,
        className: "",
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
    });

const housePath = () => {
    const w = 15  // pillar width
    const g = 12  // gap width
    const h = 12  // roof overhang
    const m = 50 - g/2 - w - h
    const M = 100 - m
    const s = m+h  // left pillar outer x coord
    const S = 100 - s  // right pillar outer x coord
    const v = 22  // top/bottom margin
    const V = 100 - v
    const mid = 100 / 2
    const rightHalfPoints: Points = [
        [mid+g/2, mid], // inner right
        [mid+g/2, V], // lower right
        [S, V],   // lower right
        [S, mid],
        [M, mid],
    ]
    const leftHalfPoints: Points = rightHalfPoints.map(([ x, y ]) => [ 100-x, y ])
    leftHalfPoints.reverse()
    return path([
        [mid, mid],
        ...rightHalfPoints,
        [mid, v], // top
        ...leftHalfPoints
    ])
}

const houseIcon = ({ size, bg, fg, opacity }: Icon) =>
    L.divIcon({
        html: `
<svg
  width="${size}"
  height="${size}"
  viewBox="0 0 100 100"
  version="1.1"
  preserveAspectRatio="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle r="45" cx="50" cy="50" fill="${bg}" stroke="white" stroke-width="5" opacity="${opacity}"></circle>
  <path style="stroke: transparent; width: 0" stroke-width="0" d="${housePath()}" fill="${fg}" fill-opacity="${opacity}" opacity="${opacity}"></path>
</svg>`,
        className: "",
        iconSize: [size, size],
        iconAnchor: [size / 2, size /2],
    });

const { max, min, round, sqrt } = Math

function getMetersPerPixel(map: L.Map) {
    const centerLatLng = map.getCenter(); // get map center
    const pointC = map.latLngToContainerPoint(centerLatLng)  // convert to containerpoint (pixels)
    const pointX: L.PointExpression = [pointC.x + 1, pointC.y]  // add one pixel to x
    const pointY: L.PointExpression = [pointC.x, pointC.y + 1]  // add one pixel to y

    // convert containerpoints to latlng's
    const latLngC = map.containerPointToLatLng(pointC)
    const latLngX = map.containerPointToLatLng(pointX)
    const latLngY = map.containerPointToLatLng(pointY)

    const distanceX = latLngC.distanceTo(latLngX)  // calculate distance between c and x (latitude)
    const distanceY = latLngC.distanceTo(latLngY)  // calculate distance between c and y (longitude)

    return (distanceX + distanceY) / 2
}

const Stop = ({ center, radius, stop, opacity, displayRoute, permanentTooltip, }: {
    center: LL
    radius: number
    stop: Stop
    opacity: number
    displayRoute: (route: string) => boolean
    permanentTooltip: boolean
}) => {
    let timeStr = stop.time
    if (!timeStr) {
        const times = stop.times
        if (!times) {
            console.warn("Stop missing time and times:", stop)
        } else {
            const filteredTimes = entries(filterEntries(times, route => displayRoute(route)))
            const times2Routes = {} as { [time: string]: string[] }
            const routes = [] as string[]
            filteredTimes.forEach(([ route, time ]) => {
                const times = time instanceof Array ? time : [time]
                times.forEach(t => {
                    if (!(t in times2Routes)) {
                        times2Routes[t] = []
                    }
                    times2Routes[t].push(route)
                    if (!(routes.includes(route))) {
                        routes.push(route)
                    }
                })
            })
            const includeRoutes = routes.length > 1
            const timeStrs = o2a<string, string[], string>(times2Routes, (time, routes) => {
                //const ts = `${t instanceof Array ? t.join(", ") : t}`
                return includeRoutes ? `${time} (${routes.join(", ")})` : time
            })
            // console.log("stop", stop.name, "filteredTimes:", filteredTimes, times2Routes, timeStrs)
            timeStr = timeStrs.join(", ")
        }
    }
    return <Circle
        center={center} radius={radius}
        weight={3}
        color={"black"} fillColor={"white"}
        opacity={opacity} fillOpacity={opacity}
    >
        <Tooltip className={css.tooltip} permanent={permanentTooltip}>{stop.name}: {timeStr}</Tooltip>
    </Circle>
}

const RoutePoint = ({ name, center, opacity, radius, }: { center: LL, radius: number, name: string, opacity: number }) => <Circle
    center={center} radius={radius}
    weight={3}
    color={"black"} fillColor={"white"}
    opacity={opacity} fillOpacity={opacity}
>
    <Tooltip className={css.tooltip}>{name}</Tooltip>
</Circle>

const Layers = (
    {
        signups, setLL, zoom, setZoom,
        showRoutes, showRouteActions, hideUnselectedRoutes,
        showSchools, showSchoolActions, hideUnselectedSchools,
        hideUnselectedHomes,
        hideSelectedTooltips,
        drawMode,
        setShowSettings
    }: {
        signups: Props
        setLL: Dispatch<LL>
        zoom: number
        setZoom: Dispatch<number>
        showRoutes: string[]
        showRouteActions: Actions<string>
        hideUnselectedRoutes: boolean
        showSchools: string[]
        showSchoolActions: Actions<string>
        hideUnselectedSchools: boolean
        hideUnselectedHomes: boolean
        hideSelectedTooltips: boolean
        drawMode: boolean
        setShowSettings: Dispatch<boolean>
    }
) => {
    const { url, attribution } = MAPS['alidade_smooth_dark']
    const [ newRoutes, setNewRoutes ] = useState<LL[][]>([])
    // console.log("num routes:", newRoutes.length)
    const [ newRoutePoints, setNewRoutePoints ] = useState<LL[] | null>(null)
    const [ nextPoint, setNextPoint ] = useState<LL | null>(null)
    const toggleSchool = useCallback(
        (school: string) => {
            if (showSchools.includes(school)) {
                showSchoolActions.remove(school)
            } else {
                showSchoolActions.add(school)
            }
            console.log("toggle", school, showSchools)
        },
        [ showSchools, showSchoolActions, ]
    )
    const map: L.Map = useMapEvents({
        zoom: () => {
            console.log("map zoom:", map.getZoom())
            setZoom(map.getZoom())
        },
        moveend: () => setLL(map.getCenter()),
        dragend: e => console.log("map dragend:", map.getCenter(), e),
        click: (e: LeafletMouseEvent) => {
            console.log(`map click: latlng:`, JSON.stringify(e.latlng), "newRoutePoints:", newRoutePoints, "nextPoint:", nextPoint, "e:", e)
            setShowSettings(false)
            if (!drawMode) return
            if (!newRoutePoints) {
                setNewRoutePoints([ e.latlng ])
            } else {
                setNewRoutePoints(newRoutePoints.concat([e.latlng]))
            }
        },
        mousemove: (e: LeafletMouseEvent) => {
            // console.log("mousemove, nextPoint?", !!nextPoint, "newRoutePoints?", !!newRoutePoints)
            if (!newRoutePoints) return
            // const { lat, lng } = e.target
            setNextPoint(e.latlng)
        },
    })
    const mPerPx = useMemo(() => getMetersPerPixel(map), [ map, zoom, ])
    // const [ selectedSchool, setSelectedSchool ] = useState<string | null>(null)
    // console.log("render, selectedSchool:", selectedSchool)
    const eventHandlers = useCallback(
        (schoolId: string) => ({
            click: (e: LeafletMouseEvent) => {
                if (nextPoint) {
                    console.log("found nextPoint", nextPoint, "aborting click")
                    if (!drawMode) return
                    if (!newRoutePoints) {
                        console.log("starting new route")
                        setNewRoutePoints([ e.latlng ])
                    } else {
                        console.log("adding to existing route")
                        setNewRoutePoints(newRoutePoints.concat([e.latlng]))
                    }
                    return
                }
                L.DomEvent.stopPropagation(e)
                console.log("click:", schoolId)
                toggleSchool(schoolId)
            },
        }),
        [ showSchools,  nextPoint, newRoutePoints]
    )
    const numSchools = entries(signups).length
    const minLat = min(...o2a(signups, (name, { school }) => school.lat))
    const maxLat = max(...o2a(signups, (name, { school }) => school.lat))
    const latRange = maxLat - minLat
    const minHue = 0
    const maxHue = 282
    const hueRange = maxHue - minHue
    const sat = '100%'
    const lum = '50%'
    const schoolsByLat = useMemo(
        () => {
            const schoolsByLat = o2a<string, SchoolSignups, [string, number]>(signups, (name, {school}) => [name, school.lat])
            schoolsByLat.sort((a, b) => a[1] - b[1])
            // console.log("schoolsByLat:", schoolsByLat)
            return fromEntries(schoolsByLat.map(([name,], idx) => [ name, idx ]))
        },
        [ signups ]
    )
    // console.log("schoolsByLat:", schoolsByLat)
    function idxColor(idx: number) {
        const hue =  minHue + idx * hueRange / (numSchools - 1)
        return `hsl(${hue},${sat},${lum})`
    }
    function latColor(lat: number) {
        const hue =  minHue + round((lat - minLat) / latRange * hueRange)
        return `hsl(${hue},${sat},${lum})`
    }
    const zoomAdjustment = zoom ? max(0, zoom - 14) * 2 : 0
    const schoolSize = 24 + zoomAdjustment
    const houseSize = 20 + zoomAdjustment
    const stopRadius = 10 * mPerPx + zoomAdjustment
    const routePointRadius = 6 * mPerPx // + zoomAdjustment
    const minRoutePointZoom = 13.5

    const offsetLine = useCallback(
        (start: LL, end: LL, offset: number) => {
            const sxy = map.latLngToContainerPoint(start)
            const exy = map.latLngToContainerPoint(end)
            const diff = { x: exy.x - sxy.x, y: exy.y - sxy.y }
            const M = sqrt(diff.x*diff.x + diff.y*diff.y)
            if (!M) return [ start, end ]
            const d = { x: -diff.y * offset / M, y: diff.x * offset / M }
            return [
                map.containerPointToLatLng(L.point([ sxy.x + d.x, sxy.y + d.y ])),
                map.containerPointToLatLng(L.point([ exy.x + d.x, exy.y + d.y ])),
            ]
        },
        [ map ],
    )
    const displayRoute = useCallback(
        (routeName: string) => {
            const route = routes[routeName]
            if (!route) {
                console.warn(`Didn't find route: ${route}`)
                return false
            }
            return showRoutes.includes(routeName) || !hideUnselectedRoutes
        },
        [ showRoutes, hideUnselectedRoutes ]
    )
    const handleRouteClick = useCallback(
        (e: LeafletMouseEvent, routeName: string) => {
            console.log("showRouteActions:", showRouteActions)
            if (showRoutes.includes(routeName)) {
                console.log("deselecting route:", routeName)
                showRouteActions.remove(routeName)
            } else {
                console.log("selecting route:", routeName)
                showRouteActions.add(routeName)
            }
            L.DomEvent.stopPropagation(e)
        },
        [ showRoutes, showRouteActions ]
    )
    console.log("showRoutes:", showRoutes)
    useEffect(
        () => {
            showRoutes.forEach(routeName => {
                const stopTimes = routeStops(routeName)
                let lines = [`${routeName}:`].concat(stopTimes.map(({ name, time }) => `${time}: ${name}`))
                console.log(lines.join("\n"))
            })
        },
        [ showRoutes ]
    )
    const showSchoolsKey = useMemo(() => showSchools?.join("-") || "", [ showSchools ])
    return <>
        <TileLayer url={url} attribution={attribution}/>
        {
            o2a<string, SchoolSignups, ReactNode>(signups, (schoolName, { school, signups }, idx) => {
                const showSchool = !hideUnselectedSchools  // !showSchools || showSchools.includes(school.id)
                const selected = showSchools.includes(school.id)
                const permanentTooltip = selected && !hideSelectedTooltips
                const selectedFactor = selected ? 1.3 : 1
                const notSelected = !selected
                // console.log(`school ${schoolName}, ${selected}`)
                const iconFade = 0.4
                const lineOpacity = selected ? 0.8 : 0.15
                // const color = latColor(school.lat)
                const color = idxColor(schoolsByLat[schoolName])
                // console.log(`school ${schoolName}: lat ${school.lat}, color ${color}`)
                const lineColor = color
                const signupOpacity = notSelected ? iconFade : 1
                const signupColor = color
                const schoolOpacity = notSelected ? iconFade : 1
                const schoolColor = color
                const tooltipOpacity = 0.8
                return <Fragment key={`${schoolName}-${idx}-${showSchoolsKey}-tt${hideSelectedTooltips}`}>
                    {
                        // School
                        showSchool &&
                        <Marker
                            position={school}
                            icon={schoolIcon({ size: schoolSize * selectedFactor, bg: signupColor, fg: "black", opacity: schoolOpacity })}
                            // opacity={schoolOpacity}
                            eventHandlers={eventHandlers(school.id)}
                        >
                            <Tooltip className={css.tooltip} permanent={permanentTooltip} opacity={tooltipOpacity}>{schoolName}</Tooltip>
                        </Marker>
                    }
                    {
                        // Homes
                        (!hideUnselectedHomes || selected) &&
                        signups?.map((ll, idx) =>
                            <Fragment key={`${schoolName}-${idx}-${showSchoolsKey}`}>
                                {/* Home to School */}
                                <Polyline
                                    positions={[ ll, school ]}
                                    color={lineColor} fillColor={lineColor}
                                    weight={5}
                                    opacity={lineOpacity} fillOpacity={lineOpacity}
                                >
                                    <Tooltip className={css.tooltip} opacity={tooltipOpacity}>{schoolName}</Tooltip>
                                </Polyline>
                                Home
                                <Marker
                                    position={ll}
                                    icon={houseIcon({ size: houseSize * selectedFactor, bg: schoolColor, fg: "black", opacity: signupOpacity })}
                                    // opacity={signupOpacity}
                                    eventHandlers={eventHandlers(school.id)}
                                >
                                    <Tooltip className={css.tooltip} opacity={tooltipOpacity}>{schoolName}</Tooltip>
                                </Marker>
                            </Fragment>
                        )
                    }
                </Fragment>
            })
        }
        {/* New route (being drawn, in "draw" mode) */}
        {newRoutePoints && <Polyline positions={newRoutePoints} weight={10} color={"red"} fillColor={"red"} />}
        {newRoutePoints && nextPoint && <Polyline positions={[newRoutePoints[newRoutePoints.length - 1], nextPoint ]} weight={10} color={"pink"} fillColor={"pink"} />}
        {newRoutePoints?.map((point, idx) =>
            <Circle
                key={`newRoute-${idx}`}
                center={point} radius={25}
                color={"grey"} fillColor={"white"}
                eventHandlers={{
                    click: e => {
                        console.log(`Closing route:\n${newRoutePoints.map(({ lat, lng }) => `{ lat: ${lat}, lng: ${lng}, },`).join('\n')}`)
                        L.DomEvent.stopPropagation(e)
                        setNewRoutes(newRoutes.concat([newRoutePoints]))
                        setNewRoutePoints(null)
                        setNextPoint(null)
                    }
                }}
            >
            </Circle>
        )}
        {/* New route lines (already drawn / "closed") */}
        {newRoutes.map((route, idx) =>
            <Polyline
                key={`newRoute-${idx}`}
                positions={route}
                weight={10}
                color={"red"} fillColor={"red"}
            />
        )}
        {/* New route points */}
        {newRoutes.map((route, rIdx) => route.map((point, pIdx) =>
            <Circle
                key={`newRoute-${rIdx}[${pIdx}]`}
                center={point} radius={stopRadius}
                weight={3}
                color={"black"} fillColor={"white"}
                fillOpacity={0.8}
            />
        ))}
        {/* Route lines */}
        {
            entries(routes).map(([ routeName, { active, color, positions, offsets } ], routeIdx) => {
                const showRoute = displayRoute(routeName)
                if (!showRoute) return
                const isSelectedRoute = showRoutes.includes(routeName)
                const isDeselectedRoute = (showRoutes.length && !isSelectedRoute) || (active === false)
                const routeLineOpacity = isDeselectedRoute ? 0.5 : 1
                // console.log(`route ${name}`, isSelectedRoute, isDeselectedRoute, routeLineOpacity)
                const offsetIdxs = offsets?.map((segment, idx) => {
                    const { start, end } = segment
                    const startIdx = positions.findIndex(p => p.name == start || p.stop?.name == start)
                    if (startIdx < 0) throw new Error(`Didn't find start ${start} (offset ${idx}) in route ${routeName}`)
                    let endIdx = positions.slice(startIdx).findIndex(p => p.name == end || p.stop?.name == end)
                    if (endIdx < 0) throw new Error(`Didn't find end ${end} (offset ${idx}) in route ${routeName}`)
                    endIdx += startIdx
                    return { segment, startIdx, endIdx }
                }) || []
                let idx = 0
                const segments = [] as { startIdx: number, lastIdx: number, offset?: number }[]
                for (let { segment: { offsets }, startIdx, endIdx } of offsetIdxs) {
                    const offset = o2a<string, number, number>(
                        offsets,
                        (otherRoute, otherOffset) => displayRoute(otherRoute) ? otherOffset : 0,
                    ).reduce((a, b) => a + b, 0)
                    if (startIdx) {
                        segments.push({startIdx: idx, lastIdx: startIdx})
                    }
                    segments.push({ startIdx, lastIdx: endIdx, offset })
                    idx = endIdx
                }
                if (idx + 1 < positions.length) {
                    segments.push({startIdx: idx, lastIdx: positions.length - 1})
                }
                // console.log("segments:", segments)
                return ([] as ReactNode[]).concat(...segments.map(({ startIdx, lastIdx, offset }, segmentIdx) => {
                    const points = positions.slice(startIdx, lastIdx + 1)
                    const eventHandlers = {
                        click: e => handleRouteClick(e, routeName),
                    } as LeafletEventHandlerFnMap
                    if (!offset) {
                        // console.log(`range line: ${startIdx}-${lastIdx}`)
                        return [<Polyline
                            key={`route${routeIdx}-segment${segmentIdx}-${routeLineOpacity}`}
                            positions={points}
                            weight={10}
                            color={color} fillColor={color}
                            opacity={routeLineOpacity}
                            fillOpacity={routeLineOpacity}
                            eventHandlers={eventHandlers}
                        />]
                    } else {
                        return points.map((cur, idx) => {
                            if (idx + 1 >= points.length) return
                            // console.log(`offset line: ${idx}-${idx+1}`)
                            const nxt = points[idx + 1]
                            return <Polyline
                                key={`route${routeIdx}-segment${segmentIdx}-point${idx}-${routeLineOpacity}`}
                                positions={offsetLine(cur, nxt, offset)}
                                weight={10}
                                color={color} fillColor={color}
                                opacity={routeLineOpacity}
                                fillOpacity={routeLineOpacity}
                                eventHandlers={eventHandlers}
                            />
                        })
                    }
                }))
            })}
        {/* Route stops */}
        {
            entries(routes).map(([ routeName, { color, positions } ], idx) => {
                const showRoute = displayRoute(routeName)
                if (!showRoute) return
                // console.log(`${routeName}:`)
                const isSelectedRoute = showRoutes.includes(routeName)
                const isDeselectedRoute = showRoutes.length && !isSelectedRoute
                const routeStopOpacity = isDeselectedRoute ? 0.4 : 0.8
                return positions.map((point, stopIdx) => {
                    const stop = point.stop
                    if (stop) {
                        const permanentTooltip = isSelectedRoute && !hideSelectedTooltips
                        // console.log(`  ${stop.time}: ${stop.name}`)
                        return <Stop
                            key={`route${routeName}-idx${stopIdx}-stop${stop.name}-opacity${routeStopOpacity}-tt${permanentTooltip}`}
                            center={point} radius={stopRadius}
                            stop={stop}
                            opacity={routeStopOpacity}
                            displayRoute={displayRoute}
                            permanentTooltip={permanentTooltip}
                        />
                    }
                    const name = point.name
                    if (name && zoom >= minRoutePointZoom) {
                        return <RoutePoint
                            key={`route-${name}-point-${name}=${stopIdx}[${routeStopOpacity}`}
                            center={point} radius={routePointRadius}
                            opacity={routeStopOpacity}
                            name={name}
                        />
                    }
                })
            })
        }
    </>
}

const Map = ({ signups, params, ...props }: MapContainerProps & { signups: Props, params: ParsedParams, }) => {
    const {
        ll: [ center, setLL ],
        z: [ zoom, setZoom ],
        draw: [ drawMode, ],
        h: [ showHomes, setShowHomes ],
        r: [ showRoutes, showRouteActions ],
        R: [ hideUnselectedRoutes, setHideUnselectedRoutes ],
        s: [ showSchools, showSchoolActions ],
        S: [ hideUnselectedSchools, setHideUnselectedSchools ],
        T: [ hideSelectedTooltips, setHideSelectedTooltips ]
    } = params
    const [ showSettings, setShowSettings ] = useState(false)
    const types: { [type: string]: [ boolean, Dispatch<boolean> ]} = {
        Homes: [ !showHomes, (hideUnselectedHomes: boolean) => setShowHomes(!hideUnselectedHomes) ],
        Schools: [ hideUnselectedSchools, setHideUnselectedSchools ],
        Routes: [ hideUnselectedRoutes, setHideUnselectedRoutes ],
        Labels: [ hideSelectedTooltips, setHideSelectedTooltips ],
    }
    return <>
        <MapContainer center={center} zoom={zoom} {...props}>
            <Layers
                signups={signups}
                setLL={setLL}
                zoom={zoom} setZoom={setZoom}
                hideUnselectedHomes={!showHomes}
                showSchools={showSchools}
                showRoutes={showRoutes}
                hideUnselectedRoutes={hideUnselectedRoutes}
                showSchoolActions={showSchoolActions}
                showRouteActions={showRouteActions}
                hideUnselectedSchools={hideUnselectedSchools}
                hideSelectedTooltips={hideSelectedTooltips}
                drawMode={drawMode}
                setShowSettings={setShowSettings}
            />
        </MapContainer>
        <SettingsGear
            show={[ showSettings, setShowSettings ]}
            icons={[
                { href: "https://github.com/bikejc/bikejc.github.io", alt: "GitHub logo", src: "icon/gh.png", },
                { href: "https://bikejc.org", alt: "Bike JC logo", src: "icon/logo.png", },
            ]}
        >
            <div className={css.settings}>
                <ul className={css.layers}>
                    {
                        o2a(types, (type, [ hideType, setHideType ]) => {
                            const active = !hideType
                            function onChange(e: ChangeEvent<HTMLInputElement>) {
                                const checked = e.target.checked
                                if (checked === active) {
                                    console.error(`layer ${type}: checked ${checked} != active ${active}`)
                                }
                                setHideType(!hideType)
                            }
                            return <li key={type}><label><input type={"checkbox"} onChange={onChange} checked={active} />{type}</label></li>
                        })
                    }
                </ul>
            </div>
        </SettingsGear>
    </>
}

export default Map;
