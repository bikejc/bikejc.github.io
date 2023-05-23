import {Page} from "../../src/page"
import MD from "../../src/md"
import {wt23vol} from "../../src/blurbs";
import {SponsorsList2023} from "./sponsors";

export default function Home() {
        return (
            <Page path={"/support"}>
                <div className="field field-name-body field-type-text-with-summary field-label-hidden field-wrapper body field">
                    {MD(`
We want biking to keep getting bigger and better in Jersey City, and we need your help to make it happen! Bike JC is a 100% volunteer organization, and counts on your contributions of time, money, and other resources to get things done.

You can support [our mission](/about/) by:
- [**Making an individual donation**](./donate): we’re an IRS-certified 501(c)(3) nonprofit organization, eligible for a variety of grants and matching-funds programs, as well as [individual donations](./donate).
- [**Signing up to volunteer for the 2023 WARD TOUR**](${wt23vol}): [the Ward Tour](/ward-tour) is our biggest event of the year, and we need all hands on deck for setup, marshaling, and teardown.
- [**Signing up to volunteer generally**](./volunteer): we regularly [call for volunteers](./volunteer) to help us run our larger events, contribute specialized services, and spread the word about cycling.
- [**Thanking our sponsors for their support**](./sponsors): we couldn't do any of our work without them.

We also offer a limited number of sponsorships, often around our major events, usually filled by local businesses. Oh, and we have [some T-shirts and other stuff that you can get if you donate](./cool-swag-cool-bikers/); that also helps us pay the bills, while making you look really cool—if we do say so ourselves!

---
## Sponsors <a id="sponsors"></a>
`)}
                    <SponsorsList2023 />
                </div>
            </Page>
        )
    }
