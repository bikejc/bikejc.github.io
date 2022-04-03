import { Page } from "../../src/page";

export default function Home() {
    return (
        <Page path={"/resources/national-bike-registry"}>
            <h4>
                Thousands of stolen bikes are recovered by police but few are returned to their owners. The National Bike Registry helps authorities locate you when they find your bike. Register your bike online in these three easy steps.
            </h4>
            <p>
                1. Find the serial number on your bike.
                <br/>
                2.a
                <a href="http://nationalbikeregistry.com/register.html" target="_blank">
                    Go to NationalBikeRegistry.com to register online.
                </a>
                This registry charges a fee ($10 for 10 years) but it's the registry used as a central database accessible by police
                <br/>
                2.b
                <a href="https://bikeindex.org/how_it_works" target="_blank">
                    Go to Bike Index to register online.
                </a>
                This registry is free and easily searchable. Many bike stores register information here in addition to scores of community partners nationwide.
                <br/>
                (You can also register your bike and pay your fees at your local bike retailer, library branch or police department.)
                <br/>
                3. In 2 to 3 weeks your registration certificate and bike label will be mailed to you.
                <br/>
                <br/>
                <strong>
                    If your bike is stolen or you think you've come across someone else's stolen bike,
                </strong>
                submit your bike's information
                <a href="https://bikeindex.org/bikes?utf8=%E2%9C%93&query=&proximity=Jersey+City+New+Jersey&proximity_radius=5&stolen=true&non_stolen=&non_proximity=&serial=" target="_blank">
                    or look for a match
                </a>
                using the
                <a href="https://bikeindex.org/bikes/new?stolen=true" target="_blank">
                    Bike Index
                </a>
                for free!
            </p>
        </Page>
    )
}
