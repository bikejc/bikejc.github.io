import { Page } from "../../src/page";

    export default function Home() {
        return (
            <Page path={"/resources"}>
                <p>
             Here are some things we thought you might find useful, from maps to rules of the road and links to other relevant web sites.
             <br/>
             <br/>
             If you know of other items we should stash here,
             <a href="/contact-us">
              please let us know
             </a>
             — especially if you can help create new resources for us riders!
            </p>
            </Page>
        )
    }
    