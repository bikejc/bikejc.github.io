import {Fragment, ReactNode, useCallback, useEffect, useMemo, useState} from 'react';
import L, {LatLngExpression, LeafletEvent, LeafletEventHandlerFnMap, LeafletMouseEvent, svg} from 'leaflet';
import 'leaflet/dist/leaflet.css';

import css from './map.module.css';

import {Circle, MapContainer, Marker, Polygon, Polyline, TileLayer, Tooltip, useMapEvents,} from 'react-leaflet'
import {MapContainerProps} from "react-leaflet/lib/MapContainer";
import {JC, LL, Props, School} from "./map-utils";
import {entries, fromEntries, o2a} from "next-utils/objs";
import {setRequestMeta} from "next/dist/server/request-meta";

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

type Stop = {
    name: string
    time: string
}
type RoutePoint = LL & {
    stop?: Stop
}

type Route = {
    color: string
    positions: RoutePoint[]
}
const routes: { [k: string]: Route } = {
    // red: {
    //     color: "red",
    //     positions: [
    //         { lat: 40.74250183922047 , lng: -74.05369877815248, stop: { name: "Pershing Field", time: "7:30am", }, },
    //         { lat: 40.74282698670428 , lng: -74.05463218688966, },
    //         { lat: 40.74101426921151 , lng: -74.05582308769227, },
    //         { lat: 40.73827477728785 , lng: -74.05871987342836, },
    //         { lat: 40.7359822967486  , lng: -74.0588700771332 , },
    //         { lat: 40.73490919360775 , lng: -74.0592133998871 , },
    //         { lat: 40.73257594750422 , lng: -74.05958890914918, },
    //         { lat: 40.73043774421105 , lng: -74.06129479408266, },
    //         { lat: 40.73080360135806 , lng: -74.06440615653993, },
    //         { lat: 40.728510863374794, lng: -74.06690597534181, },
    //         { lat: 40.72718559227259 , lng: -74.0671741962433 , },
    //         { lat: 40.725356186961825, lng: -74.068021774292  , stop: { name: "McGinley Square", time: "8:00am", }, },
    //         { lat: 40.724429269076595, lng: -74.06975984573366, },
    //         { lat: 40.72337224169876 , lng: -74.07050013542177, },
    //         { lat: 40.720908489648345, lng: -74.07275319099428, },
    //         { lat: 40.72212818027965 , lng: -74.07572507858278, },
    //         { lat: 40.722437165024765, lng: -74.07618641853334, stop: { name: "LCCS", time: "8:15am", }, },
    //     ]
    // }
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

const { max, min, round } = Math

function getMetersPerPixel(map: L.Map) {
    const centerLatLng = map.getCenter(); // get map center
    const pointC = map.latLngToContainerPoint(centerLatLng); // convert to containerpoint (pixels)
    const pointX: L.PointExpression = [pointC.x + 1, pointC.y]; // add one pixel to x
    // const pointY: L.PointExpression = [pointC.x, pointC.y + 1]; // add one pixel to y

    // convert containerpoints to latlng's
    const latLngC = map.containerPointToLatLng(pointC);
    const latLngX = map.containerPointToLatLng(pointX);
    // const latLngY = map.containerPointToLatLng(pointY);

    const distanceX = latLngC.distanceTo(latLngX); // calculate distance between c and x (latitude)
    // const distanceY = latLngC.distanceTo(latLngY); // calculate distance between c and y (longitude)

    // const zoom = map.getZoom()
    //console.log("distanceX:", distanceX, "distanceY:", distanceY, "center:", centerLatLng, "zoom:", zoom)
    return distanceX
}

const Layers = ({ signups }: { signups: Props }) => {
    const { url, attribution } = MAPS['alidade_smooth_dark']
    const [ newRoutes, setNewRoutes ] = useState<LL[][]>([])
    // console.log("num routes:", newRoutes.length)
    const [ newRoutePoints, setNewRoutePoints ] = useState<LL[] | null>(null)
    const [ editable, setEditable ] = useState(false)
    const [ nextPoint, setNextPoint ] = useState<LL | null>(null)
    const [ zoom, setZoom ] = useState<number | null>(null)
    const map: L.Map = useMapEvents({
        zoom: () => {
            console.log("map zoom:", map.getZoom())
            setZoom(map.getZoom())
        },
        dragend: e => console.log("map dragend:", map.getCenter(), e),
        click: (e: LeafletMouseEvent) => {
            setSelectedSchool(null)
            // const { lat, lng } = e.latlng
            console.log(`map click: latlng:`, JSON.stringify(e.latlng), "newRoutePoints:", newRoutePoints, "nextPoint:", nextPoint, "e:", e)
            if (selectedSchool) return
            if (!editable) return
            if (!newRoutePoints) {
                setNewRoutePoints([ e.latlng ])
            } else {
                setNewRoutePoints(newRoutePoints.concat([e.latlng]))
            }
        },
        mousemove: (e: LeafletMouseEvent) => {
            console.log("mousemove, nextPoint?", !!nextPoint, "newRoutePoints?", !!newRoutePoints)
            if (!newRoutePoints) return
            // const { lat, lng } = e.target
            setNextPoint(e.latlng)
        },
    })
    const mPerPx = useMemo(() => getMetersPerPixel(map), [ map, zoom, ])
    const [ selectedSchool, setSelectedSchool ] = useState<string | null>(null)
    // console.log("render, selectedSchool:", selectedSchool)
    const eventHandlers = useCallback(
        (schoolName: string) => ({
            click: (e: LeafletMouseEvent) => {
                if (nextPoint) {
                    console.log("found nextPoint", nextPoint, "aborting click")
                    if (!editable)
                    if (!newRoutePoints) {
                        setNewRoutePoints([ e.latlng ])
                    } else {
                        setNewRoutePoints(newRoutePoints.concat([e.latlng]))
                    }
                    return
                }
                L.DomEvent.stopPropagation(e)
                if (schoolName == selectedSchool) return
                console.log("click:", schoolName)
                setSelectedSchool(schoolName)
            },
            mouseover: () => {
                if (nextPoint || newRoutePoints) return
                if (schoolName == selectedSchool) return
                console.log("over:", schoolName, !!nextPoint, !!newRoutePoints)
                setSelectedSchool(schoolName)
            },
        }),
        [selectedSchool, setSelectedSchool, nextPoint, newRoutePoints]
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
            const schoolsByLat = o2a<string, School, [string, number]>(signups, (name, {school}) => [name, school.lat])
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
    return <>
        <TileLayer url={url} attribution={attribution}/>
        {
            o2a<string, School, ReactNode>(signups, (schoolName, { school, signups }, idx) => {
                const selected = schoolName == selectedSchool
                const selectedFactor = selected ? 1.3 : 1
                const notSelected = selectedSchool && !selected
                // console.log(`school ${schoolName}, ${selected}`)
                const iconFade = 0.4
                const lineOpacity = selected ? 1 : (notSelected ? 0.2 : 0.3)
                // const color = latColor(school.lat)
                const color = idxColor(schoolsByLat[schoolName])
                // console.log(`school ${schoolName}: lat ${school.lat}, color ${color}`)
                const lineColor = color
                const signupOpacity = notSelected ? iconFade : 1
                const signupColor = color
                const schoolOpacity = notSelected ? iconFade : 1
                const schoolColor = color
                const tooltipOpacity = 0.8
                return <Fragment key={`${selectedSchool}-${schoolName}-${idx}`}>
                    {/* School */}
                    <Marker
                        position={school}
                        icon={schoolIcon({ size: schoolSize * selectedFactor, bg: signupColor, fg: "black", opacity: schoolOpacity })}
                        // opacity={schoolOpacity}
                        eventHandlers={eventHandlers(schoolName)}
                    >
                        <Tooltip className={css.tooltip} permanent={selected} opacity={tooltipOpacity}>{schoolName}</Tooltip>
                    </Marker>
                    {
                        signups.map((ll, idx) =>
                            <Fragment key={`${selectedSchool}-${schoolName}-${idx}`}>
                                {/* Home to School */}
                                <Polyline
                                    positions={[ ll, school ]}
                                    color={lineColor} fillColor={lineColor}
                                    weight={5}
                                    opacity={lineOpacity} fillOpacity={lineOpacity}
                                />
                                {/* Home */}
                                <Marker
                                    position={ll}
                                    icon={houseIcon({ size: houseSize * selectedFactor, bg: schoolColor, fg: "black", opacity: signupOpacity })}
                                    // opacity={signupOpacity}
                                    eventHandlers={eventHandlers(schoolName)}
                                >
                                    <Tooltip className={css.tooltip} opacity={tooltipOpacity}>{schoolName}</Tooltip>
                                </Marker>
                            </Fragment>
                        )
                    }
                </Fragment>
            })
        }
        {newRoutePoints && <Polyline positions={newRoutePoints} weight={10} color={"red"} fillColor={"red"} />}
        {newRoutePoints && nextPoint && <Polyline positions={[newRoutePoints[newRoutePoints.length - 1], nextPoint ]} weight={10} color={"pink"} fillColor={"pink"} />}
        {newRoutePoints?.map((point, idx) =>
            <Circle
                key={`newRoute-${idx}`}
                center={point} radius={25}
                color={"grey"} fillColor={"white"}
                eventHandlers={{
                    click: e => {
                        console.log("Closing route:", JSON.stringify(newRoutePoints))
                        L.DomEvent.stopPropagation(e)
                        setNewRoutes(newRoutes.concat([newRoutePoints]))
                        setNewRoutePoints(null)
                        setNextPoint(null)
                    }
                }}
            >
            </Circle>
        )}
        {/* New route lines */}
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
                center={point} radius={50}
                weight={3}
                color={"black"} fillColor={"white"}
                fillOpacity={0.8}
            />
        ))}
        {/* Route lines */}
        {entries(routes).map(([ name, { color, positions } ], idx) =>
            <Polyline
                key={`route-${idx}`}
                positions={positions}
                weight={10}
                color={color} fillColor={color}
            />
        )}
        {/* Route stops */}
        {entries(routes).map(([ name, { color, positions } ], idx) =>
            positions.map(point => {
                const stop = point.stop
                if (!stop) return
                return <Circle
                    key={`route-${name}-stop-${stop.name}`}
                    center={point} radius={50}
                    weight={3}
                    color={"black"} fillColor={"white"}
                    fillOpacity={0.8}
                >
                    <Tooltip className={css.tooltip}>{stop.name}: {stop.time}</Tooltip>
                </Circle>
            })
        )}
    </>
}

const Map = ({ signups, ...props }: MapContainerProps & { signups: Props }) => {
    return (
        <MapContainer {...props}>
            <Layers signups={signups} />
        </MapContainer>
    )
}

export default Map;
