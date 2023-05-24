import {LL} from "next-utils/params";
import {entries, fromEntries, mapEntries, mapValues, o2a} from "next-utils/objs";
import {Dispatch, Fragment, useMemo} from "react";
import css from "./routes.module.scss";
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
    name: string
    id: string
    title: string
    summary: string
    sub?: string
    query: string
    rwgps?: string
    color: string
    active?: boolean
    positions: RoutePoint[]
    offsets?: SegmentOffset[]
}

export const summit139 = { lat: 40.73693344188031, lng: -74.05880570411684, name: "Summit & 139", }
export const summitHopkins = { lat: 40.73832355261124, lng: -74.05869841575624, stop: { name: "Summit & Hopkins", time: "7:40am" } }
export const ps6 = { lat: 40.736730206883486, lng: -74.05567288398744, stop: { name: 'PS 6', time: '7:45am', }}
export const ps26 = {
    lat: 40.7393884715907, lng: -74.05757188796998,
    name: "PS 26",
    // stop: { name: "PS 26", times: { red: "7:35am", green: "7:56am", blue: "7:56am" }}
}

export const lincolnPark = { lat: 40.724087769759464, lng: -74.07970547676088, stop: { name: "Lincoln Park", time: "8:15am" } }
export const belmontWestSide = { lat: 40.723689351674786, lng: -74.07892227172853, } // Belmont & West Side
export const lccs = { lat: 40.722526607709575, lng: -74.07551586627962, stop: { name: "LCCS", times: { red: "8:10am", silver: "8:10am" } }, }
//export const bergenKensingtonPS17 = { lat: 40.72165250359196, lng: -74.07213628292085, stop: { name: "PS 17", times: { red: "8:05am", silver: "8:15am", teal: "7:40am", } }, }
export const bergenKensingtonPS17 = { lat: 40.72165250359196, lng: -74.07213628292085, }
export const kensingtonJFK = { lat: 40.72296975378418, lng: -74.0750813484192, }
export const bergenBelmont = { lat: 40.720908489648345, lng: -74.07275319099428, stop: { name: "Bergen & Belmont / PS 17", time: "8:05am" } }
export const jfkBelmont = { lat: 40.72212818027965 , lng: -74.07572507858278, name: "JFK & Belmont" }
export const jsq = { lat: 40.73080360135806 , lng: -74.06440615653993, stop: { name: "JSQ", times: { red: "7:50am", yellow: "8:05am" } } }
export const mcginleySquare = { lat: 40.725356186961825, lng: -74.068021774292  , stop: { name: "McGinley Sq.", times: { red: "7:55am", yellow: "7:55am", teal: "7:30am", }, }, }
export const primaryPrep = { lat: 40.72639696637659, lng: -74.06746863474763, stop: { name: "Primary Prep", times: { red: "7:54am", yellow: "8:00am" } } }

export const jsqToMcGinley = [
    jsq,
    { lat: 40.728510863374794, lng: -74.06690597534181, name: "Bergen & Vroom" },
    { lat: 40.72718559227259 , lng: -74.0671741962433 , },
    primaryPrep,
    mcginleySquare,
]
export const mcGinleyToJSQ = [...jsqToMcGinley]
mcGinleyToJSQ.reverse()

export const montgomeryWestSide = { lat: 40.72830569177484, lng: -74.07541921625074, name: "Montgomery & West Side" }

export const pershingField = { lat: 40.742794472027434, lng: -74.05348956584932, stop: { name: "Pershing Field", time: "7:30am", }, }
export const summitSanford = { lat: 40.743135875341636, lng: -74.05439078807832, name: "Summit & Sanford", }
export const summitCarlton = { lat: 40.74254654709375, lng: -74.05484139919282, name: "Summit & Carlton" }

