import {Page} from "../../src/page";
import {upcomingEventsBlurb} from "../../src/blurbs";
import MD from "../../src/md";
import {helmets} from "../../src/img";

export default function Home() { return (
    <Page
        path={"/events"}
        banner={helmets}
    >
        {upcomingEventsBlurb}
        {MD(`
Naturally, most of our events involve riding bikes!

We’re best known for our [Jersey City Ward Tour](/events/jersey-city-ward-tour), our annual spring bike ride in which over a thousand riders circle the city and then participate in a giant after-party. We recently started an annual fall art-themed bike tour in conjunction with the citywide Jersey City Art &amp; Studio Tour

We also put on various smaller, informal rides that take us on two wheels to have fun, see the sights, and socialize. And we pitch in with other sustainable, people-oriented events like neighborhood cleanups and community gardening.

Join us!
`)}
    </Page>
) }
