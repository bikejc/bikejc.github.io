import { Page } from "../../../src/page";

const md = `
**This is the new 2019 Ward Tour 10 map,** including a 15 mile route very similiar to last year's that stays in Jersey City (shown in Green) and the additional distance that includes both Bayonne and Hoboken for a 25 mile route (additional mileage shown in Purple). Both routes start from City Hall and end at the foot of Second Street near the Hudson River, at the Lutze Biergarten.

![Ward Tour Map](/files/Ward%20Tour%20Map%20for%20Digital.jpg)
`

export default function Home() { return <Page path={"/events/jersey-city-ward-tour/ward-tour-route"} banner="/files/wardtourbanner1_4.jpg" md={md} /> }
