import {LL} from "next-utils/params";
import {entries, fromEntries, o2a} from "next-utils/objs";
import {Fragment} from "react";
import css from "../../pages/bike-bus/index.module.css";
import A from "next-utils/a";
import MD from "../md"

export type Stop = {
    name: string
    time?: string
    times?: { [route: string]: string | string[] }
}
export type RoutePoint = LL & {
    stop?: Stop
    name?: string
}
export type SegmentOffset = { start: string, end: string, offsets: { [route: string]: number } }
export type Route = {
    color: string
    active?: boolean
    positions: RoutePoint[]
    offsets?: SegmentOffset[]
}

export const summit139 = { lat: 40.73693344188031, lng: -74.05880570411684, name: "Summit & 139", }
export const summitHopkins = { lat: 40.73832355261124, lng: -74.05869841575624, name: "Summit & Hopkins", }
export const ps6 = { lat: 40.736730206883486, lng: -74.05567288398744, stop: { name: 'PS 6', time: '7:45am', }}
export const ps26 = {
    lat: 40.7393884715907, lng: -74.05757188796998,
    name: "PS 26",
    // stop: { name: "PS 26", times: { red: "7:35am", green: "7:56am", blue: "7:56am" }}
}

export const lincolnPark = { lat: 40.724087769759464, lng: -74.07970547676088, stop: { name: "Lincoln Park", times: { red: "8:20am", silver: "8:10am" } } }
export const belmontWestSide = { lat: 40.723689351674786, lng: -74.07892227172853, } // Belmont & West Side
export const lccs = { lat: 40.722437165024765, lng: -74.07618641853334, stop: { name: "LCCS", times: { red: "8:15am", silver: "8:15am" } }, }
export const belmontBergen = { lat: 40.720908489648345, lng: -74.07275319099428, stop: { name: "Belmont & Bergen / PS 17", times: { red: "8:10am", silver: "8:20am" } }, }

export const mcginleySquare = { lat: 40.725356186961825, lng: -74.068021774292  , stop: { name: "McGinley Square", time: "7:55am", }, }
export const montgomeryWestSide = { lat: 40.72830569177484, lng: -74.07541921625074, name: "Montgomery & West Side"}

export const pershingField = { lat: 40.74250183922047 , lng: -74.05369877815248, stop: { name: "Pershing Field", time: "7:30am", }, }
export const summitSanford = { lat: 40.74282698670428 , lng: -74.05463218688966, name: "Summit & Sanford", }
export const summitCarlton = { lat: 40.74254654709375, lng: -74.05484139919282, name: "Summit & Carlton" }

export const ps3ms4 = { lat: 40.71777784806193, lng: -74.05000269412996, stop: { name: "PS 3 / MS 4", times: { orange: ["7:50am", "8:35am"], green: "8:35am", }}}
export const groveSt = { lat: 40.71958306715651, lng: -74.04291093349458, stop: { name: "Grove St Plaza", times: { orange: "8:02am", pink: "7:45am" } }}

export const westSideToTeccs = [
    montgomeryWestSide,
    { lat: 40.734388894945276, lng: -74.07137453556062, name: "West Side & Pavonia", },
    { lat: 40.73479537862304, lng: -74.07276928424837, },
    { lat: 40.73614488662359, lng: -74.07209873199464, stop: { name: "TECCS", time: "8:10am", }},
]

export const ps6ToNJT = [
    ps6,
    { lat: 40.73408809542487, lng: -74.0506410598755, stop: { name: "Palisade & Hopkins", time: "7:55am" } },
    { lat: 40.73192555073219, lng: -74.05261516571046, name: "Palisade & 139", },
    { lat: 40.73147026920899, lng: -74.05188560485841, name: "Hoboken Ave & 139", },
    { lat: 40.73261659709138, lng: -74.05028700828554, },
    { lat: 40.734023057511926, lng: -74.04897809028627, },
    { lat: 40.73509617494571, lng: -74.0482807159424, },
    { lat: 40.73570589304912, lng: -74.04555559158327, stop: { name: 'Hoboken Ave & NJ Transit Path', time: '8:05am', }},
]
export const cancoToNJT = [
    { lat: 40.73783986240655, lng: -74.06729757785799, stop: { name: "Canco Park", time: "7:30am", }},
    { lat: 40.7374254, lng: -74.0659547, name: "Tonnele & Dey", },
    { lat: 40.73809593412948, lng: -74.06563997268678, name: "Tonnele & St Pauls", },
    { lat: 40.73773011708069, lng: -74.06462073326112, name: "St Pauls & Liberty", },
    { lat: 40.73754314314559, lng: -74.0627431869507, stop: { name: "PS 31 / Golden Door", time: "7:35am", }},
    { lat: 40.7375077, lng: -74.0610113, },
    { lat: 40.73733991001137, lng: -74.05920267105104, },
    summit139,
    summitHopkins,
    ...ps6ToNJT
]

