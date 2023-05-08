import dynamic from "next/dynamic";
import css from './map.module.css'
import {Props, Schools, Signups} from "../../src/bike-bus/map-utils";
import {loadSync} from "next-utils/load";
import {mapValues} from "next-utils/objs";
import {boolParam, floatParam, llParam, parseQueryParams} from "next-utils/params";
import {Params, ParsedParams} from "../../src/bike-bus/params";

const Map = dynamic(() => import('../../src/bike-bus/map'), { ssr: false });

export function getStaticProps() {
    const schools = loadSync<Schools>(`public/bikebus/schools.json`)
    const signups = loadSync<Signups>(`public/bikebus/signups.json`)
    const props: Props = mapValues(schools, (k, school) => ({ school, signups: signups[k] }))
    return { props }
}

export default function Page(props: Props) {
    const params: Params = {
        ll: llParam({ init: { lat: 40.725, lng: -74.057 }, places: 3, }),
        z: floatParam(13, false),
        h: boolParam,
        R: boolParam,
        S: boolParam,
        draw: boolParam
    }
    const parsedParams: ParsedParams = parseQueryParams({ params })
    return <main>
        <Map className={css.map} params={parsedParams} signups={props} zoomDelta={0.5} zoomSnap={0.5} />
    </main>
}
