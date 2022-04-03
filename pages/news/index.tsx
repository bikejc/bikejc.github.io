import { Page } from "../../src/page";

const md = `
Watch this space for news releases, recent articles, and announcements.

---

##### Bike JC is seeking a contract Grant Writer to identify grant opportunities, develop funding proposals, manage grants, and effectively communicate Bike JC’s mission and services/programs to Funders.

[Click for full description](/news/articles/job-posting-contract-grant-writer)

---

[Citi Bike JC Rebalancing](/news/articles/citi-bike-jc-rebalancing)

Bike JC is very sorry to see that Citi Bike JC docking stations are being
relocated from large areas in the southern third of Jersey City. As with earlier
removals in the northern Heights, the latest realignment is unfortunate and
painful for several reasons.

Some of the stations had groups of regular users who are now deprived of service.
And several of the stations served or are in or near, underserved communities,
and neighborhoods with many lower-income residents, which raises the serious
concern that this rebalance will exacerbate the already documented [equity gap in bike share systems.](https://www.citylab.com/equity/2017/07/what-keeps-bike-share-white/533412/)

Citi Bike JC’s operators, Motivate, are moving eight of its least-used stations to areas...

Read More: [view](/news/articles/citi-bike-jc-rebalancing)
`

export default function Home() { return <Page path={"/news"} md={md} /> }
