import {NextPage} from "next";
import {Page} from "../../src/page";
import Markdown from "../../src/md";

const Trustee = ({ name, title = "Trustee", src, id, width, height, content }: {
    name: string
    title?: string
    src?: string
    id: string
    width?: number
    height?: number
    content: string
}) => {
    src = src || `/img/${id}-bio.png`
    return (
        <div id={id} className="field-collection-view clearfix view-mode-full">
            <div about="/field-collection/field-board-members-bio/5"
                 className="entity entity-field-collection-item field-collection-item-field-board-members-bio clearfix"
            >
                <div className="content">
                    <div className="field field-name-field-bio-position-title field-type-text field-label-hidden field-wrapper">
                        {title}
                    </div>
                    <div className="field field-name-field-bio-member-name field-type-text field-label-hidden field-wrapper">
                        {name}
                    </div>
                    <div className="field field-name-field-bio-member-photo field-type-image field-label-hidden field-wrapper">
                        <img alt={`${name} bio pic`} width={width || 200} height={height || 113} src={src} typeof="foaf:Image" />
                    </div>
                    <div className="field field-name-field-bio-member-about field-type-text-long field-label-hidden field-wrapper">
                        {Markdown(content)}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Home: NextPage = () => {
    return (
        <Page
            path={"/about/board-members"}
            banner={"/files/bike-gathering-page-header.jpg"}
            articleClasses={["node-board-members"]}
        >
            <h4>Meet our Bike JC Board Members</h4>
            <div className="field field-name-field-board-members-bio field-type-field-collection field-label-hidden field-wrapper">
                <Trustee id={"ayla"} name={"Ayla Schermer"} title={"President"} content={`
Ayla is a proud Pittsburgh native turned proud Jersey City resident since 2012. She lives downtown in the Van Vorst Park neighborhood, and is an accountant at a software company in lower Manhattan. Prior to joining the board in 2017, Ayla was a Bike JC volunteer and was also very involved in the launch of CitiBike in Jersey City in 2015. Outside of biking advocacy, Ayla is active in the Jersey City community as a singer in the North River Sing community chorus and as a devoted member of the Van Vorst Park Association. She is also an avid Broadway theatergoer, a sports fanatic, and a travel lover who checks out the biking infrastructure everywhere she goes.
`} />
                <Trustee id={"tony"} name={"Tony Borelli"} title={"Vice President"} content={`
Tony joined Bike JC’s board in 2014 after volunteering for us for several years; today he is the manager of our social media presence, a liaison to the Jersey City government, and a chief marshal for many of our organized bike rides. A native of Queens, Tony lived in several urban and suburban towns in North Jersey before moving to Downtown Jersey City’s Hamilton Park neighborhood in 1997. He lives on the same block today. After a decade as a newspaper reporter, and stints editing and writing for Manhattan management and marketing firms, Tony is currently a proofreader and copy editor for Prudential Insurance in Newark, where he is also a member of the revived Brick City Bike Collective advocacy and riding group. A longtime explorer of Jersey City and its urban environs by bike and mass transit, Tony also enjoys triathlons, marathons and distance running, and Jersey City’s art, music, dining, and nightlife scene.
`} />
                <Trustee id={"beatriz"} name={"Beatriz Bofill"} title={"Treasurer"} content={`
Beatriz has been cycling (for transportation!) since she was a kid, in many cities and countries, and is now based in the Heights and is excited for the many opportunities to improve the cycling experience that Bike JC is working on.
`} />
                <Trustee id={"ryan"} name={"Ryan Williams"} title={"Secretary"} content={`
Ryan is a computer programmer and long-time bike-share user who bought an e-bike during the pandemic and [is obsessed with their potential to revolutionize urban transportation](https://ebikes.neighbor-ryan.org/).

He maintains a Citibike dashboard at [ctbk.dev](https://ctbk.dev/), other transit/data related projects at [neighbor-ryan.org](https://neighbor-ryan.org/), and also advocates for pedestrian and transit improvements around the county with [Hudson County Complete Streets](https://hudcostreets.org/).
`} />
                <Trustee id={"daniel"} name={"Daniel Morteh"} content={`
Born and raised in Jersey City, Daniel Morteh has been a cycling enthusiast for 12 years. He bought his first bike at age 24 just to get to work on time and it started a deep passion for cycling. Now at 36 years old Daniel has evolved from a city commuter to endurance cyclist participating in as many Century (100 mile) bike rides as possible.

He has been a member of The Major Taylor Cycling Club of New Jersey since 2016 as well as their New York charter, Major Taylor Iron Riders. He also co-founded the JC Goonies, a group of urban cyclists. So far he has ridden several thousand miles and is planning on traveling to participate in various ultra-endurance events.

Daniel also works as mechanic for Jersey City Bicycle Company and a spin instructor for Hamilton Health and Fitness and Goldman Sachs. He believes that the bicycle can be a great tool to bring all types of people together.
`} />
                <Trustee id={"deirdre"} name={"Deirdre Newman"} content={`
Deirdre is an illustrator/artist working in the field of decorative painting. She also gives walking tours of community gardens and bicycling tours in NYC and is expanding to tours of JC.

She keeps bees in Riverview Community Garden in The Heights. She moved to JC in 2013 and lives on Hamilton Park.

She bicycles up and down both sides of the Hudson and to the beautiful bird sanctuary in Liberty State Park every chance she gets amongst other excursions.

She has been an avid cyclist since bartering with her junior high school to get out of gym in exchange for riding to school and back every day.
`} />
                <Trustee id={"emmanuelle"} name={"Emmanuelle Morgen"} content={`
Emmanuelle is a literary agent by day and a safe streets advocate by night. She came to bike advocacy when, on one of many trips north-south through Hudson County, she realized that most bike lanes end at municipal boundaries even though the roadways continue.

Emmanuelle has lived in Hudson County since 2009. Before moving to Jersey City’s West Side, she lived in Hoboken and served on the board of [Bike Hoboken](http://bikehoboken.org/) and the [Fund for a Better Waterfront](https://betterwaterfront.org/). She is one of the founders of [Hudson County Complete Streets](https://hudcostreets.org/), a coalition of groups and individuals advocating for transportation equity and safe streets county-wide. She is particularly interested in the cross section of transportation systems and sustainability (the transportation sector represents 40% of carbon emissions, with the highest concentration of emissions in overburdened communities).

In 2021, Emmanuelle met her partner on a bicycle. For their first date, they rode around Liberty State Park and have been exploring all that the county has to offer ever since.
`} />
                <Trustee id={"tyler"} name={"Tyler Newcomb"} content={`
Tyler is an Emergency Medical Technician who sold his car in 2021 in search of cheaper and more enjoyable mobility by bike. After responding to a string of traffic fatalities in Jersey City in 2021, he realized that these crashes were needless and preventable, and became involved in safe streets advocacy. Tyler has spoken on the intersection of safe streets with emergency vehicle access, and is a strong advocate for complete streets infrastructure that prevents crashes and enables better mobility.
                `} />
                <Trustee id={"patrick"} name={"Patrick Conlon"} title={"Advisor"} content={`
That's Patrick and his cargo bike. He bought it in Vermont and pedaled it all the way back to Jersey City. "I used to do some delivery work with this pickup truck on 2 wheels but I found out how hard that work is and quickly developed a learned respect for those who do it for a living."

He became a resident of the Heights area of Jersey City in 1991 and lived there until late 2021 when he relocated to Biddeford, Maine with his wife, their 6 cats and his bicycle collection. He rides his bike to a bike shop in Saco, ME where he is employed and is starting to get involved with promoting cycling culture in the Biddeford/Saco/Old Orchard Beach area.

Patrick got involved with BikeJC 10 years ago as a Marshall for the Ward Tour and joined the board of trustees about 7 years ago. "I was honored to serve as BikeJC's president and I think we did a good job of advancing the organization's mission. I am confident that the organization is now on strong footing with its new president, old stalwarts and enthusiastic new trustees!" 
`} />
                <Trustee id={"tom"} name={"Tom Keane"} content={``} />
            </div>
        </Page>
    )
}

export default Home
