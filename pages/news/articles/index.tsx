import {Page} from "../../../src/page";
import Markdown from "../../../src/md";

function Article({ title, href, content, }: {
    title: string
    href: string
    content: string
}) {
    return (
        <div className="views-row views-row-1 views-row-odd views-row-first">
            <span className="views-field views-field-title">
                <span className="field-content">
                    <a href={href}>{title}</a>
                </span>
            </span>
            <div className="views-field views-field-body">
                <div className="field-content">
                    {Markdown(content)}
                </div>
            </div>
            <div className="views-field views-field-view-node">
                <span className="views-label views-label-view-node">
                    {"Read More: "}
                </span>
                <span className="field-content">
                    <a href={href}>view</a>
                </span>
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <Page path={"/news/articles"} h1={"Articles"}>
            <section className="block block-views article block-views-recent-articles-block-1">
                <div className="view view-recent-articles view-id-recent_articles view-display-id-block_1 view-dom-id-74a1484d0b40e9a48313d7b61c352dfd">
                    <div className="view-content">
                        <Article
                            title="Citi Bike JC Rebalancing"
                            href="/news/articles/citi-bike-jc-rebalancing"
                            content={`
Bike JC is very sorry to see that Citi Bike JC docking stations are being relocated from large areas in the southern third of Jersey City. As with earlier removals in the northern Heights, the latest realignment is unfortunate and painful for several reasons.

Some of the stations had groups of regular users who are now deprived of service. And several of the stations served or are in or near, underserved communities, and neighborhoods with many lower-income residents, which raises the serious concern that this rebalance will exacerbate the already documented [equity gap in bike share systems.](https://www.citylab.com/equity/2017/07/what-keeps-bike-share-white/533412/)

Citi Bike JC’s operators, Motivate, are moving eight of its least-used stations to areas...
`}
                        />
                        <Article
                            title="Grand Street Vision - Protected Bike Lane Petition"
                            href="/news/articles-and-press-releases/grand-street-vision-protected-bike-lane-petition"
                            content={`
Bike JC asks for your support in the creation of Jersey City's first protected bike lane on Grand Street.

**[Please Sign the Petition Here](https://www.change.org/p/city-of-jersey-city-grand-street-vision-jersey-city-complete-streets)**
                            
Motor vehicular, cycling and pedestrian traffic has dramatically increased in Jersey City over the last few years, particularly on Grand Street. As Bike JC looks to expand upon the existing bike-lane network, we understand the need to install protected bike lanes on our busiest roads. Bike JC's vision begins with Grand Street.

Grand Street runs through several neighborhoods and serves as a connection to major routes and highways. Grand Street also borders the entrance to Liberty State Park for many Jersey...
`}
                        />
                        <Article
                            title="2016 Ward Tour Press Release"
                            href="/news/articles/2016-ward-tour-press-release"
                            content={`
FOR IMMEDIATE RELEASE — May 25, 2016
———————————————————————————————————————

#### Jersey City Bike Tour Rolling to Liberty State Park June 5th

JERSEY CITY—Bike around JC to Liberty! The Jersey City Ward Tour &amp; Festival returns June 5 for its seventh year, and celebrates the preservation of Liberty State Park with an expanded festival on the park’s beautiful waterfront.

The signature event of local cycling advocacy group Bike JC, last year the Ward Tour took nearly 2,000 riders on a free 15-mile cruise through all six of Jersey City’s political wards, with a police escort. Early registration for the 2016 edition is on pace for an even bigger ride.

But this year, the tour has a new start at historic City Hall, and...
`}
                        />
                        <Article
                            title="Design Bike JC's 7th Annual Ward Tour Poster"
                            href="/news/articles/design-bike-jcs-7th-annual-ward-tour-poster"
                            content={`
##### RFP- Call for Designs for Bike JC’s 7th Annual Ward Tour Poster!

Bike JC needs a poster for our big upcoming bike tour, the Jersey City Ward Tour, and we’re calling on the brilliant artists of Jersey City to blow our minds.

**The deadline for proposals is April 11th, with the chosen artist/design receiving $750 for their work.**

We’ll choose a design by April 13th; the finished work is due April 18th.

We are asking for visual representations in any two-dimensional media of the idea of open space and cycling in Jersey City. There is plenty of current news around local cycling and open space, from the introduction of bike lanes and the bike share system, Citi Bike, to the continued highrise boom and the recent threat of opening Liberty State...
`}
                        />
                        <Article
                            title="Job Posting: Contract Grant Writer"
                            href="/news/articles/job-posting-contract-grant-writer"
                            content={`
#### JOB SUMMARY

Bike JC is seeking a **contract Grant Writer** to identify grant opportunities, develop funding proposals, manage grants, and effectively communicate Bike JC’s mission and services/programs to Funders. The Grant Writer will develop, assemble and submit grant requests. The Grant Writer is also responsible for establishing and maintaining relationships with foundations and/or corporate contacts, conducting prospective funding arrangement research, and maintaining a calendar of submissions and other deadlines.

Bike JC is run by a volunteer working executive board. **The Grant Writer is a paid position who will regularly report to the board at agreed upon intervals.**

#### PRIMARY FUNCTIONS
- Identifies...
`}
                        />
                    </div>
                    {/* TODO: implement pagination */}
                    <h2 className="element-invisible">
                        Pages
                    </h2>
                    <div className="pagination-centered">
                        <div className="item-list">
                            <ul className="pagination pager">
                                <li className="current first">
                                    <a href="/news/articles">
                                        1
                                    </a>
                                </li>
                                <li>
                                    <a href="/news/articles?page=1" title="Go to page 2">
                                        2
                                    </a>
                                </li>
                                <li className="arrow">
                                    <a href="/news/articles?page=1" title="Go to next page">
                                        next ›
                                    </a>
                                </li>
                                <li className="arrow last">
                                    <a href="/news/articles?page=1" title="Go to last page">
                                        last »
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Page>
    )
}
