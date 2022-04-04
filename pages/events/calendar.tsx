import { Page } from "../../src/page";

const md = `
On October 4th, 2017 join Safe Streets JC and Bike JC for a discussion with the Mayoral candidates about Transportation &amp; Traffic Safety in Jersey City.

We'll be asking them about their visions to make the city safer and more accessible to all citizens across all modes of transit, including pedestrians, bicycles, motor vehicles and public transit.

The event will take place at the Dr. Martin Luther King School, located at 886 Bergen Ave. in Jersey City. Doors at 6:45pm, Forum starts at 7pm.

Submit your questions for the forum here: [Community Questions](https://goo.gl/forms/snJ5XKx66LEh9Gql2)
`

export default function Home() { return <Page path={"/events/calendar"} md={md} /> }
