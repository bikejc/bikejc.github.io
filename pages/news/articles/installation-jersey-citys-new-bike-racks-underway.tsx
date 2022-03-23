import { Page } from "../../../src/page";

export default function Home() {
    return (
        <Page path={"/news/articles/installation-jersey-citys-new-bike-racks-underway"}>
            <p>
                4/14/2015
            </p>
            <p>
                Jersey City Department of Public Works is rolling out the new bike racks. Check out the new installation at Nu Bar ( 339 Communipaw Ave).
            </p>
            <p>
                Two racks have been placed so far on Whiton St. (pictured) and two more on Communipaw  Ave.
            </p>
            <p>
                Many, many more will be installed over the next 6 weeks.
            </p>
            <p>
                Each rack is designed to only  hold up to 2 bicycles; but there will be hundreds of them.
            </p>
            <div className="field-collection-container clearfix">
                <div
                    className="field field-name-field-article-photos field-type-field-collection field-label-hidden field-wrapper">
                    <div className="field-collection-view clearfix view-mode-full field-collection-view-final">
                        <div about="/field-collection/field-article-photos/27"
                             className="entity entity-field-collection-item field-collection-item-field-article-photos clearfix"
                             typeof="">
                            <div className="content">
                                <div
                                    className="field field-name-field-article-page-image field-type-image field-label-hidden field-wrapper">
                                    <img alt="" height="492" src="/files/bike-rack-rollout.png" typeof="foaf:Image"
                                         width="377"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}
