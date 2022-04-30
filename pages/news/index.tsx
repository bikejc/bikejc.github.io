import { Page } from "../../src/page";

const md = `
---

#### The Jersey City Ward Tour is back! Sunday, June 5, roll out 11am from City Hall. **[REGISTER HERE](https://www.eventbrite.com/e/jersey-city-ward-tour-2022-tickets-324066169637)**.

---

`

export default function Home() { return <Page path={"/news"} md={md} /> }