export const ps3ms4 = { lat: 40.71777784806193, lng: -74.05000269412996, stop: { name: "PS 3 / MS 4", times: { orange: ["7:50am", "8:35am"], green: "8:35am", }}}
export const groveSt = { lat: 40.71958306715651, lng: -74.04291093349458, stop: { name: "Grove St Plaza", times: { pink: ["7:40am", "8:15am"] } }}

// export const westSideToTeccs = [
//     montgomeryWestSide,
//     { lat: 40.734388894945276, lng: -74.07137453556062, name: "West Side & Pavonia", },
//     { lat: 40.73479537862304, lng: -74.07276928424837, },
//     { lat: 40.73614488662359, lng: -74.07209873199464, stop: { name: "TECCS", time: "8:10am", }},
// ]

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
    { lat: 40.73754314314559, lng: -74.0627431869507, }, //stop: { name: "PS 31 / Golden Door", time: "7:35am", }},
    { lat: 40.7375077, lng: -74.0610113, },
    { lat: 40.73733991001137, lng: -74.05920267105104, },
    summit139,
    summitHopkins,
    ...ps6ToNJT
]

export const hamiltonPark = { lat: 40.72686036833718, lng: -74.04423594474794, stop: { name: "Hamilton Park", times: { green: "8:15am", orange: "8:15am", yellow: "7:30am", }}}
const jersey8th = { lat: 40.72692014655555, lng: -74.0451948682466, name: "Jersey & 8th (Hamilton Park)" }
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
    jersey8th,
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
    stop: { name: "PS 33", time: "8:25am" },
}
const malloryUnion = { lat: 40.72036368727873, lng: -74.08735513687135, name: "Mallory & Union" }
export const lccsToMalloryUnion = [
    lccs,
    belmontWestSide,
    lincolnPark,
    { lat: 40.723656827644206, lng: -74.08154010772706, },
    { lat: 40.722551001148226, lng: -74.08548831939699, name: "Mallory & Communipaw" },
    malloryUnion,
]
export const malloryUnionToLCCS = [...lccsToMalloryUnion]
malloryUnionToLCCS.reverse()

const pershingSummitHopkins = [
    pershingField,
    summitSanford,
    summitCarlton,
    { lat: 40.74101426921151 , lng: -74.05582308769227 },  // mid-reservoir on Summit
    ps26,
    summitHopkins,
]
const theGrindShop = { lat: 40.711447223789335, lng: -74.06264366353011, stop: { name: "The Grind Shop", time: "7:30am", }}
const communipawVanHorne = { lat: 40.7125268, lng: -74.0639396, name: "Communipaw & Van Horne" }
const unionMLK = { lat: 40.71411033780509, lng: -74.07597184181215, }
const unionBergen = { lat: 40.71588312852183, lng: -74.07894372940065, stop: { name: "Union & Bergen", time: "7:45am", }, }

