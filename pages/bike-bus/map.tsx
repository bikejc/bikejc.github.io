import dynamic from "next/dynamic";

const Map = dynamic(() => import('../../src/map'), { ssr: false });

import css from './map.module.css'
import {JC, Schools, Signups, Props} from "../../src/map-utils";
import {loadSync} from "next-utils/load";
import {mapValues} from "next-utils/objs";

export function getStaticProps() {
    const schools = loadSync<Schools>(`public/bikebus/schools.json`)
    const signups = loadSync<Signups>(`public/bikebus/signups.json`)
    const props: Props = mapValues(schools, (k, school) => ({ school, signups: signups[k] }))
    return { props }
}

export default function Page(props: Props) {
    return <main>
        <Map className={css.map} {...JC} signups={props} />
    </main>
}
