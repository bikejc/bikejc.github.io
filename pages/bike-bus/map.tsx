import dynamic from "next/dynamic";
import css from './map.module.css'
import {Props, SchoolsJSON, SignupsJSON} from "../../src/bike-bus/map-utils";
import {loadSync} from "next-utils/load";
import {mapValues} from "next-utils/objs";
import {boolParam, floatParam, bbParam, parseQueryParams, stringsParam, optStringsParam} from "next-utils/params";
import {caseStringsParam, hideLevelParam, Params, ParsedParams} from "../../src/bike-bus/params";

const Map = dynamic(() => import('../../src/bike-bus/map'), { ssr: false });

export function getStaticProps() {
    const schools = loadSync<SchoolsJSON>(`public/bikebus/schools.json`)
    const signups = loadSync<SignupsJSON>(`public/bikebus/signups.json`)
    const props: Props = mapValues(schools, (k, school) => ({ school, signups: signups[k] || [] }))
    return { props }
}

export default function Page(props: Props) {
    const params: Params = {
        bb: bbParam({ init: { sw: { lat: 40.704, lng: -74.085 }, ne: { lat: 40.747, lng: -74.038 } }, places: 3, }),
        h: hideLevelParam({ All: undefined, None: '', Unpinned: 'p' }),
        r: caseStringsParam(),
        R: hideLevelParam(),
        s: optStringsParam({ emptyIsUndefined: true }),
        S: hideLevelParam(),
        t: boolParam,
        draw: boolParam
    }
    const parsedParams: ParsedParams = parseQueryParams<Params, ParsedParams>({ params })
    return <main>
        <Map className={css.map} params={parsedParams} signups={props} zoomDelta={0.5} zoomSnap={0.5} />
    </main>
}
