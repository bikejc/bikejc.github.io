import { Page } from "../../../src/page";

const md = `
We're excited to partner with [the Jersey City Jazz Festival](https://riverviewjazz.org/jersey-city-jazz-festival) for this year's "Finish Line Festival!"

At the end of [the Ward Tour route](./ward-tour-route) (at [107 Morgan St.](https://goo.gl/maps/YLfwHwet3ATYxVc79)), riders will find a bike valet and great food, drink, and entertainment options there!

Live music and festivities are scheduled there from 12-6pm.
`

export default function Home() { return <Page path={"/events/jersey-city-ward-tour/finish-line-festival"} banner="/files/wardtourbanner1_3.jpg" md={md} /> }