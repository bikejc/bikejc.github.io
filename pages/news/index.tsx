import { Page } from "../../src/page";

export default function Home() {
    return (
        <Page path={"/news"}>
            <p>
                Watch this space for news releases, recent articles, and announcements.
            </p>
            <h5>
                Bike JC is seeking a contract Grant Writer to identify grant opportunities, develop funding proposals, manage grants, and effectively communicate Bike JC’s mission and services/programs to Funders.
            </h5>
            <p>
                <a href="/news/articles/job-posting-contract-grant-writer">
                    Click for full description
                </a>
            </p>
            <p>
            </p>
            <section className="block block-views block-views-recent-articles-block-2">
                <div
                    className="view view-recent-articles view-id-recent_articles view-display-id-block_2 view-dom-id-17147185ba53dedb2c588eeee140ae13">
                    <div className="view-content">
                        <div className="views-row views-row-1 views-row-odd views-row-first views-row-last">
                  <span className="views-field views-field-title">
                    <span className="field-content">
                      <a href="/news/articles/citi-bike-jc-rebalancing">Citi Bike JC Rebalancing</a>
                    </span>
                  </span>
                            <div className="views-field views-field-body">
                                <div className="field-content">
                                    <p>Bike JC is very sorry to see that Citi Bike JC docking stations are being
                                        relocated from large areas in the southern third of Jersey City. As with earlier
                                        removals in the northern Heights, the latest realignment is unfortunate and
                                        painful for several reasons.</p>
                                    <p>Some of the stations had groups of regular users who are now deprived of service.
                                        And several of the stations served or are in or near, underserved communities,
                                        and neighborhoods with many lower-income residents, which raises the serious
                                        concern that this rebalance will exacerbate the already documented <a
                                            href="https://www.citylab.com/equity/2017/07/what-keeps-bike-share-white/533412/">equity
                                            gap in bike share systems.</a>
                                    </p>
                                    <p>Citi Bike JC’s operators, Motivate, are moving eight of its least-used stations
                                        to areas...</p>
                                </div>
                            </div>
                            <div className="views-field views-field-view-node">
                                <span className="views-label views-label-view-node">Read More: </span>
                                <span className="field-content">
                      <a href="/news/articles/citi-bike-jc-rebalancing">view</a>
                    </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Page>
    )
}
