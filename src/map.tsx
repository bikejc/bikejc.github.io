import {Fragment, ReactNode, useCallback, useEffect, useMemo, useState} from 'react';
import L, {LatLngExpression, LeafletEventHandlerFnMap, svg} from 'leaflet';
import 'leaflet/dist/leaflet.css';

import css from './map.module.css';

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
// import {bikeLaneTypes, bmpLaneTypes, MAPS, wardInfos} from "../layers";

import {Circle, MapContainer, Polygon, Polyline, TileLayer, Tooltip, useMapEvents,} from 'react-leaflet'
import {MapContainerProps} from "react-leaflet/lib/MapContainer";
import {JC, Props, School} from "./map-utils";
import {entries, fromEntries, o2a} from "next-utils/objs";
import {sign} from "crypto";

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

const Layers = ({ center, zoom, signups }: { center: LatLngExpression, zoom: number, signups: Props }) => {
    const { url, attribution } = MAPS['alidade_smooth_dark']
    const map = useMapEvents({
        zoom: () => console.log("zoom:", map.getZoom()),
        dragend: () => console.log("move:", map.getCenter()),
        click: () => { setSelectedSchool(null) },
    })
    const [ selectedSchool, setSelectedSchool ] = useState<string | null>(null)
    console.log("render, selectedSchool:", selectedSchool)
    const eventHandlers = useCallback(
        (schoolName: string) => ({
            click: () => {
                if (schoolName == selectedSchool) return
                console.log("click:", schoolName)
                setSelectedSchool(schoolName)
            },
            mouseover: () => {
                if (schoolName == selectedSchool) return
                console.log("over:", schoolName)
                setSelectedSchool(schoolName)
            },
            mousedown: () => {
                if (schoolName == selectedSchool) return
                console.log("down:", schoolName)
                setSelectedSchool(schoolName)
            },
        }),
        [selectedSchool, setSelectedSchool]
    )
    const numSchools = entries(signups).length
    const minLat = Math.min(...o2a(signups, (name, { school }) => school.lat))
    const maxLat = Math.max(...o2a(signups, (name, { school }) => school.lat))
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
            console.log("schoolsByLat:", schoolsByLat)
            return fromEntries(schoolsByLat.map(([name,], idx) => [ name, idx ]))
        },
        [ signups ]
    )
    console.log("schoolsByLat:", schoolsByLat)
    function idxColor(idx: number) {
        const hue =  minHue + idx * hueRange / (numSchools - 1)
        return `hsl(${hue},${sat},${lum})`
    }
    function latColor(lat: number) {
        const hue =  minHue + Math.round((lat - minLat) / latRange * hueRange)
        return `hsl(${hue},${sat},${lum})`
    }
    return <>
        <TileLayer url={url} attribution={attribution}/>
        {
            o2a<string, School, ReactNode>(signups, (schoolName, { school, signups }, idx) => {
                const selected = schoolName == selectedSchool
                const notSelected = selectedSchool && !selected
                console.log(`school ${schoolName}, ${selected}`)
                const circleFade = 0.4
                const lineOpacity = selected ? 1 : (notSelected ? 0.2 : 0.3)
                // const color = latColor(school.lat)
                const color = idxColor(schoolsByLat[schoolName])
                console.log(`school ${schoolName}: lat ${school.lat}, color ${color}`)
                const lineColor = color
                const signupOpacity = notSelected ? circleFade : 1
                const signupColor = color
                const schoolOpacity = notSelected ? circleFade : 1
                const schoolColor = color
                return signups.map((ll, idx) =>
                    <Fragment key={`${selectedSchool}-${schoolName}-${idx}`}>
                        <Polyline
                            positions={[ ll, school ]}
                            color={lineColor} fillColor={lineColor}
                            weight={5}
                            fill
                            opacity={lineOpacity} fillOpacity={lineOpacity}
                        />
                        <Circle
                            center={ll} radius={30}
                            color={signupColor} fillColor={signupColor}
                            opacity={signupOpacity} fillOpacity={signupOpacity}
                            eventHandlers={eventHandlers(schoolName)}
                        >
                            <Tooltip sticky={true}>{schoolName}</Tooltip>
                        </Circle>
                        <Circle
                            // key={`${selectedSchool}-${schoolName}-${idx}`}
                            center={school} radius={40}
                            color={schoolColor} fillColor={"schoolColor"}
                            opacity={schoolOpacity} fillOpacity={schoolOpacity}
                            eventHandlers={eventHandlers(schoolName)}
                        >
                            <Tooltip className={css.tooltip} sticky={true} permanent={selected}>{schoolName}</Tooltip>
                        </Circle>
                    </Fragment>
                )
            })
        }
    </>
}

const Map = ({ signups, ...props }: MapContainerProps & { signups: Props }) => {
    return (
        <MapContainer {...props}>
            <Layers {...JC} signups={signups} />
        </MapContainer>
    )
}

export default Map;
