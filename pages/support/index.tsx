import { Page } from "../../src/page";

    export default function Home() {
        return (
            <Page path={"/support"}>
                <div className="field field-name-body field-type-text-with-summary field-label-hidden field-wrapper body field">
             <p>
              We want biking to keep getting bigger and better here, and we need your help to make it happen! Bike JC counts on your contributions of time, money, and other resources to get things done. We regularly call for volunteers to help us run our larger events, contribute specialized services, and spread the word about cycling. We’re an IRS-certified 501(c)(3) nonprofit organization, eligible for a variety of grants and matching-funds programs, as well as individual donations
              <br/>
              <br/>
              We also offer a limited number of sponsorships, often around our major events, usually filled by local businesses. Oh, and we have some T-shirts and other stuff that you can get if you donate; that also helps us pay the bills, while making you look really cool—if we do say so ourselves!
             </p>
            </div>
            </Page>
        )
    }
