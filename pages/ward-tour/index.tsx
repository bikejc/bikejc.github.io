import {Page} from "../../src/page";
import {reservoir} from "../../src/img";

import { md as faqMd } from "./faq"
import {regfox} from "../../src/blurbs";

const md = `
#### The Jersey City Ward Tour is back on Sunday, June 4, 2023, at 11:00am.

#### [Registration is open now!](${regfox})

**3,000 Bikes. 15 Miles. 6 Wards. 1 Great Day in Jersey City!**

[![](/img/wt22/wt22%20overhead%20city%20hall%20start%20cropped.JPG)](${regfox})

---
`

export const bodyMd = `
The Jersey City Ward Tour will roll Sunday, June 4, 2023, taking you (and 3,000 of our closest friends) on a tour of our great city, and passing through all of its wards.

[Register here](${regfox}), [subscribe for updates](#subscribe), or [register to volunteer here](/support/volunteer)!

---

${faqMd}
`

export const description = "Register for the Jersey City Ward Tour, Sunday, June 4, 2023 at 11:00am! 3,000 Bikes. 15 Miles. 6 Wards. 1 Great Day in Jersey City!"

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
            md={md + bodyMd}
        />
    )
}
