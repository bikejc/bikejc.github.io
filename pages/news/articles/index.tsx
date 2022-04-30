import {Page} from "../../../src/page";
import Markdown from "../../../src/md";
import Link from "next/link";

function Article({ title, href, content, }: {
    title: string
    href: string
    content: string
}) {
    return (
        <div className="views-row views-row-1 views-row-odd views-row-first">
            <span className="views-field views-field-title">
                <span className="field-content">
                    <Link href={href}>{title}</Link>
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
                    <Link href={href}>view</Link>
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
                            title="Ward Tour 2022 registration now open!"
                            href="https://www.eventbrite.com/e/jersey-city-ward-tour-2022-tickets-324066169637"
                            content={`
The Jersey City Ward Tour is back! Sunday, June 5, roll out 11am from City Hall.
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
                                    <Link href="/news/articles">
                                        1
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/news/articles?page=1"><a title="Go to page 2">
                                        2
                                    </a></Link>
                                </li>
                                <li className="arrow">
                                    <Link href="/news/articles?page=1"><a title="Go to next page">
                                        next ›
                                    </a></Link>
                                </li>
                                <li className="arrow last">
                                    <Link href="/news/articles?page=1"><a title="Go to last page">
                                        last »
                                    </a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Page>
    )
}