export const hamiltonPark = { lat: 40.72686036833718, lng: -74.04423594474794, stop: { name: "Hamilton Park", times: { green: "8:15am", orange: "8:15am", yellow: "7:30am", }}}
export const ccdBrunswickVarick = [
    { lat: 40.721892375167045, lng: -74.0513062477112, name: "CCD & Brunswick", },
    { lat: 40.72187204710097, lng: -74.0506410598755, },
    { lat: 40.72110364165123, lng: -74.04821097850801, name: "CCD & Varick" },
]
export const ccdVarickBrunswick = [...ccdBrunswickVarick]
ccdVarickBrunswick.reverse()
export const hpPs5Ps3 = [
    { lat: 40.72761244627582, lng: -74.04411256313325, name: "McWilliams & Pavonia", },
    hamiltonPark,
    { lat: 40.727360399481135, lng: -74.05020117759706, },
    { lat: 40.724534970891085, lng: -74.05065715312959, name: "Brunswick & 4th" },
    { lat: 40.724644737982274, lng: -74.05206799507143, },
    { lat: 40.72494558019309, lng: -74.05242204666139, stop: { name: "PS 5", time: "8:25am", }},
    { lat: 40.724429269076595, lng: -74.05327498912813, },
    { lat: 40.72386823355885, lng: -74.05153691768648, },
    { lat: 40.72379505466438, lng: -74.05076444149019, name: "Brunswick & 3rd" },
    { lat: 40.72240870596347, lng: -74.05096828937532, },  // Brunswick & 1st
    ...ccdBrunswickVarick,
    ps3ms4,
]

export const ps33 = {
    lat: 40.718436514755226, lng: -74.0836000442505,
    stop: { name: "West Side & Union / PS 33", times: { red: "8:25am", silver: "8:00am", } },
}
const malloryUnion = { lat: 40.72036368727873, lng: -74.08735513687135, name: "Mallory & Union" }
export const ps17MalloryUnion = [
    belmontBergen,
    { lat: 40.72212818027965 , lng: -74.07572507858278, },
    lccs,
    belmontWestSide,
    lincolnPark,
    { lat: 40.723656827644206, lng: -74.08154010772706, },
    { lat: 40.722551001148226, lng: -74.08548831939699, name: "Mallory & Communipaw" },
    malloryUnion,
]
export const malloryUnionPs17 = [...ps17MalloryUnion]
malloryUnionPs17.reverse()

export const purple = {
    active: false,
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
        { start: pershingField.stop.name, end: summitCarlton.name, offsets: { blue: 5, red: 5 } },
    ]
}

const pershingSummitHopkins = [
    pershingField,
    summitSanford,
    summitCarlton,
    { lat: 40.74101426921151 , lng: -74.05582308769227 },  // mid-reservoir on Summit
    ps26,
    summitHopkins,
]

