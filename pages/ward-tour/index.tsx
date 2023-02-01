import {Page, Triptych} from "../../src/page";
import Markdown from "../../src/md";

const md = `
#### The Jersey City Ward Tour is back on Sunday, June 4, 2023, at 11:00am.

#### Free registration coming soon!

**2,500 Bikes. 15 Miles. 6 Wards. 1 Great Day in Jersey City!**

---
`

export const bodyMd = `
The Jersey City Ward Tour will roll Sunday, June 4, 2023, taking you (and 2,500 of our closest friends) on a tour of our great city, and passing through all of its wards.

Stay tuned here, [subscribe for updates](#subscribe), or [register to volunteer here](/support/volunteer)!

---
`

export const description = "The Jersey City Ward Tour is back on Sunday, June 4, 2023, at 11:00am. Free registration coming soon! 2,500 Bikes. 15 Miles. 6 Wards. 1 Great Day in Jersey City!"

export default function Home() {
    return (
        <Page
            path={"/ward-tour"}
            banner="/files/BikeJcHomeSlide2.jpg"
            description={description}
            preFooter={<Triptych/>}
        >
            {Markdown(md + bodyMd)}
        </Page>
    )
}
