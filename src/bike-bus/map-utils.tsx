import {LL} from "next-utils/params";

export const JC = { center: { lat: 40.72898242586681, lng: -74.06394481658937 }, zoom: 14 }

export type School = LL & { id: string }
export type SchoolsJSON = { [k: string]: School }
export type SignupsJSON = { [k: string]: LL[] }
export type SchoolSignups = { school: School, signups: LL[] }
export type Props = { [k: string]: SchoolSignups }
