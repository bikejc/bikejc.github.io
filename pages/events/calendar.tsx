import { Page } from "../../src/page";

export default function Home() {
    return (
        <Page path={"/events/calendar"}>
            <p>
            </p>
            <p>
                On October 4th, 2017 join Safe Streets JC and Bike JC for a discussion with the Mayoral candidates about Transportation &amp; Traffic Safety in Jersey City.
            </p>
            <p>
                We'll be asking them about their visions to make the city safer and more accessible to all citizens across all modes of transit, including pedestrians, bicycles, motor vehicles and public transit.
            </p>
            <p>
                The event will take place at the Dr. Martin Luther King School, located at 886 Bergen Ave. in Jersey City. Doors at 6:45pm, Forum starts at 7pm.
            </p>
            <p>
                Submit your questions for the forum here:
                <a href="https://goo.gl/forms/snJ5XKx66LEh9Gql2" target="_blank">
                    Community Questions
                </a>
            </p>
        </Page>
    )
}
