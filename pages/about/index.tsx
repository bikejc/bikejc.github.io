import {NextPage} from "next";
import {Page} from "../../src/page";

const Home: NextPage = () => {
    return (
        <Page
            path={"/about"}
            banners={[ "/files/lincoln-park-banner.jpg" ]}
            // title="bikejc | About"
            // breadcrumbs={{ "/": "Home", "/about": "About", }}
        >
            <h1 className="title" id="page-title">About</h1>
            <article about="/about" className="node node-page view-mode-full" id="node-2" typeof="foaf:Document">
                <div className="field field-name-body field-type-text-with-summary field-label-hidden field-wrapper body field">
                    <p>
                        Bike JC is a citizen-based advocacy organization that aims to make Jersey City streets safe and
                        welcoming for bicyclists, by promoting traffic law enforcement, bicycle lane creation,
                        additional bicycle rack placement, education, and group rides. We are bicyclists, commuters,
                        parents, BMX riders, businesspeople, planners, and advocates for the full potential of Jersey
                        City.
                    </p>
                    <p>
                        We are committed to working with our neighborhoods, schools, and elected officials to make
                        Jersey City the most bike-friendly city in the state. We want to help bicyclists commute,
                        exercise, enjoy scenic rides, ferry children to activities, and head out shopping in increasing
                        numbers in the immediate future.
                    </p>
                    <p>
                        With its extensive network of public transit options and parks, this dense city of well over a
                        quarter million people provides the perfect infrastructure to support commuter and recreational
                        bicycling. At the same time, bicycles are also a key option for facilitating inter-modal
                        connections. Seven miles long and approximately two miles wide, encompassing Liberty State Park
                        and Lincoln Park, as well as many smaller city parks, Jersey City is just the right size for a
                        bike ride.
                    </p>
                    <p>
                        We believe a bike-friendly city is safer for everyone. Studies have shown that the mere presence
                        of more bicyclists (and pedestrians) encourages motorists to drive with more caution and
                        decreases accidents. Bicycle lanes not only tend to increase the number of cyclists but can act
                        as a traffic calming measure, helping pedestrians navigate streets safely as well. Bicycling is
                        also economical and easy on the environment, and it transforms the average commute into a great
                        workout.
                    </p>
                </div>
            </article>
        </Page>
    )
}

export default Home
