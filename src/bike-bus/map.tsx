import {Dispatch, Fragment, ReactNode, useCallback, useMemo, useState} from 'react';
import L, {LeafletMouseEvent} from 'leaflet';
import 'leaflet/dist/leaflet.css';

import css from './map.module.css';

import {Circle, MapContainer, Marker, Polyline, TileLayer, Tooltip, useMapEvents,} from 'react-leaflet'
import {MapContainerProps} from "react-leaflet/lib/MapContainer";
import {Props, SchoolSignups} from "./map-utils";
import {entries, filterEntries, fromEntries, mapEntries, o2a} from "next-utils/objs";
import {LL} from "next-utils/params";
import {ParsedParams} from "./params";

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
    time?: string
    times?: { [route: string]: string | string[] }
}
type RoutePoint = LL & {
    stop?: Stop
    name?: string
}
type SegmentOffset = { start: string, end: string, offsets: { [route: string]: number } }
type Route = {
    color: string
    positions: RoutePoint[]
    offsets?: SegmentOffset[]
}

const summit139 = { lat: 40.73693344188031, lng: -74.05880570411684, name: "Summit & 139", }
const summitHopkins = { lat: 40.73832355261124, lng: -74.05869841575624, name: "Summit & Hopkins", }
const ps26 = { lat: 40.7393884715907, lng: -74.05757188796998, stop: { name: "PS 26", times: { red: "7:35am", green: "7:56am", blue: "7:56am" }}}
const lincolnPark = { lat: 40.724087769759464, lng: -74.07970547676088, stop: { name: "Lincoln Park", time: "8:20am", } }
const belmontWestSide = { lat: 40.723689351674786, lng: -74.07892227172853, name: "Belmont & West Side", }
const mcginleySquare = { lat: 40.725356186961825, lng: -74.068021774292  , stop: { name: "McGinley Square", time: "7:55am", }, }
const montgomeryWestSide = { lat: 40.72830569177484, lng: -74.07541921625074, name: "Montgomery & West Side"}

const pershingField = { lat: 40.74250183922047 , lng: -74.05369877815248, stop: { name: "Pershing Field", time: "7:30am", }, }
const summitSanford = { lat: 40.74282698670428 , lng: -74.05463218688966, name: "Summit & Sanford", }
const summitCarlton = { lat: 40.74254654709375, lng: -74.05484139919282, name: "Summit & Carlton" }

const ps3ms4 = { lat: 40.71777784806193, lng: -74.05000269412996, stop: { name: "PS 3 / MS 4", times: { orange: ["7:50am", "8:35am"], green: "8:35am", }}}
const groveSt = { lat: 40.71958306715651, lng: -74.04291093349458, stop: { name: "Grove St Plaza", times: { Orange: "8:02am", pink: "7:55am" } }}

const westSideToTeccs = [
    montgomeryWestSide,
    { lat: 40.734388894945276, lng: -74.07137453556062, name: "West Side & Pavonia", },
    { lat: 40.73479537862304, lng: -74.07276928424837, },
    { lat: 40.73614488662359, lng: -74.07209873199464, stop: { name: "TECCS", time: "8:10am", }},
]

