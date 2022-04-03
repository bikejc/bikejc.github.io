import { Page } from "../../../src/page";

const md = `
Bike JC is very sorry to see that Citi Bike JC docking stations are being relocated from large areas
in the southern third of Jersey City. As with earlier removals in the northern Heights, the latest
realignment is unfortunate and painful for several reasons.

Some of the stations had groups of regular users who are now deprived of service. And several of the
stations served or are in or near, underserved communities, and neighborhoods with many lower-income
residents, which raises the serious concern that this rebalance will exacerbate the already
documented [equity gap in bike share systems.](https://www.citylab.com/equity/2017/07/what-keeps-bike-share-white/533412/)

Citi Bike JC’s operators, Motivate, are moving eight of its least-used stations to areas where other
stations are already heavily used. We have no doubt this will improve service within those areas,
will let Motivate re-balance the bikes between stations with less delay and expense, and will
encourage more people in those areas to buy memberships, keeping the company financially sound—and
hopefully, over time, allowing it to expand again into a wider area.

This is now very similar to the model of the affiliated Citi Bike NYC, which serves something like
20% of the land area of New York City, including its densest and most transit-friendly areas and,
recently, including large communities of color such as Harlem and Bedford-Stuyvesant. It also leaves
80% of NYC without bike share. We believe Motivate when they say that that model is the only way
they can operate in a self-sustainable way over time under its current conditions.

But that doesn’t mean we shouldn’t all continue to try for something better. We believe everyone in
Jersey City should have access to high-quality bike share. It’s a small enough place that we should
be able to support it even in the far north and south.

So we call on the city government, Motivate, and our residents and community organizations to work
together, and explore several possibilities:

**Public or private subsidy for Citi Bike JC**
– We all subsidize various forms of mass transit, including trains and buses, through our taxes,
tolls, and other payments. Why should bike share be any different? It improves safety and health,
moves people efficiently, and is more equitable than expensive car travel—if we make it accessible
to everyone. The city should fund Citi Bike JC sufficiently to allow it to expand throughout the
city; there may be public or private grants available for the same purpose.

**Better discount programs**
– JC Housing Authority residents are already eligible for discounted $5 monthly membership. But
uptake is slow (as it is in NYC), due in part to a lack of awareness and difficulties for people
without credit cards. We should do more to promote, expand, and improve these discount programs.

**Dockless bike share**
– Using shared bikes that can be parked without docks, dockless bike share, has sometimes been
criticized as untidy, but it also is gaining a reputation for serving low-income communities and
less-dense urban areas effectively. Several competing companies are offering dockless bike share

now, and Motivate is reportedly testing its own version. Some cities now host both docked and
dockless bike share; Jersey City could be one of those cities.

**Government and business employees on bike share**
— The city government should replace some of its use of cars with bike share for short trips; this
would save taxpayer dollars. Both government and local business should offer no-cost or deeply
subsidized Citi Bike JC memberships for all employees as a matter of course, as an employee benefit.
All these measures would get more people biking in safer streets and pump money into the system.

**Business and developer sponsorship of stations**
– Citi Bike JC accepts sponsorships for docking stations to be located near a particular business or
residential development, for the benefit of its employees or residents, and the station is then also
available to everyone else. Encouraging more of these—perhaps during the approval process for new
development—could help spread and support bike share.

**Protected bike network**
– Some of it is already being planned, but it’s essential that the city build out a complete network
of protected bike lanes and other bikeable streets and pathways if bike share is to reach its full
potential in Jersey City. Membership in NYC has already benefited from the miles of protected lanes
there.
[Study](https://usa.streetsblog.org/2017/07/05/whats-keeping-people-from-using-bike-share-new-study-breaks-it-down-by-race-and-income/) after
[study](https://usa.streetsblog.org/2017/04/18/for-people-of-color-barriers-to-biking-go-far-beyond-infrastructure-study-shows/)
shows that traffic safety is the top concern for cyclists and non-cyclists and that protected bike
lanes, once installed, are
[safe, effective, and popular](https://peopleforbikes.org/our-work/statistics/statistics-category/?cat=protected-bike-lane-statistics).

![Photo of Citi Bike dock with a bikelane in the foreground](../../files/IMG_ixo4t3%20(1).jpg)
`

export default function Home() { return <Page path={"/news/articles/citi-bike-jc-rebalancing"} md={md} /> }
