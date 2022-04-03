import { Page } from "../../src/page";

const md = `
**Citi Bike Expansion: Hoboken Joins JC**

Citi Bike has offered its shared bikes in Jersey City since 2016, and recently expanded its coverage throughout neighboring Hoboken. Membership entitles you to use all these NJ bikes, plus the huge NYC Citi Bike systam.

More info on docking stations, membership, etc. can be found on [their website](https://www.citibikejc.com/)!
`

export default function Home() { return <Page path={"/projects/bike-share"} md={md} /> }