const grindShopToUnionBergen = [
    theGrindShop,
    communipawVanHorne,
    { lat: 40.71300560369163, lng: -74.0645630310113, },
    { lat: 40.71448344318709, lng: -74.0666265407144, },
    { lat: 40.7131436134378, lng: -74.06758243123863, stop: { name: "Berry Lane Park", time: "7:40am" } },
    { lat: 40.71325287095062, lng: -74.06790106141335, },
    { lat: 40.71084925545855, lng: -74.06968474388124, name: "Union & Garfield" },
    unionMLK,
    unionBergen,
]
const bostwickOcean = { lat: 40.70599393172901, lng: -74.07842874526979, name: "Bostwick & Ocean" }
const oceanStegman = { lat: 40.7028951229916, lng: -74.08116459846498, name: "Ocean & Stegman" }
const oceanWegman = { lat: 40.70352140304891, lng: -74.08056378364564, }
const audubonPark = { lat: 40.70723829466288, lng: -74.08699035644533, stop: { name: "Audubon Park", time: "7:55am" }}
const ps38 = { lat: 40.709108861861516, lng: -74.09027874469759, stop: { name: "PS 38", time: "8:00am" }}
const ps15 = { lat: 40.70382234072197, lng: -74.08263444900514, stop: { name: "PS 15", time: "8:10am" }}
const ps34 = { lat: 40.70262530092376, lng: -74.09134313855512, stop: { name: "PS 34", time: "8:15am" } }
const academy1 = { lat: 40.70967815449276, lng: -74.08424377441408, stop: { name: "Academy 1 / Innovation High School", time: "7:50am" } }
const unionBergenToAcademy1 = [
    { lat: 40.714647059242964, lng: -74.08027410507204, },  // Bergen & Forrest
    academy1,
]
const unionBergenToOceanStegman = [
    ...unionBergenToAcademy1,
    bostwickOcean,
    { lat: 40.70548154023348, lng: -74.07862186431886, stop: { name: "PS 41", time: "8:00am" } },
    oceanWegman,
    oceanStegman,
    ps15,
    { lat: 40.70442421198891, lng: -74.08194780349733, },
    oceanWegman,
]
const bergenHarrison = { lat: 40.71892441180782, lng: -74.07477021217348, }
const bergenMcGinleyPS17 = [
    { lat: 40.724429269076595, lng: -74.06975984573366, },
    { lat: 40.72337224169876 , lng: -74.07050013542177, },
]

const columbusBarrow = { lat: 40.72020919027281, lng: -74.04511570930482, name: "Columbus & Barrow" }
const newarkBarrow = { lat: 40.72088816128179, lng: -74.04472947120668, stop: { name: "Newark & Barrow", times: { orange: "8:05am", pink: "8:17am" } } }
const ps37 = { lat: 40.72755959783345, lng: -74.04340445995332, stop: { name: "PS 37", times: { orange: "8:10am", pink: "8:24am" } }}
const columbusBarrowPS37 = [
    columbusBarrow,
    newarkBarrow,
    { lat: 40.720790585035964, lng: -74.04443979263307, }, // Newark & Erie
    { lat: 40.72321775167592, lng: -74.04406964778902, stop: { name: "French American Academy", times: { pink: "8:20am", orange: "8:08am" }}},
    ps37,
]

