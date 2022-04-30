import { Page } from "../../src/page";

const md = `
---

#### The Jersey City Ward Tour is back! Sunday, June 5, roll out 11am from City Hall. **[REGISTER HERE](https://www.eventbrite.com/e/jersey-city-ward-tour-2022-tickets-324066169637)**.

---

Naturally, most of our events involve riding bikes!

We’re best known for our [Jersey City Ward Tour](/events/jersey-city-ward-tour), our annual spring bike ride in which over a thousand riders circle the city and then participate in a giant after-party. We recently started an annual fall art-themed bike tour in conjunction with the citywide Jersey City Art &amp; Studio Tour

We also put on various smaller, informal rides that take us on two wheels to have fun, see the sights, and socialize. And we pitch in with other sustainable, people-oriented events like neighborhood cleanups and community gardening.

Join us!
`

export default function Home() { return <Page path={"/events"} banner="/files/bike-tour-back-banner.jpg" md={md} /> }
