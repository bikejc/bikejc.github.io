export const JC = { center: { lat: 40.72898242586681, lng: -74.06394481658937 }, zoom: 14 }

export type LL = { lng: number, lat: number }
export type Schools = { [k: string]: LL }
export type Signups = { [k: string]: LL[] }
export type School = { school: LL, signups: LL[] }
export type Props = { [k: string]: School }
