import {Page} from "../../src/page";
import MD from "../../src/md"
import A from "next-utils/a"
import {reservoir} from "../../src/img";

import {difficultyMd, md as faqMd} from "./faq"
import {regfox, wt23poster, wt23rwgps, wt23vol} from "../../src/blurbs";
import {SponsorsList2023} from "../support/sponsors";

export const description = "Register for the Jersey City Ward Tour, Sunday, June 4, 2023 at 11:00am! 1,000's of Bikes. 15 Miles. 6 Wards. 1 Great Day in Jersey City!"

export default function Home() {
    return (
        <Page
            path={"/ward-tour"}
            banner={[
                { src: "/files/BikeJcHomeSlide1.jpg", alt: "Ward Tour participants" },
                reservoir,
                { src: "/files/BikeJcHomeSlide5.jpg", alt: "Ward Tour participants and Let's Share a Meal volunteers in Liberty State Park" },
                { src: "/img/wt22/Photos by Jen Brown/IMG_9097 1600x480.JPG", alt: "Ward Tour riders in Lincoln Park" },
                // { src: "/img/ward-tour-forever-sticker-resized.jpg", alt: "Jersey City Ward Tour – first Sunday in June every year" },
            ]}
            description={description}
        >
            {MD(`
#### The Jersey City Ward Tour is back on Sunday, June 4, 2023, at 11:00am.

#### [Registration is open now!](${regfox})

**1,000's of Bikes. 15 Miles. 6 Wards. 1 Great Day in Jersey City!**
`)}
            <A href={regfox}>
                <img
                    style={{ margin: 0 }}
                    src={wt23poster}
                    alt={"Bike JC presents the 12th Annual Jersey City Ward Tour, Sunday, June 4, 2023. Start 11 AM at City Hall, end at Jersey City Jazz Fest"}
                />
            </A>
            {MD(`
---

The Jersey City Ward Tour will roll Sunday, June 4, 2023, taking you (and 1,000's of our closest friends) on a tour of our great city, and passing through all of its wards.

Quick links:
- [**REGISTER**](${regfox})
- [**Sign up to volunteer**](${wt23vol})
- [**Bib pickup (Friday/Saturday)**](#bib-pickup)
- [**Sponsors**](#sponsors)
- [**Route**](#route)
- [**FAQs**](#faqs)
- [**Citi Bike Day Pass Request**](#citibike)
- [**Subscribe for updates**](#subscribe)

[![Overhead view of the start of the 2022 Ward Tour, at Jersey City Hall](/img/wt22/wt22%20overhead%20city%20hall%20start%20cropped.JPG)](${regfox})

---

## Thank you to our sponsors! <a id="sponsors"></a>
This event would not be possible without their support:
`)}
            <SponsorsList2023 />
            {MD(`
## Route <a id="route"></a>
The 2023 Ward Tour route is 15.2mi long, with ≈300' of elevation gain/loss:

[![Ward Tour 2023 Route – RideWithGPS](/img/wt23/route.png)](${wt23rwgps})
([View full route on RideWithGPS](${wt23rwgps}))

From [the FAQs below](#difficulty):
${difficultyMd.split('\n').map(line => `> ${line}`).join('\n')}
`)}
            {MD(faqMd)}
        </Page>

    )
}
