import {Page} from "../../src/page";
import Triptych from "../../src/triptych"
import {schedule2023Blurb, wtBlurb} from "../../src/blurbs";
import MD from "../../src/md";

export default function Home() { return (
    <Page
        path={"/events"}
        banner="/files/bike-tour-back-banner.jpg"
        preFooter={<Triptych />}
    >
        {wtBlurb}
        {schedule2023Blurb}
        {MD(`
Naturally, most of our events involve riding bikes!

We’re best known for our [Jersey City Ward Tour](/events/jersey-city-ward-tour), our annual spring bike ride in which over a thousand riders circle the city and then participate in a giant after-party. We recently started an annual fall art-themed bike tour in conjunction with the citywide Jersey City Art &amp; Studio Tour

We also put on various smaller, informal rides that take us on two wheels to have fun, see the sights, and socialize. And we pitch in with other sustainable, people-oriented events like neighborhood cleanups and community gardening.

Join us!
`)}
    </Page>
) }
