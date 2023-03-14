import {Page} from "../../src/page";
import Link from "next/link"

export default function Home() {
    return (
        <Page path={"/support/donate"}>
            <div className="field field-name-body field-type-text-with-summary field-label-hidden field-wrapper body field">
                <p>You can donate to Bike JC and support our mission in a few different ways.</p>
                <p>Sign up to volunteer your time <Link href="/support/volunteer">here</Link>.</p>
                <p>You can make a cash contribution via Paypal:</p>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input name="cmd" type="hidden" value="_s-xclick"/>
                    <input name="hosted_button_id" type="hidden" value="BMJXSWD8HGWXW"/>
                    <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="/files/btn_donateCC_LG.gif" type="image"/>
                    <img alt="" height="1" src="/files/pixel.gif" width="1"/>
                </form>
                <p></p>
                <p>You can also purchase fabulous Bike JC swag to support the organization and represent bike culture out in the street at the same time!</p>
            </div>
        </Page>
    )
}
