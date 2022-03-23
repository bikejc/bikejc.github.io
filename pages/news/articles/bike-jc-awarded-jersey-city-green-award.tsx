import { Page } from "../../../src/page";

export default function Home() {
    return (
        <Page path={"/news/articles/bike-jc-awarded-jersey-city-green-award"}>
            <p>
                Thanks to the Jersey City Redevelopment Agency for recognizing the growing community of Jersey City cyclists, through this award to Bike JC.
            </p>
            <p>
                Our esteemed co-honorees included Grove Street Bicycles and city planner Tanya Marione-Stanton, who is organizing the city's Adopt-a-Lot Community Garden Program. Seven of those gardens are on the route for the Community Garden Tour this weekend, starting at 11 am at Riverview-Fisk Park.
            </p>
            <p>
                Other award winners included the newly recreated city Environmental Commission, with a board of appointees who have expertise in environmental engineering and consulting, among other fields; Garden State Urban Farms, which will be setting up a large hydroponic farm somewhere in the city (likely Greenville) soon, in partnership with the Jersey City Food Co-op; and City Green, which has helped create gardens at nine city public schools, where kids eagerly await the harvest of each new carrot.
            </p>
        </Page>
    )
}