export const routes: Route[] = [
    {
        name: "red",
        id: "r",
        title: "Red line",
        summary: "Heights to West Side",
        // sub: "Pershing Field, McGinley Square, Lincoln Park",
        query: "bb=40.714-74.086+40.745-74.052&r=R&R&s=tlb+lccs+ps17+ps33&S=1",
        rwgps: "https://ridewithgps.com/routes/42858043",
        color: "red",
        positions: [
            ...pershingSummitHopkins,
            summit139,
            { lat: 40.73490919360775 , lng: -74.0592133998871 , name: "Summit & Newark", },
            { lat: 40.73257594750422 , lng: -74.05958890914918, name: "Summit & Pavonia", },
            { lat: 40.73043774421105 , lng: -74.06129479408266, name: "Summit & Sip", },
            ...jsqToMcGinley,
            ...bergenMcGinleyPS17,
            bergenKensingtonPS17,
            bergenBelmont,
            jfkBelmont,
            ...lccsToMalloryUnion,
            ps33,
        ],
        offsets: [
            { start: pershingField.stop.name, end: summitCarlton.name, offsets: { blue: 5, purple: -5 } },
            { start: summitCarlton.name, end: summitHopkins.stop.name, offsets: { blue: 5 } },
            { start: summitHopkins.stop.name, end: "Summit & 139", offsets: { green: 5, } },
            { start: jsq.stop.name, end: mcginleySquare.stop.name, offsets: { yellow: -5 } },
            { start: mcginleySquare.stop.name, end: bergenBelmont.stop.name, offsets: { teal: -5 } },
            { start: bergenBelmont.stop.name, end: ps33.stop.name, offsets: { silver: 5 } },
            // { start: lccs.stop.name, end: malloryUnion.name, offsets: { silver: -5 } },
        ]
    },
    {
        name: "orange",
        id: "o",
        title: "Orange line",
        summary: "Bergen Lafayette to Downtown",
        query: "bb=40.709-74.065+40.730-74.042&r=O&R&S=1&s=ps5+ps3+ps22",
        rwgps: "https://ridewithgps.com/routes/42858088",
        color: "hsl(27, 100%, 53%)",
        positions: [
            theGrindShop,
            communipawVanHorne,
            { lat: 40.71384197546361, lng: -74.06211018562318, stop: { name: "Lafayette Park / PS 22", time: "7:35am", }},
            { lat: 40.71509432380268, lng: -74.0603291988373, },
            { lat: 40.71402901599767, lng: -74.05900955200197, name: "Johnston & Pacific" },
            { lat: 40.71720049288451, lng: -74.05455708503725, name: "Pacific & Grand" },
            { lat: 40.716972802142045, lng: -74.05228257179262, name: "Grand & Monmouth" },
            { lat: 40.71824948660363, lng: -74.0515422821045, name: "Bright & Monmouth" },
            ps3ms4,
            { lat: 40.717371260430305, lng: -74.04851675033571, },  // Bright & Jersey
            { lat: 40.718054274043766, lng: -74.0481156448484, },  // York & Jersey
            { lat: 40.717571274308085, lng: -74.04657559900382, stop: { name: "Van Vorst Park", time: "7:55am", }},
            ...columbusBarrowPS37,
            ...hpPs5Ps3,
        ],
        offsets: [
            { start: theGrindShop.stop.name, end: communipawVanHorne.name, offsets: { silver: 5, gold: 5 } },
            { start: columbusBarrow.name, end: ps37.stop.name, offsets: { pink: -5 } },
            { start: "McWilliams & Pavonia", end: hamiltonPark.stop.name, offsets: { green: -5 }, },
            { start: hamiltonPark.stop.name, end: jersey8th.name, offsets: { green: -5, yellow: 5 }, },
            { start: jersey8th.name, end: "CCD & Brunswick", offsets: { green: -5 }, },
            { start: "CCD & Brunswick", end: "CCD & Varick", offsets: { yellow: 5, green: -5, }, },
            { start: "CCD & Varick", end: "PS 3 / MS 4", offsets: { green: -5 }, },
        ]
    },
    {
        name: "yellow",
        id: "y",
        title: "Yellow line",
        summary: "Downtown, West Side, JSQ",
        query: "bb=40.705-74.074+40.749-74.041&h&r=Y&s=pp+teccs&R&S=1",
        rwgps: "https://ridewithgps.com/routes/42858124",
        color: "hsl(62, 100%, 64%)",
        positions: [
            hamiltonPark,
            jersey8th,
            { lat: 40.721647912036914, lng: -74.04605972157802, name: "Newark & Jersey", },
            { lat: 40.720704960202205, lng: -74.04669698192752, name: "Jersey & CCD", },
            ...ccdVarickBrunswick,
            { lat: 40.72301631837917, lng: -74.05484481068164, name: "Merseles & CCD" },
            { lat: 40.721061443563826, lng: -74.0554213795693, name: "Merseles & Montgomery" },
            { lat: 40.72379825222925, lng: -74.06420646867288, name: "Montgomery & Baldwin" },
            { lat: 40.72484464933251, lng: -74.0672713874966, },
            ...mcGinleyToJSQ,
            { lat: 40.731231914467145, lng: -74.06715759100562, },
            { lat: 40.73223448999161, lng: -74.07161593437196, name: "Sip & Corbin" },
            { lat: 40.73420191161954, lng: -74.07041430473329, name: "Pavonia & Corbin" },
            // { lat: 40.732416164479304, lng: -74.07255154467805, },
            { lat: 40.73479537862304, lng: -74.07276928424837, name: "Pavonia & Giles" },
            { lat: 40.73614488662359, lng: -74.07209873199464, stop: { name: "TECCS", time: "8:10am", }},
            //...westSideToTeccs,
        ],
        offsets: [
            { start: hamiltonPark.stop.name, end: jersey8th.name, offsets: { orange: -5, green: -5 }, },
            { start: "CCD & Varick", end: "CCD & Brunswick", offsets: { green: 5, orange: 5 }, },
            { start: mcginleySquare.stop.name, end: jsq.stop.name, offsets: { red: -5 } },
        ]
    },
    {
        name: "green",
        id: "g",
        title: "Green line",
        summary: "JSQ, Heights, Downtown",
        query: "bb=40.717-74.067+40.739-74.044&r=G&R&S=1&s=ps5+ps3+hpms+hpmsu",
        rwgps: "https://ridewithgps.com/routes/42858167",
        color: "hsl(119, 100%, 61%)",
        positions: [
            ...cancoToNJT,
            { lat: 40.728575906675815, lng: -74.0466606616974, name: "Coles & 9th", },
            { lat: 40.72833199396919, lng: -74.04402136802675, name: "9th & McWilliams", },
            ...hpPs5Ps3,
        ],
        offsets: [
            { start: "Summit & 139", end: summitHopkins.stop.name, offsets: { red: 5 }, },
            { start: summitHopkins.stop.name, end: 'Hoboken Ave & NJ Transit Path', offsets: { blue: 5 }, },
            // { start: "McWilliams & Pavonia", end: "CCD & Brunswick", offsets: { orange: 5 }, },
            { start: "McWilliams & Pavonia", end: hamiltonPark.stop.name, offsets: { orange: 5 }, },
            { start: hamiltonPark.stop.name, end: jersey8th.name, offsets: { orange: 5, yellow: 5 }, },
            { start: jersey8th.name, end: "CCD & Brunswick", offsets: { orange: 5 }, },
            { start: "CCD & Brunswick", end: "CCD & Varick", offsets: { yellow: 5, orange: 5, }, },
            { start: "CCD & Varick", end: "PS 3 / MS 4", offsets: { orange: 5 }, },
        ]
    },
    {
        name: "blue",
        id: "b",
        title: "Blue line",
        summary: "Heights to Hoboken",
        query: "bb=40.732-74.057+40.747-74.031&r=B&R&s=mss+hola+scs&S=1",
        rwgps: "https://ridewithgps.com/routes/42858196",
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
            { start: summitCarlton.name, end: summitHopkins.stop.name, offsets: { red: -5 } },
            { start: summitHopkins.stop.name, end: 'Hoboken Ave & NJ Transit Path', offsets: { green: -5 }, },
        ]
    },
    {
        name: "purple",
        active: false,
        id: "p",
        title: "Purple line",
        summary: "Heights, Western Slope",
        query: "bb=40.741-74.065+40.756-74.048&r=P&R&s=jcgcs&S=1",
        rwgps: "https://ridewithgps.com/routes/42858216",
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
    },
    {
        name: "pink",
        id: "k",
        title: "Pink line",
        summary: "Paulus Hook / PS16",
        query: "bb=40.714-74.052+40.729-74.026&r=K&R&s=ps16+hms+ps37+ssjc+faa&S=1",
        rwgps: "https://ridewithgps.com/routes/42858902",
        color: "pink",
        positions: [
            { lat: 40.729210075529004, lng: -74.034880399704, stop: { name: "Washington & 11th", time: "7:15am" } },
            { lat: 40.728909252595706, lng: -74.03493404388429, },
            { lat: 40.72821816773346, lng: -74.03470873832704, },
            { lat: 40.72768155571405, lng: -74.03462290763856, },
            { lat: 40.72730755083861, lng: -74.0346658229828, },
            { lat: 40.72678719273269, lng: -74.03498768806459, },
            { lat: 40.726022909387964, lng: -74.0353846549988, },
            { lat: 40.72558384902902, lng: -74.03559923171998, },
            { lat: 40.72456749449252, lng: -74.03584599494936, name: "Washington & 6th", },
            { lat: 40.72427478150731, lng: -74.03597474098207, },
            { lat: 40.72377879267691, lng: -74.03615713119508, },
            { lat: 40.72305513021186, lng: -74.03630733489992, },
            { lat: 40.72037995010059, lng: -74.036682844162, stop: { name: "Washington & Bay", time: "7:30am" } },
            // { lat: 40.713442633573116, lng: -74.03457386242185, stop: { name: "Bluestone Lane Coffee", time: "7:30am" }},
            // { lat: 40.71365539708247, lng: -74.036295982652, name: "Greene & Morris" },
            // { lat: 40.72015227023285, lng: -74.035062789917, stop: { name: "Greene & Bay", time: "7:30am", } },
            { lat: 40.720558840878894, lng: -74.0383565425873, },
            { lat: 40.72094914636279, lng: -74.0426802635193, },
            groveSt,
            { lat: 40.7161510047829, lng: -74.04484589234092, },
            // { lat: 40.718290144942145, lng: -74.03882861137392, name: "Columbus & Warren" },
            // { lat: 40.71554158535769, lng: -74.03934359550477, name: "Grand & Warren" },

            // { lat: 40.71612708685203, lng: -74.0448582172394, name: "Grove & Grand" },
            // { lat: 40.7158767, lng: -74.0426636, name: "Grand & Marin" },

            { lat: 40.715370813118575, lng: -74.04497623443605, },  // Grove & Regent
            { lat: 40.71513498406821, lng: -74.04281973838808, },  // Marin & Regent

            { lat: 40.7145527, lng: -74.0429482, stop: { name: "Marin & Morris", time: "7:50am", } },
            // { lat: 40.71390296699984, lng: -74.03803467750551, name: "Washington & Morris" },
            { lat: 40.71367119886497, lng: -74.03631806373598, },
            { lat: 40.714386831207385, lng: -74.03615713119508, },
            { lat: 40.714586068388364, lng: -74.03790056705476, stop: { name: "PS16", time: "8:00am" }},
            { lat: 40.71769246486529, lng: -74.03719782829286, stop: { name: "PS16 Annex", time: "8:05am" }},
            ...columbusBarrowPS37,
            { lat: 40.72826288520644, lng: -74.04330790042879, },
            { lat: 40.72818158068778, lng: -74.04238522052766, stop: { name: "Scandinavian School", time: "8:26am" }},
        ],
        offsets: [
            { start: columbusBarrow.name, end: ps37.stop.name, offsets: { orange: 5 } },
        ]
    },
    {
        name: "silver",
        id: "s",
        title: `Silver line`,
        summary: "Communipaw to West Side",
        query: "bb=40.706-74.086+40.728-74.063&r=S&R&S=1&s=tlb+lccs+ps17+pp",
        rwgps: "https://ridewithgps.com/routes/42858061",
        color: "lightgrey",
        positions: [
            // { lat: 40.71427643262643, lng: -74.08862719563707, stop: { name: "West Side & Grant", time: "7:45am" }},
            ...grindShopToUnionBergen,
            bergenHarrison,
            bergenBelmont,
            jfkBelmont,
            ...lccsToMalloryUnion,
            ps33,
            // ps33,
            // { lat: 40.71785103357191, lng: -74.0841579437256, },  // West Side & Williams
            // { lat: 40.719818880450106, lng: -74.08784866333009, },  // West Side & Mallory
            // // { lat: 40.71374845499957, lng: -74.08924877643587, },  // West Side & Grant
            // // { lat: 40.71524070064235, lng: -74.09210264682771, },  // Grant & Mallory
            // ...malloryUnionToLCCS,
            // kensingtonJFK,
            // bergenKensington,
        ],
        offsets: [
            { start: theGrindShop.stop.name, end: communipawVanHorne.name, offsets: { orange: -5, gold: 5 } },
            { start: communipawVanHorne.name, end: unionBergen.stop.name, offsets: { gold: 5 } },
            // { start: malloryUnion.name, end: lccs.stop.name, offsets: { red: -5 } },
            { start: unionBergen.stop.name, end: bergenBelmont.stop.name, offsets: { teal: 5 } },
            { start: bergenBelmont.stop.name, end: ps33.stop.name, offsets: { red: -5 } },
        ]
    },
    {
        name: "gold",
        active: false,
        id: "d",
        title: `Gold line`,
        summary: "Communipaw, Bergen Lafayette, Greenville",
        query: "bb=40.690-74.095+40.721-74.062&r=D&R&S=1&s=a1+ihs+ps20+ps15+ps41+ii",
        color: "hsl(49, 100%, 45%)",
        positions: [
            ...grindShopToUnionBergen,
            ...unionBergenToOceanStegman,
            { lat: 40.70019820453425, lng: -74.08380981085229, },
            { lat: 40.69643660554025, lng: -74.08927204241928, stop: { name: "PS 20", time: "8:15am" }},
            { lat: 40.69607999033176, lng: -74.08980309271053, },
            { lat: 40.695631342680635, lng: -74.09063760031104, },
            { lat: 40.69420485315145, lng: -74.09239765270486, name: "Ocean & " },
            { lat: 40.695608335027316, lng: -74.09386942065487, stop: { name: "Infinity Institute", time: "8:20am" }},
            // { lat: 40.71147, lng: -74.07839, },
            // { lat: 40.71043449288867, lng: -74.07959818840028, stop: { name: "MLK & Orient", time: "7:50am", } },
            // { lat: 40.70870222128798, lng: -74.07695889472963, name: "Ocean & Orient" },
            // bostwickOcean,
        ],
        offsets: [
            { start: theGrindShop.stop.name, end: communipawVanHorne.name, offsets: { silver: -5, orange: -5 } },
            { start: communipawVanHorne.name, end: unionBergen.stop.name, offsets: { silver: -5 } },
            { start: unionBergen.stop.name, end: academy1.stop.name, offsets: { teal: -5 } },
        ]
    },
    {
        name: "teal",
        active: false,
        id: "t",
        title: "Teal line",
        summary: "McGinley Square to Greenville",
        query: "bb=40.704-74.099+40.726-74.062&r=T&R&s=ps38+ps34+a1+ihs&S=1",
        color: "teal",
        positions: [
            mcginleySquare,
            ...bergenMcGinleyPS17,
            bergenKensingtonPS17,
            bergenBelmont,
            bergenHarrison,
            unionBergen,
            ...unionBergenToAcademy1,
            // ps15,
            // { lat: 40.706514452386344, lng: -74.0867704153061, name: "Stegman & Bergen" },
            { lat: 40.70728369786154, lng: -74.08622229646105, },
            audubonPark,
            { lat: 40.70644938752666, lng: -74.08686161041261, },  // Stegman & Bergen
            { lat: 40.70575806946678, lng: -74.08738732337953, },
            { lat: 40.70476581218036, lng: -74.08862113952638, name: "Woodlawn & Bergen" },
            // { lat: 40.70752701607262, lng: -74.08792376518251, },
            // ps38,
            // { lat: 40.71106883459667, lng: -74.0932881832123, name: "West Side & Stegman" },
            // { lat: 40.70927151739564, lng: -74.09526228904726, name: "West Side & Woodlawn" },
            { lat: 40.703890576767, lng: -74.08730715634172, name: "MLK & Woodlawn" },
            { lat: 40.70125072401823, lng: -74.0903417294345, name: "MLK & Warner" },
            { lat: 40.70234348621301, lng: -74.09169970089351, },
            ps34,
        ],
        offsets: [
            { start: mcginleySquare.stop.name, end: bergenBelmont.stop.name, offsets: { red: 5 } },
            { start: bergenBelmont.stop.name, end: unionBergen.stop.name, offsets: { silver: 5 } },
            { start: unionBergen.stop.name, end: academy1.stop.name, offsets: { gold: 5 } },
        ]
    },

]
export const routesByName: { [name: string]: Route } = fromEntries(routes.map(route => [ route.name, route ]))
export const routesById: { [id: string]: Route } = fromEntries(routes.map(route => [ route.id, route ]))

