import { Page } from "../../src/page";

const md = `
---

#### The Jersey City Ward Tour is back! Sunday, June 5, roll out 11am from City Hall. **[REGISTER HERE](https://www.eventbrite.com/e/jersey-city-ward-tour-2022-tickets-324066169637)**.

---

#### Join our monthly Light-UP Rides! Usually 15-20 miles, start and finish at Grove St PATH.

Full schedule:
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">2022 Jersey City Light-Up Rides ✨🚲<br>2nd Friday of each month, April–October, sunset. Meet times:⁰April 8, 7 <br>May 13, 7:30<br>June 24, 7:30*<br>July 8, 8<br>Aug. 12, 7:30<br>Sept. 9, 7<br>Oct. 14, 6:30<br> <br>*Special Light Up the Loop Ride w/ferries to/from Manhattan! (Not a 2nd Friday.) 1/2</p>&mdash; 🚲Bike JC🗽 (@bikejc) <a href="https://twitter.com/bikejc/status/1518381269419188227?ref_src=twsrc%5Etfw">April 25, 2022</a></blockquote>

---

Naturally, most of our events involve riding bikes!

We’re best known for our [Jersey City Ward Tour](/events/jersey-city-ward-tour), our annual spring bike ride in which over a thousand riders circle the city and then participate in a giant after-party. We recently started an annual fall art-themed bike tour in conjunction with the citywide Jersey City Art &amp; Studio Tour

We also put on various smaller, informal rides that take us on two wheels to have fun, see the sights, and socialize. And we pitch in with other sustainable, people-oriented events like neighborhood cleanups and community gardening.

Join us!
`

export default function Home() { return <Page path={"/events"} banner="/files/bike-tour-back-banner.jpg" md={md} /> }
