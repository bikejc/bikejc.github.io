import { Page } from "../../src/page";

    export default function Home() {
        return (
            <Page path={"/resources/speed-hump-requests"}>
                <p>
             <b>
              A fuller informational guide to having speed humps installed in your community is coming soon.
             </b>
            </p>
            <p>
             For now, please make use of the three pdf documents here in your request to the city:
            </p>
            <p>
             <a href="/sites/default/files/documents/speedhumppolicy.pdf" target="_blank">
              Speed hump policy
             </a>
            </p>
            <p>
             <a href="/sites/default/files/documents/speedhumppetition.pdf" target="_blank">
              Speed hump petition
             </a>
            </p>
            <p>
             <a href="/sites/default/files/documents/speedhumprequestform.pdf" target="_blank">
              Speed hump request form
             </a>
            </p>
            </Page>
        )
    }
    