export type HM = { h: number, m: number }
export function parseTime(time: string): HM | undefined {
    const match = time.match(/^(?<h>\d+):(?<m>\d+)(?:am)?$/)
    if (!match?.groups) {
        console.error(`Unrecognized time: ${time}`)
        return
    }
    const { h, m } = match.groups
    return { h: parseInt(h), m: parseInt(m) }
}

export function cmpTimes(l: string, r: string) {
    const tl = parseTime(l)
    const tr = parseTime(r)
    if (!tl) return 1
    if (!tr) return -1
    return tl.h*60 + tl.m - (tr.h*60 + tr.m)
}

export type StopTime = { time: string, name: string }
export type StopTimes = StopTime[]

export function getRouteStops(route: Route): StopTimes {
    const { name, positions } = route
    const stops = {} as { [time: string]: string }
    positions.forEach(({ stop }) => {
        if (!stop) return
        let times: string[]
        if (stop.time) {
            times = [ stop.time ]
        } else if (stop.times) {
            const routeStopTimes = stop.times[name]
            times = routeStopTimes instanceof Array ? routeStopTimes : [routeStopTimes]
        } else {
            return
        }
        for (let time of times) {
            stops[time] = stop.name
        }
    })
    const stopTimes = o2a<string, string, StopTime>(stops, (time, name) => ({ time, name }))
    stopTimes.sort(({ time: l }, { time: r }) => cmpTimes(l, r))
    return stopTimes
}