export const routes: { [k: string]: Route } = {
    silver: {
        color: "lightgrey",
        positions: [
            { lat: 40.71427643262643, lng: -74.08862719563707, stop: { name: "West Side & Grant", time: "7:45am" }},
            { lat: 40.71374845499957, lng: -74.08924877643587, },
            { lat: 40.71524070064235, lng: -74.09210264682771, },
            ...malloryUnionPs17,
        ],
        offsets: [
            { start: malloryUnion.name, end: belmontBergen.stop.name, offsets: { red: 5 } },
        ]
    },
    red: {
        color: "red",
        positions: [
            ...pershingSummitHopkins,
            summit139,
            { lat: 40.73490919360775 , lng: -74.0592133998871 , name: "Summit & Newark", },
            { lat: 40.73257594750422 , lng: -74.05958890914918, name: "Summit & Pavonia", },
            { lat: 40.73043774421105 , lng: -74.06129479408266, name: "Summit & Sip", },
            { lat: 40.73080360135806 , lng: -74.06440615653993, stop: { name: "JSQ - Sip & Bergen", time: "7:45am" } },
            { lat: 40.728510863374794, lng: -74.06690597534181, name: "Bergen & Vroom"},
            { lat: 40.72718559227259 , lng: -74.0671741962433 , },
            mcginleySquare,
            { lat: 40.724429269076595, lng: -74.06975984573366, },
            { lat: 40.72337224169876 , lng: -74.07050013542177, },
            ...ps17MalloryUnion,
            ps33,
        ],
        offsets: [
            { start: pershingField.stop.name, end: summitCarlton.name, offsets: { blue: 5, purple: -5 } },
            { start: summitCarlton.name, end: summitHopkins.name, offsets: { blue: 5 } },
            { start: summitHopkins.name, end: "Summit & 139", offsets: { green: 5, } },
            { start: belmontBergen.stop.name, end: malloryUnion.name, offsets: { silver: 5 } },
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
            ...cancoToNJT,
            { lat: 40.728575906675815, lng: -74.0466606616974, name: "Coles & 9th", },
            { lat: 40.72833199396919, lng: -74.04402136802675, name: "9th & McWilliams", },
            ...hpPs5Ps3,
        ],
        offsets: [
            { start: "Summit & 139", end: summitHopkins.name, offsets: { red: 5 }, },
            { start: summitHopkins.name, end: 'Hoboken Ave & NJ Transit Path', offsets: { blue: 5 }, },
            { start: "McWilliams & Pavonia", end: "CCD & Brunswick", offsets: { orange: 5 }, },
            { start: "CCD & Brunswick", end: "CCD & Varick", offsets: { yellow: 5, orange: 5, }, },
            { start: "CCD & Varick", end: "PS 3 / MS 4", offsets: { orange: 5 }, },
        ]
    },
    blue: {
        color: "hsl(223, 100%, 61%)",
        positions: [
            ...pershingSummitHopkins,
            ...ps6ToNJT,
            { lat: 40.73563272717176, lng: -74.04402136802675, },
            { lat: 40.7362749582375, lng: -74.04395699501039, },
            { lat: 40.73639690014456, lng: -74.04331326484682, },
            { lat: 40.73773824637029, lng: -74.04402136802675, name: "NJT path at Observer", },
            { lat: 40.73838045710997, lng: -74.04369950294496, },
            { lat: 40.74141258356825, lng: -74.04275536537172, },
            { lat: 40.74130690856319, lng: -74.04225111007692, name: "2nd St HBLR", },
            { lat: 40.740843562328465, lng: -74.04240131378175, },
            { lat: 40.740502147248066, lng: -74.04066860675813, },
            { lat: 40.74178650916105, lng: -74.0402662754059, },
            { lat: 40.74083136896291, lng: -74.0346658229828, },
            { lat: 40.7430114, lng: -74.0339956, stop: { name: "Mustard Seed School", time: "8:15am", } },
            { lat: 40.74201411501444, lng: -74.0283787250519, },
            { lat: 40.74090046467149, lng: -74.02767062187196, },
            { lat: 40.7406034, lng: -74.0276482, stop: { name: "Stevens Cooperative", time: "8:20am", } },
        ],
        offsets: [
            { start: pershingField.stop.name, end: summitCarlton.name, offsets: { red: -5, purple: -5 } },
            { start: summitCarlton.name, end: summitHopkins.name, offsets: { red: -5 } },
            { start: summitHopkins.name, end: 'Hoboken Ave & NJ Transit Path', offsets: { green: -5 }, },
        ]
    },
    pink: {
        color: "pink",
        positions: [
            { lat: 40.713442633573116, lng: -74.03457386242185, stop: { name: "Bluestone Lane Coffee", time: "7:30am" }},
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
    purple
}

export type StopTime = { time: string, name: string }
export type StopTimes = StopTime[]
export function routeStops(routeName: string): StopTimes {
    const positions = routes[routeName].positions
    //const stops = [] as StopTimes
    const stops = {} as { [time: string]: string }
    positions.forEach(({ stop }) => {
        if (!stop) return
        const { name } = stop
        let times: string[]
        if (stop.time) {
            times = [ stop.time ]
        } else if (stop.times) {
            const routeStopTimes = stop.times[routeName]
            times = routeStopTimes instanceof Array ? routeStopTimes : [routeStopTimes]
        } else {
            return
        }
        for (let time of times) {
            stops[time] = name
        }
    })
    function parseTime(time: string): { h: number, m: number } | undefined {
        const match = time.match(/^(?<h>\d+):(?<m>\d+)am$/)
        if (!match?.groups) {
            console.error(`Unrecognized time: ${time}, route ${routeName} stop ${name}`)
            return
        }
        const { h, m } = match.groups
        return { h: parseInt(h), m: parseInt(m) }
    }
    const stopTimes = o2a<string, string, StopTime>(stops, (time, name) => ({ time, name }))
    stopTimes.sort(({ time: l }, { time: r }) => {
        const tl = parseTime(l)
        const tr = parseTime(r)
        if (!tl) return 1
        if (!tr) return -1
        return tl.h*60 + tl.m - (tr.h*60 + tr.m)
    })
    return stopTimes
}


export type RouteDisplay = { title: string, sub?: string, query: string }
export const routeHref = (routeName: string) => `${routeName}-line`

export function routeList(routeName: string, { title, sub, query }: RouteDisplay) {
    const stopTimes = routeStops(routeName)
    const url = `/bike-bus/map/?${query}`
    return <Fragment key={routeName}>
        {sub && <p style={{ marginBottom: 0, marginTop: 0 }}>({sub})</p>}
        {MD(`### Stops <a id="stops"></a>`)}
        {MD(`${stopTimes.map(({ time, name }) => `- **${time}**: ${name}`).join("\n")}`)}
        {MD(`### Map <a id="map"></a>`)}
        <iframe src={url} style={{ width: "100%", aspectRatio: "1/1" }} loading="lazy" />
        <p><A href={url}>(full screen version)</A></p>
    </Fragment>
}

export const routeDisplays: { [route: string]: RouteDisplay } = {
    red: {
        title: "Red line: Heights to West Side",
        // sub: "Pershing Field, McGinley Square, Lincoln Park",
        query: "ll=40.725_-74.070&z=13.5&r=red&s=tlb+lccs+ps17",
    },
    silver: {
        title: `Silver line: West Bergen to West Side`,
        // sub: "Berry Lane Park, Lincoln Park",
        query: `ll=40.717_-74.082&z=14&r=silver&s=tlb+lccs+ps17`,
    },
    orange: {
        title: "Orange line: Bergen Lafayette to Downtown",
        // sub: "Lafayette Park, Van Vorst Park, Hamilton Park",
        query: "ll=40.719_-74.054&z=14&r=orange&R=&s=ps5+ps3",
    },
    yellow: {
        title: "Yellow line: Downtown to West Side / JSQ",
        // sub: "Hamilton Park, McGinley Square, TECCS",
        query: "ll=40.727_-74.060&z=13.5&r=yellow&s=pp+teccs",
    },
    green: {
        title: "Green line: JSQ, Heights, Downtown",
        query: "ll=40.727_-74.056&z=13.5&r=green&R=&s=ps5+ps3",
    },
    blue: {
        title: "Blue line: Heights, Hoboken",
        query: "ll=40.739_-74.041&z=13.5&r=blue&s=mss+hola+scs",
    },
    purple: {
        title: "Purple line: Heights, Western Slope",
        query: "ll=40.748_-74.057&z=14.5&r=purple&s=jcgcs",
    },
    pink: {
        title: "Pink line: Paulus Hook / PS16",
        query: "ll=40.718_-74.038&z=15&r=pink&s=ps16",
    }
}
