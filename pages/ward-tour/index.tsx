import {Page} from "../../src/page";
import {reservoir} from "../../src/img";

const md = `
#### The Jersey City Ward Tour is back on Sunday, June 4, 2023, at 11:00am.

#### [Registration is open now!](https://bikejc.regfox.com/ward-tour-2023)

**2,500 Bikes. 15 Miles. 6 Wards. 1 Great Day in Jersey City!**

---
`

export const bodyMd = `
The Jersey City Ward Tour will roll Sunday, June 4, 2023, taking you (and 3,000 of our closest friends) on a tour of our great city, and passing through all of its wards.

[Register here](https://bikejc.regfox.com/ward-tour-2023), [subscribe for updates](#subscribe), or [register to volunteer here](/support/volunteer)!

---
`

export const description = "Register for the Jersey City Ward Tour, Sunday, June 4, 2023 at 11:00am! 2,500 Bikes. 15 Miles. 6 Wards. 1 Great Day in Jersey City!"

export default function Home() {
    return (
        <Page
            path={"/ward-tour"}
            banner={reservoir}
            description={description}
            md={md + bodyMd}
        />
    )
}