const palisadeHopkinsToNJT = [
    { lat: 40.73408809542487, lng: -74.0506410598755, stop: { name: "Palisade & Hopkins", time: "7:55am" } },
    { lat: 40.73192555073219, lng: -74.05261516571046, name: "Palisade & 139", },
    { lat: 40.73147026920899, lng: -74.05188560485841, name: "Hoboken Ave & 139", },
    { lat: 40.73261659709138, lng: -74.05028700828554, },
    { lat: 40.734023057511926, lng: -74.04897809028627, },
    { lat: 40.73509617494571, lng: -74.0482807159424, },
    { lat: 40.73570589304912, lng: -74.04555559158327, stop: { name: 'Hoboken Ave & NJ Transit Path', time: '8:05am', }},
]
const greenBlueToNJT = [
    { lat: 40.73783986240655, lng: -74.06729757785799, stop: { name: "Canco Park", time: "7:50am", }},
    { lat: 40.7374254, lng: -74.0659547, name: "Tonnele & Dey", },
    { lat: 40.73809593412948, lng: -74.06563997268678, name: "Tonnele & St Pauls", },
    { lat: 40.73773011708069, lng: -74.06462073326112, name: "St Pauls & Liberty", },
    { lat: 40.73754314314559, lng: -74.0627431869507, stop: { name: "PS 31 / Golden Door", time: "7:53am", }},
    { lat: 40.7375077, lng: -74.0610113, },
    { lat: 40.73733991001137, lng: -74.05920267105104, },
    summit139,
    summitHopkins,
    ps26,
    { lat: 40.73963640829574, lng: -74.05796885490419, },
    { lat: 40.73972989238724, lng: -74.05943870544435, stop: { name: "MS 7", time: "7:58am", }},
    { lat: 40.7397786666437, lng: -74.06021654605867, name: "Collard & Laidlaw" },
    { lat: 40.73884382050208, lng: -74.0604203939438, name: "Collard & Hopkins" },
    summitHopkins,
    { lat: 40.736730206883486, lng: -74.05567288398744, stop: { name: 'PS 6', time: '8:00am', }},
    ...palisadeHopkinsToNJT
]

const hamiltonPark = { lat: 40.72686036833718, lng: -74.04423594474794, stop: { name: "Hamilton Park", times: { green: "8:15am", orange: "8:15am", yellow: "7:30am", }}}
const ccdBrunswickVarick = [
    { lat: 40.721892375167045, lng: -74.0513062477112, name: "CCD & Brunswick", },
    { lat: 40.72187204710097, lng: -74.0506410598755, },
    { lat: 40.72110364165123, lng: -74.04821097850801, name: "CCD & Varick" },
]
const ccdVarickBrunswick = [...ccdBrunswickVarick]
ccdVarickBrunswick.reverse()
const hpPs5Ps3 = [
    { lat: 40.72761244627582, lng: -74.04411256313325, name: "McWilliams & Pavonia", },
    hamiltonPark,
    { lat: 40.727360399481135, lng: -74.05020117759706, },
    { lat: 40.724534970891085, lng: -74.05065715312959, name: "Brunswick & 4th" },
    { lat: 40.724644737982274, lng: -74.05206799507143, },
    { lat: 40.72494558019309, lng: -74.05242204666139, stop: { name: "PS 5", time: "8:25am", }},
    { lat: 40.724429269076595, lng: -74.05327498912813, },
    { lat: 40.72386823355885, lng: -74.05153691768648, },
    { lat: 40.72379505466438, lng: -74.05076444149019, name: "Brunswick & 3rd" },
    { lat: 40.72240870596347, lng: -74.05096828937532, stop: { name: "Brunswick & 1st", time: "8:30am", }},
    ...ccdBrunswickVarick,
    ps3ms4,
]

