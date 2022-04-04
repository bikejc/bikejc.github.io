import { Page } from "../../../src/page";

const md = `
Once you've reached the finish line, celebrate from 1:00 pm - 5:00 pm with a huge after-party on **the Hudson River waterfront, including Lutze Biergarten,** when the ride ends.

This festival will be free and open to the public.

Band lineup for the Finish Line Festival TBA

The festival is free and open to everyone, even if you're not riding in the Jersey City Ward Tour that will finish there! Bike around to it with Bike JC, or just come independently and enjoy it!

More details coming soon!
`

export default function Home() { return <Page path={"/events/jersey-city-ward-tour/finish-line-festival"} banner="/files/wardtourbanner1_3.jpg" md={md} /> }
