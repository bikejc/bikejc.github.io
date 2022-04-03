import { Page } from "../../src/page";
import Markdown from "../../src/md";

const md = `
Jersey City currently boasts more miles of on-street protected bike lanes than any other city or town in New Jersey, and Bike JC had a lot to do with that.

Since our founding in 2009, we’ve advocated with city leaders for bike infrastructure, including bike lanes. Early attempts were met with skepticism, but in time our persistence earned us a seat on the city’s official committee to plan a bike system. Early and pilot efforts included painted lanes along Grove Street downtown and on Fulton Avenue and Woodlawn Avenue in Greenville, and “sharrows“ (painted symbols indicating that bikes and motor vehicles should share a lane) on other roads.

In 2013, as the administration of incoming Mayor Steven Fulop rolled out several bike-related initiatives, city officials first installed a larger set of simple, striped bike lanes, over 25 miles’ worth, on dozens of streets, and the City Council appropriated $551,000 to create them. In 2014 city contractors Statewide Striping of Parsippany laid down durable thermoplastic white striping to mark the lanes, and also put down solid green, specially textured lanes on parts of Christopher Columbus Drive and Montgomery Street as a pilot.

More recently, the focus has shifted to physically protected/separated bike lanes, starting with a nascent network on the wide avenues Downtown, in Journal Square and McGinley Square, and now branching out slowly toward other neighborhoods. Some are tucked between parked cars and the curb "parking-protected," others staked out with plastic "flex-posts," and some now upgraded to protection by concrete "Jersey barriers."

Bike JC’s current bike lane priorities, our focus in speaking with city officials, are to get:
- protected lanes installed throughout Jersey City
- the methods of physical separation upgraded
- existing and new protected lanes better connected with each other, to form a truly coherent and citywide network.

THESE GOALS ARE, SIMPLY PUT, THE MOST IMPORTANT REASON FOR BIKE JC'S CONTINUED EXISTENCE. Please do everything you can think of to urge and influence your elected representatives to continue this work as quickly and thoroughly as possible, and ask your friends, neighbors, local businesses, community groups and anyone else you can think of to do the same!

Mayor Fulop recently announced plans for installation of 7 more miles of protected bike lanes in Jersey City in 2022, and there are other discrete proposals to add more on West Side Avenue and JFK Boulevard. Please follow us on social media and check your member email for details!
`

const highlight = `
#### Important Facts About Jersey City Bike Lanes
- You’re required by city law to ride in the bike lane on any street that has one, unless you’re biking as fast as the car traffic, in which case you may blend into line with the cars. (That can happen when you’re just a fast cyclist, or when you’re going downhill. It can also happen when car traffic is slowed by congestion—though at that point, riding in the bike lane is probably faster!)
- You’re also allowed to leave the bike lane temporarily when it’s blocked or made dangerous by intruding cars, big potholes, debris, or slower cyclists. Use the car lane to get around the obstruction, then return to the bike lane. Remember to use hand signals before making each of these movements, just as you would when changing lanes in a car.
- In an unprotected lane, unless you’re riding very slowly, it’s usually safest to ride toward the side of the bike lane that’s closest to the car travel lane, and farthest from any parked cars. That makes it easier to avoid getting “doored”—running into the doors of parked cars when occupants open them suddenly. Always scan the parked cars ahead of you, to spot opening car doors.
`

export default function Home() {
    return <Page path={"/projects/bike-lanes"}>
        {Markdown(md)}
        <div className={"field field-name-field-page-highlights-section field-type-text-long field-label-hidden field-wrapper"}>
            {Markdown(highlight)}
        </div>
    </Page>
}