const routes: { [k: string]: Route } = {
    red: {
        color: "red",
        positions: [
            pershingField,
            summitSanford,
            summitCarlton,
            { lat: 40.74101426921151 , lng: -74.05582308769227, },
            { lat: 40.73827477728785 , lng: -74.05871987342836, },
            ps26,
            summitHopkins,
            summit139,
            { lat: 40.73490919360775 , lng: -74.0592133998871 , name: "Summit & Newark", },
            { lat: 40.73257594750422 , lng: -74.05958890914918, name: "Summit & Pavonia", },
            { lat: 40.73043774421105 , lng: -74.06129479408266, name: "Summit & Sip", },
            { lat: 40.73080360135806 , lng: -74.06440615653993, name: "Sip & Bergen", },
            { lat: 40.728510863374794, lng: -74.06690597534181, name: "Bergen & Vroom"},
            { lat: 40.72718559227259 , lng: -74.0671741962433 , },
            mcginleySquare,
            { lat: 40.724429269076595, lng: -74.06975984573366, },
            { lat: 40.72337224169876 , lng: -74.07050013542177, },
            { lat: 40.720908489648345, lng: -74.07275319099428, name: "Belmont & Bergen", },
            { lat: 40.72212818027965 , lng: -74.07572507858278, },
            { lat: 40.722437165024765, lng: -74.07618641853334, stop: { name: "LCCS", time: "8:15am", }, },
            belmontWestSide,
            lincolnPark,
            { lat: 40.723656827644206, lng: -74.08154010772706, },
            { lat: 40.722551001148226, lng: -74.08548831939699, },
            { lat: 40.72036368727873, lng: -74.08735513687135, },
            { lat: 40.71894880656658, lng: -74.08470511436464, stop: { name: "PS 33", time: "8:25am", }, },
        ],
        offsets: [
            { start: pershingField.stop.name, end: summitCarlton.name, offsets: { purple: -5 } },
            { start: ps26.stop.name, end: "Summit & 139", offsets: { blue: -5, green: -5, } },
            { start: belmontWestSide.name, end: "Lincoln Park", offsets: { blue: -5, green: -5, }, },
        ]
    },
    orange: {
        color: "hsl(27, 100%, 53%)",
        positions: [
            { lat: 40.711447223789335, lng: -74.06264366353011, stop: { name: "The Grind Coffeeshop", time: "7:35am", }},
            {"lat":40.7125268,"lng":-74.0639396},
            { lat: 40.71384197546361, lng: -74.06211018562318, stop: { name: "Lafayette Park / PS 22", time: "7:40am", }},
            { lat: 40.71509432380268, lng: -74.0603291988373, },
            { lat: 40.71402901599767, lng: -74.05900955200197, name: "Johnston & Pacific" },
            { lat: 40.71720049288451, lng: -74.05455708503725, name: "Pacific & Grand" },
            { lat: 40.716972802142045, lng: -74.05228257179262, name: "Grand & Monmouth" },
            { lat: 40.71824948660363, lng: -74.0515422821045, name: "Bright & Monmouth" },
            ps3ms4,
            { lat: 40.717371260430305, lng: -74.04851675033571, },  // Bright & Jersey
            { lat: 40.718054274043766, lng: -74.0481156448484, },  // York & Jersey
            { lat: 40.717571274308085, lng: -74.04657559900382, stop: { name: "Van Vorst Park", time: "7:55am", }},
            { lat: 40.72088816128179, lng: -74.04472947120668, stop: { name: "Newark Ave Plaza", time: "8:05am", }},
            { lat: 40.720790585035964, lng: -74.04443979263307, },
            { lat: 40.72755959783345, lng: -74.04340445995332, stop: { name: "PS 37", time: "8:10am", }},
            ...hpPs5Ps3,
        ],
        offsets: [
            { start: "McWilliams & Pavonia", end: "PS 3 / MS 4", offsets: { green: -5 }, },
            { start: "McWilliams & Pavonia", end: "CCD & Brunswick", offsets: { green: -5 }, },
            { start: "CCD & Brunswick", end: "CCD & Varick", offsets: { yellow: 5, green: -5, }, },
            { start: "CCD & Varick", end: "PS 3 / MS 4", offsets: { green: -5 }, },
        ]
    },
    yellow: {
        color: "yellow",
        positions: [
            hamiltonPark,
            { lat: 40.72692014655555, lng: -74.0451948682466, },
            { lat: 40.721647912036914, lng: -74.04605972157802, name: "Newark & Jersey", },
            { lat: 40.720704960202205, lng: -74.04669698192752, name: "Jersey & CCD", },
            ...ccdVarickBrunswick,
            { lat: 40.72301631837917, lng: -74.05484481068164, name: "Merseles & CCD" },
            { lat: 40.721061443563826, lng: -74.0554213795693, name: "Merseles & Montgomery" },
            { lat: 40.72379825222925, lng: -74.06420646867288, name: "Montgomery & Baldwin" },
            { lat: 40.72484464933251, lng: -74.0672713874966, },
            mcginleySquare,
            ...westSideToTeccs,
        ],
        offsets: [
            { start: "CCD & Varick", end: "CCD & Brunswick", offsets: { green: 5, orange: 5 }, },
        ]
    },
    green: {
        color: "hsl(119, 100%, 61%)",
        positions: [
            ...greenBlueToNJT,
            { lat: 40.728575906675815, lng: -74.0466606616974, name: "Coles & 9th", },
            { lat: 40.72833199396919, lng: -74.04402136802675, name: "9th & McWilliams", },
            ...hpPs5Ps3,
        ],
        offsets: [
            { start: "Summit & 139", end: ps26.stop.name, offsets: { red: -5 }, },
            { start: "Palisade & Hopkins", end: 'Hoboken Ave & NJ Transit Path', offsets: { blue: 5 }, },
            { start: "McWilliams & Pavonia", end: "CCD & Brunswick", offsets: { orange: 5 }, },
            { start: "CCD & Brunswick", end: "CCD & Varick", offsets: { yellow: 5, orange: 5, }, },
            { start: "CCD & Varick", end: "PS 3 / MS 4", offsets: { orange: 5 }, },
        ]
    },
    blue: {
        color: "hsl(223, 100%, 61%)",
        positions: [
            ...palisadeHopkinsToNJT,
            { lat: 40.73563272717176, lng: -74.04402136802675, },
            { lat: 40.7362749582375, lng: -74.04395699501039, },
            { lat: 40.73639690014456, lng: -74.04331326484682, },
            { lat: 40.73773824637029, lng: -74.04402136802675, name: "NJT path at Observer", },
            { lat: 40.73838045710997, lng: -74.04369950294496, },
            { lat: 40.74141258356825, lng: -74.04275536537172, },
            { lat: 40.74130690856319, lng: -74.04225111007692, name: "2nd St HBLR", },
            { lat: 40.740843562328465, lng: -74.04240131378175, },
            { lat: 40.74068911286629, lng: -74.04157519340517, },
            { lat: 40.739420987932526, lng: -74.04192924499513, },
            { lat: 40.73827477728785, lng: -74.03542757034303, name: "1st & Clinton", },
            { lat: 40.7430114, lng: -74.0339956, stop: { name: "Mustard Seed School", time: "8:15am", } },
            { lat: 40.74201411501444, lng: -74.0283787250519, },
            { lat: 40.74090046467149, lng: -74.02767062187196, },
            { lat: 40.7406034, lng: -74.0276482, stop: { name: "Stevens Cooperative", time: "8:20am", } },
        ],
        offsets: [
            { start: "Palisade & Hopkins", end: 'Hoboken Ave & NJ Transit Path', offsets: { green: -5 }, },
        ]
    },
    pink: {
        color: "pink",
        positions: [
            { lat: 40.713442633573116, lng: -74.03457386242185, stop: { name: "Bluestone Lane Coffee", time: "7:45am" }},
            { lat: 40.71365539708247, lng: -74.036295982652, name: "Greene & Morris" },
            { lat: 40.72015227023285, lng: -74.035062789917, name: "Greene & Bay" },
            { lat: 40.72185171902871, lng: -74.03636097908021, name: "Washington & 2nd" },
            { lat: 40.72239650921919, lng: -74.04248714447023, name: "Grove & 2nd" },
            // { lat: 40.72165656921906, lng: -74.042626619339, },
            // { lat: 40.721038591047176, lng: -74.0365755558014, },
            // { lat: 40.71773718941053, lng: -74.0371870994568, },
            groveSt,
            { lat: 40.718290144942145, lng: -74.03882861137392, name: "Columbus & Warren" },
            { lat: 40.71554158535769, lng: -74.03934359550477, name: "Grand & Warren" },
            { lat: 40.7158767, lng: -74.0426636, name: "Grand & Marin" },
            { lat: 40.7145527, lng: -74.0429482, name: "Marin & Morris" },
            { lat: 40.71390296699984, lng: -74.03803467750551, name: "Washington & Morris" },
            { lat: 40.714586068388364, lng: -74.03790056705476, stop: { name: "PS16 main building", time: "8:05am" }},
            { lat: 40.71769246486529, lng: -74.03719782829286, stop: { name: "PS16 annex", time: "8:10am" }}
        ],
    },
    purple: {
        color: "hsl(275, 100%, 67%)",
        positions: [
            pershingField,
            summitSanford,
            summitCarlton,
            { lat: 40.74474126028802, lng: -74.06049013137819, name: "Liberty & Carlton" },
            { lat: 40.74607837411974, lng: -74.05956208705904, name: "Manhattan & Liberty" },
            { lat: 40.74641163234856, lng: -74.06042575836183, name: "Manhattan & Terrace" },
            { lat: 40.75003672372753, lng: -74.05793130397798, name: "Terrace & Lincoln" },
            { lat: 40.749406817326424, lng: -74.05626833438875, name: "Lincoln & Columbia" },
            { lat: 40.75136966727671, lng: -74.05494332313539, },
            { lat: 40.7514428158444, lng: -74.05473947525026, name: "Columbia & Thorne" },
            { lat: 40.75527487548953, lng: -74.05223429203035, name: "North & Columbia" },
            { lat: 40.75492947089871, lng: -74.05132770538331, name: "North & Nelson" },
            // { lat: 40.75252794872285, lng: -74.04791081116464, },
            // { lat: 40.75406812615908, lng: -74.05181782402161, },
            { lat: 40.75353941255337, lng: -74.05219714565821, stop: { name: "Jersey City Global Charter School", time: "7:50am" } },
        ],
        offsets: [
            { start: pershingField.stop.name, end: summitCarlton.name, offsets: { red: 5 } },
        ]
    }
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

const Stop = ({ center, radius, stop, opacity, isSelectedRoute, displayRoute, }: {
    center: LL
    radius: number
    stop: Stop
    opacity: number
    isSelectedRoute: boolean
    displayRoute: (route: string) => boolean
}) => {
    let timeStr = stop.time
    if (!timeStr) {
        const times = stop.times
        if (!times) {
            console.warn("Stop missing time and times:", stop)
        } else {
            const filteredTimes = entries(filterEntries(times, (route, t) => displayRoute(route)))
            const times2Routes = {} as { [time: string]: string[] }
            filteredTimes.forEach(([ route, time ]) => {
                const times = time instanceof Array ? time : [time]
                times.forEach(t => {
                    if (!(t in times2Routes)) {
                        times2Routes[t] = []
                    }
                    times2Routes[t].push(route)
                })
            })
            const includeRoutes = entries(times2Routes).length > 1
            const timeStrs = o2a<string, string[], string>(times2Routes, (time, routes) => {
                //const ts = `${t instanceof Array ? t.join(", ") : t}`
                return includeRoutes ? `${time} (${routes.join(", ")})` : time
            })
            console.log("stop", stop.name, "filteredTimes:", filteredTimes, times2Routes, timeStrs)
            timeStr = timeStrs.join(", ")
        }
    }
    return <Circle
        center={center} radius={radius}
        weight={3}
        color={"black"} fillColor={"white"}
        opacity={opacity} fillOpacity={opacity}
    >
        <Tooltip className={css.tooltip} permanent={isSelectedRoute}>{stop.name}: {timeStr}</Tooltip>
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

const Layers = ({ signups, setLL, zoom, setZoom, showHomes, showRoutes, hideRoutes, showSchools, hideSchools, drawMode }: {
    signups: Props
    setLL: Dispatch<LL>
    zoom: number
    setZoom: Dispatch<number>
    showHomes: boolean
    showRoutes: string[] | undefined
    hideRoutes: boolean
    showSchools: string[] | undefined
    hideSchools: boolean
    drawMode: boolean
}) => {
    const { url, attribution } = MAPS['alidade_smooth_dark']
    const [ newRoutes, setNewRoutes ] = useState<LL[][]>([])
    // console.log("num routes:", newRoutes.length)
    const [ newRoutePoints, setNewRoutePoints ] = useState<LL[] | null>(null)
    const [ nextPoint, setNextPoint ] = useState<LL | null>(null)
    const [ selectedRoute, setSelectedRoute ] = useState<string | null>(null)
    // const [ zoom, setZoom ] = useState<number | null>(null)
    const map: L.Map = useMapEvents({
        zoom: () => {
            console.log("map zoom:", map.getZoom())
            setZoom(map.getZoom())
        },
        moveend: () => setLL(map.getCenter()),
        dragend: e => console.log("map dragend:", map.getCenter(), e),
        click: (e: LeafletMouseEvent) => {
            setSelectedSchool(null)
            setSelectedRoute(null)
            // const { lat, lng } = e.latlng
            console.log(`map click: latlng:`, JSON.stringify(e.latlng), "newRoutePoints:", newRoutePoints, "nextPoint:", nextPoint, "e:", e)
            if (selectedSchool || selectedRoute) return
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
    const [ selectedSchool, setSelectedSchool ] = useState<string | null>(null)
    // console.log("render, selectedSchool:", selectedSchool)
    const eventHandlers = useCallback(
        (schoolName: string) => ({
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
    const minRoutePointZoom = 13

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
    const displayRoutes = !hideRoutes || showRoutes?.length
    const displaySchools = !hideSchools || showSchools?.length
    const displayRoute = useCallback(
        (routeName: string) => !showRoutes || showRoutes.includes(routeName),
        [ showRoutes ]
    )
    return <>
        <TileLayer url={url} attribution={attribution}/>
        {
            o2a<string, SchoolSignups, ReactNode>(signups, (schoolName, { school, signups }, idx) => {
                const showSchool = !showSchools || showSchools.includes(school.id)
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
                    {
                        // School
                        displaySchools && showSchool &&
                        <Marker
                            position={school}
                            icon={schoolIcon({ size: schoolSize * selectedFactor, bg: signupColor, fg: "black", opacity: schoolOpacity })}
                            // opacity={schoolOpacity}
                            eventHandlers={eventHandlers(schoolName)}
                        >
                            <Tooltip className={css.tooltip} permanent={selected} opacity={tooltipOpacity}>{schoolName}</Tooltip>
                        </Marker>
                    }
                    {
                        // Homes
                        ((!showSchools && showHomes) || showSchools?.includes(school.id)) &&
                        signups?.map((ll, idx) =>
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
            entries(routes).map(([ routeName, { color, positions, offsets } ], routeIdx) => {
                const showRoute = displayRoute(routeName)
                if (!displayRoutes || !showRoute) return
                const isSelectedRoute = routeName == selectedRoute
                const isDeselectedRoute = selectedRoute && !isSelectedRoute
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
                        click: (e: LeafletMouseEvent) => {
                            console.log("selected route:", routeName)
                            setSelectedRoute(routeName)
                            L.DomEvent.stopPropagation(e)
                        },
                        mouseover: (e: LeafletMouseEvent) => {
                            console.log("selected route:", routeName)
                            setSelectedRoute(routeName)
                            L.DomEvent.stopPropagation(e)
                        }
                    }
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
                if (!displayRoutes || !showRoute) return
                // console.log(`${routeName}:`)
                const isSelectedRoute = routeName == selectedRoute
                const isDeselectedRoute = selectedRoute && !isSelectedRoute
                const routeStopOpacity = isDeselectedRoute ? 0.4 : 0.8
                return positions.map((point, stopIdx) => {
                    const stop = point.stop
                    if (stop) {
                        // console.log(`  ${stop.time}: ${stop.name}`)
                        return <Stop
                            key={`route-${routeName}-stop-${stop.name}=${stopIdx}-${routeStopOpacity}-${isSelectedRoute}`}
                            center={point} radius={stopRadius}
                            stop={stop}
                            opacity={routeStopOpacity}
                            isSelectedRoute={isSelectedRoute}
                            displayRoute={displayRoute}
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
            })}
    </>
}

const Map = ({ signups, params, ...props }: MapContainerProps & { signups: Props, params: ParsedParams, }) => {
    const {
        ll: [ center, setLL ],
        z: [ zoom, setZoom ],
        draw: [ drawMode, ],
        h: [ showHomes ],
        r: [ showRoutes ],
        R: [ hideRoutes ],
        s: [ showSchools ],
        S: [ hideSchools ],
    } = params
    return (
        <MapContainer center={center} zoom={zoom} {...props}>
            <Layers
                signups={signups}
                setLL={setLL}
                zoom={zoom} setZoom={setZoom}
                showHomes={showHomes}
                showRoutes={showRoutes}
                hideRoutes={hideRoutes}
                showSchools={showSchools}
                hideSchools={hideSchools}
                drawMode={drawMode}
            />
        </MapContainer>
    )
}

export default Map;
