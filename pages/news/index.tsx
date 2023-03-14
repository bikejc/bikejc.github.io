import {Page} from "../../src/page";
import {wtBlurb} from "../../src/blurbs";

export default function Home() {
    return (
        <Page path={"/news"}>
            {wtBlurb}
        </Page>
    )
}
