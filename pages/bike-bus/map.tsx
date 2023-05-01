import dynamic from "next/dynamic";
import css from './map.module.css'
import {JC, Props, Schools, Signups} from "../../src/bike-bus/map-utils";
import {loadSync} from "next-utils/load";
import {mapValues} from "next-utils/objs";
import {boolParam, floatParam, LL, llParam, Param, ParsedParam, parseQueryParams} from "next-utils/params";
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
        ll: llParam({ init: JC.center, places: 3, }),
        z: floatParam(14, false),
        draw: boolParam
    }
    const parsedParams: ParsedParams = parseQueryParams({ params })
    //console.log("render: center", center, "zoom", zoom)
    return <main>
        <Map className={css.map} params={parsedParams} signups={props} />
    </main>
}
