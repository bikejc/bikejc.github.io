import { Page } from "../../src/page";
import {wtBlurb} from "../../src/blurbs";
import Triptych from "../../src/triptych";

export default function Home() {
    return (
        <Page path={"/news"} preFooter={<Triptych />}>
            {wtBlurb}
        </Page>
    )
}
