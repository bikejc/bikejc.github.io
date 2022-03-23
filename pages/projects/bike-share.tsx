import { Page } from "../../src/page";

export default function Home() {
    return (
        <Page path={"/projects/bike-share"}>
            <p>
                Citi Bike Expansion
            </p>
            <p>
                Hoboken Joins JC
            </p>
            <p>
                Citi Bike has offered its shared bikes in Jersey City since 2016, and recently expanded its coverage throughout neighboring Hoboken. Membership entitles you to use all these NJ bikes, plus the huge NYC Citi Bike systam.
            </p>
            <p>
                More info on docking stations, membership, etc. can be found on their
                <a href="https://www.citibikejc.com/" target="_blank">website</a>!
            </p>
        </Page>
    )
}
