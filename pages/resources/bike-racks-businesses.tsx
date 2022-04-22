import { Page } from "../../src/page";

export default function Home() {
    return (
        <Page path={"/resources/bike-racks-businesses"}>
            <p>
                <b>
                    Coming soon:
                </b>
                step by step instructions on how to get a bike rack installed at your place of business for your bike-riding customers to use and appreciate!
            </p>
            <p>
                For now, please make use of the following form in your request to the city:
            </p>
            <p>
                <a href="/sites/default/files/documents/jcdpwbikerackrequestform.pdf" target="_blank">
                    Bike rack request form
                </a>
            </p>
        </Page>
    )
}
