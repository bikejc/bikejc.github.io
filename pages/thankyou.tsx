import {Page} from "../src/page"
import MD from "../src/md"

export default function Home() {
    return (
        <Page path={"/thankyou"}>
            <div className="field field-name-body field-type-text-with-summary field-label-hidden field-wrapper body field">
                {MD(`
Thank you for your support! If you're local, we'll be in touch soon to coordinate delivery.
`)}
            </div>
        </Page>
    )
}
