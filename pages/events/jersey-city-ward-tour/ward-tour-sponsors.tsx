import { Page } from "../../../src/page";
import {SponsorsList} from "../../support/sponsors";
import Markdown from "../../../src/md";

export default function Home() {
    return (
        <Page path={"/events/jersey-city-ward-tour/ward-tour-sponsors"} documentClasses={["section-support"]}>
            {Markdown(`
### We'd like to thank our 2022 Ward Tour Sponsors.
This event would not be possible without their support.            
`)}
            <SponsorsList />
        </Page>
    )
}
