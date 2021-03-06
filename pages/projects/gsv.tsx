import { Page } from "../../src/page";

const md = `
**Bike JC asks for your support in the creation of Jersey City's first protected bike lane on Grand Street.**

Motor vehicular, cycling and pedestrian traffic has dramatically increased in Jersey City over the last few years, particularly on Grand Street. As Bike JC looks to expand upon the existing bike-lane network, we understand the need to install protected bike lanes on our busiest roads. Bike JC's vision begins with Grand Street. Grand Street runs through several neighborhoods and serves as a connection to major routes and highways. Grand Street also borders the entrance to Liberty State Park for many Jersey City residents and is lined with multiple schools, community centers, houses of worship, commercial and residential districts and the Jersey City Medical Center.

Protected bike lanes have proven to be the best tool for encouraging an increase in cycling among the majority of people who are interested in getting around by bike but are concerned about safety. Protected bike lanes are safer for cyclists, create increased awareness and reduces speeding amongst drivers, increase safety at intersections for pedestrians and cyclists and have proven to dramatically reduce the number of cyclists who ride on sidewalks.

A [recent study (pdf)](https://bikeportland.org/wp-content/uploads/2014/06/NITC-RR-583_ProtectedLanes_FinalReportb.pdf) of protected bike lanes in the US and Canada proves how effective protected bike lanes are throughout both countries and staunchly supports Bike JC's Grand Street Vision.

We ask that residents, businesses, schools, houses of worship and the representatives of Jersey City join in our vision and support the creation of Jersey City's first protected bike lane on Grand Street.

[Petition on change.org](https://www.change.org/p/city-of-jersey-city-grand-street-vision-jersey-city-complete-streets)
`

export default function Home() { return <Page path={"/projects/gsv"} md={md} /> }
