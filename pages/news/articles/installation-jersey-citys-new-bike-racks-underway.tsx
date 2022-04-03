import { Page } from "../../../src/page";

const md = `
4/14/2015

Jersey City Department of Public Works is rolling out the new bike racks. Check out the new installation at Nu Bar (339 Communipaw Ave).

Two racks have been placed so far on Whiton St. (pictured) and two more on Communipaw  Ave.

Many, many more will be installed over the next 6 weeks.

Each rack is designed to only  hold up to 2 bicycles; but there will be hundreds of them.

![picture of bike rack at 339 Communipaw Ave](/files/bike-rack-rollout.png)
`

export default function Home() { return <Page path={"/news/articles/installation-jersey-citys-new-bike-racks-underway"} md={md} /> }