export type StopTimeRoutes = [ string, Route[] ]
export const stop2time2routes: { [stop: string]: { [time: string]: Route[] } } = {}
routes.forEach(route => {
    const stops = getRouteStops(route)
    stops.forEach(({ time, name }) => {
        if (!(name in stop2time2routes)) {
            stop2time2routes[name] = {}
        }
        if (!(time in stop2time2routes[name])) {
            stop2time2routes[name][time] = []
        }
        stop2time2routes[name][time].push(route)
    })
})
export const stop2routes: { [stop: string]: StopTimeRoutes[]} = mapValues(
    stop2time2routes,
    (stop, time2Routes) => {
        const stopTimeRoutes = Array.from(entries(time2Routes))
        stopTimeRoutes.sort(( [l], [r] ) => cmpTimes(l, r))
        return stopTimeRoutes
    }
)

export const routeHref = (routeName: string) => `${routeName}-line`

export const MapEmbed = ({ url }: { url: string }) =>
    <div className={css.mapEmbedContainer}>
        <iframe className={css.mapEmbed} src={url} loading="lazy" />
    </div>

export function routeList(route: Route) {
    const stopTimes = getRouteStops(route)
    const { sub, query, rwgps } = route
    const url = `/bike-bus/map/?${query}`
    return <Fragment key={route.name}>
        {sub && <p style={{ marginBottom: 0, marginTop: 0 }}>({sub})</p>}
        {MD(`### Stops <a id="stops"></a>`)}
        {MD(`${stopTimes.map(({ time, name }) => `- **${time}**: ${name}`).join("\n")}`)}
        {rwgps && MD(`[Turn-by-turn directions on RideWithGPS](${rwgps})`)}
        {MD(`### Map <a id="map"></a>`)}
        <MapEmbed url={url} />
        <p><A href={url}>(full screen version)</A></p>
    </Fragment>
}
