import { Page } from "../../../src/page";
import {triptych} from "../../../src/img";

const md = `
[![Screenshot of Ward Tour route](/files/wt11-route-screenshot.png)](https://ridewithgps.com/routes/38744234)

Full route map: https://ridewithgps.com/routes/38744234

We all start at City Hall ([280 Grove St., at Montgomery Street](https://goo.gl/maps/tMHCxVZU4Q3qBGvc8)).

We all end at [the Jersey City Jazz Festival](https://riverviewjazz.org/jersey-city-jazz-festival), at [107 Morgan St.](https://goo.gl/maps/YLfwHwet3ATYxVc79). Riders will find a bike valet and great food, drink, and entertainment options there!

We’ll ride on streets (or sometimes on one side of a street) that are closed to motor-vehicle traffic by the Jersey City Police Department. Officers on bikes and in motor vehicles will escort us throughout the ride.
`

export default function Home() { return <Page path={"/ward-tour/2022/route"} banner={triptych} md={md} /> }
