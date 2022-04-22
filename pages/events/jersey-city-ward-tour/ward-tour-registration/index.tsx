import { Page } from "../../../../src/page";
import { bodyMd, description } from "../index"

const md = `
## [Registration is now open for the Jersey City Ward Tour 2022!](https://www.eventbrite.com/e/jersey-city-ward-tour-2022-tickets-324066169637)

**The Jersey City Ward Tour is back on Sunday, June 5, 2022, at 11:00am**

### [FREE! REGISTER HERE.](https://www.eventbrite.com/e/324066169637)

**2,000 Bikes. 15 Miles. 6 Wards. 1 Great Day in #JerseyCity!**

---

${bodyMd}
`

export default function Home() { return <Page path={"/events/jersey-city-ward-tour/ward-tour-registration"} banner="/files/wardtourbanner1_1.jpg" md={md} description={description} /> }
