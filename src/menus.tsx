import {Sitemap} from "./sitemap";
import {MenuListItem} from "./sectionMenu";
import React from "react";

export function SmallMenu() {
    return (
        <div className="contain-to-grid show-for-small">
            <nav className="top-bar" data-options="">
                <ul className="title-area">
                    <li className="name">
                        <h1>
                            <a className="active" href="/" rel="home" title="bikejc Home">bikejc</a>
                        </h1>
                    </li>
                    <li className="toggle-topbar menu-icon">
                        <a href="#">
                            <span>Menu</span>
                        </a>
                    </li>
                </ul>
                <section className="top-bar-section">
                    <ul className="main-nav left" id="main-menu">
                        <li className="first expanded has-dropdown about not-click">
                            <a className="about" href="/about">About</a>
                            <ul className="dropdown">
                                <li className="title back js-generated">
                                    <h5>
                                        <a href="#">Back</a>
                                    </h5>
                                </li>
                                <li className="first expanded show-for-small">
                                    <a className="about" href="/about">About</a>
                                </li>
                                <li className="first leaf history">
                                    <a className="history" href="/about/history">History</a>
                                </li>
                                <li className="leaf">
                                    <a href="/about/founding">Founding</a>
                                </li>
                                <li className="leaf about board-members">
                                    <a className="about board-members" href="/about/board-members">Board Members</a>
                                </li>
                                <li className="last leaf non-profit">
                                    <a className="non-profit" href="/about/non-profit-information">Non-Profit Information</a>
                                </li>
                            </ul>
                        </li>
                        <li className="expanded has-dropdown projects not-click">
                            <a className="projects" href="/projects">Projects</a>
                            <ul className="dropdown">
                                <li className="title back js-generated">
                                    <h5>
                                        <a href="#">Back</a>
                                    </h5>
                                </li>
                                <li className="expanded show-for-small">
                                    <a className="projects" href="/projects">Projects</a>
                                </li>
                                <li className="first leaf bike-lanes projects">
                                    <a className="bike-lanes projects" href="/projects/bike-lanes">Bike Lanes</a>
                                </li>
                                <li className="leaf projects bike-share">
                                    <a className="projects bike-share" href="/projects/bike-share">Bike Share</a>
                                </li>
                                <li className="leaf projects bike-racks">
                                    <a className="projects bike-racks" href="/projects/bike-racks">Bike Racks</a>
                                </li>
                                <li className="leaf projects revised-zoning">
                                    <a className="projects revised-zoning" href="/projects/revised-zoning">Revised Zoning</a>
                                </li>
                                <li className="last leaf">
                                    <a href="/projects/gsv">Grand Street Vision</a>
                                </li>
                            </ul>
                        </li>
                        <li className="expanded has-dropdown events not-click">
                            <a className="events" href="/events">Events</a>
                            <ul className="dropdown">
                                <li className="title back js-generated">
                                    <h5>
                                        <a href="#">Back</a>
                                    </h5>
                                </li>
                                <li className="expanded show-for-small">
                                    <a className="events" href="/events">Events</a>
                                </li>
                                <li className="first expanded has-dropdown ward-tour not-click"
                                    title="Jersey City Ward Tour">
                                    <a className="ward-tour" href="/events/jersey-city-ward-tour"
                                       title="Jersey City Ward Tour">Jersey City Ward Tour</a>
                                    <ul className="dropdown">
                                        <li className="title back js-generated">
                                            <h5>
                                                <a href="#">Back</a>
                                            </h5>
                                        </li>
                                        <li className="first expanded show-for-small">
                                            <a className="ward-tour" href="/events/jersey-city-ward-tour"
                                               title="Jersey City Ward Tour">Jersey City Ward Tour</a>
                                        </li>
                                        <li className="first expanded has-dropdown ward-tour not-click"
                                            title="Ward Tour Waiver">
                                            <a className="ward-tour" href="/events/jersey-city-ward-tour/ward-tour-registration"
                                               title="Ward Tour Waiver">Ward Tour Registration</a>
                                            <ul className="dropdown">
                                                <li className="title back js-generated">
                                                    <h5>
                                                        <a href="#">Back</a>
                                                    </h5>
                                                </li>
                                                <li className="first expanded show-for-small">
                                                    <a className="ward-tour" href="/events/jersey-city-ward-tour/ward-tour-registration"
                                                       title="Ward Tour Waiver">Ward Tour Registration</a>
                                                </li>
                                                <li className="first leaf">
                                                    <a href="/events/jersey-city-ward-tour/ward-tour-registration/15-mile-route-registration-form">15
                                                        Mile Route Registration Form</a>
                                                </li>
                                                <li className="last leaf">
                                                    <a href="/events/jersey-city-ward-tour/ward-tour-registration/register-25-mile-ride">25
                                                        Mile Route Registration Form</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="leaf ward-tour">
                                            <a className="ward-tour" href="/ward-tour/volunteer">Volunteer for
                                                the Ward Tour</a>
                                        </li>
                                        <li className="leaf">
                                            <a href="/events/jersey-city-ward-tour/ward-tour-route">Ward Tour Route</a>
                                        </li>
                                        <li className="leaf">
                                            <a href="/events/jersey-city-ward-tour/finish-line-festival">Finish Line Festival</a>
                                        </li>
                                        <li className="leaf">
                                            <a href="/events/jersey-city-ward-tour/ward-tour-sponsors">Ward Tour Sponsors</a>
                                        </li>
                                        <li className="last leaf">
                                            <a href="/events/jersey-city-ward-tour/ward-tour-faqs">Ward Tour FAQs</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="expanded has-dropdown not-click">
                                    <a href="/events/bike-jcast">Bike JCast</a>
                                    <ul className="dropdown">
                                        <li className="title back js-generated">
                                            <h5>
                                                <a href="#">Back</a>
                                            </h5>
                                        </li>
                                        <li className="expanded show-for-small">
                                            <a href="/events/bike-jcast">Bike JCast</a>
                                        </li>
                                        <li className="first last leaf">
                                            <a href="/events/bike-jcast/bike-jcast-2017">Bike JCast 2017</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="leaf">
                                    <a href="/events/neighborhood-cleanup">Neighborhood Cleanup</a>
                                </li>
                                <li className="last leaf calendar">
                                    <a className="calendar" href="/events/calendar">Calendar</a>
                                </li>
                            </ul>
                        </li>
                        <li className="expanded has-dropdown news not-click">
                            <a className="news" href="/news">News</a>
                            <ul className="dropdown">
                                <li className="title back js-generated">
                                    <h5>
                                        <a href="#">Back</a>
                                    </h5>
                                </li>
                                <li className="expanded show-for-small">
                                    <a className="news" href="/news">News</a>
                                </li>
                                <li className="first expanded has-dropdown articles news not-click">
                                    <a className="articles news" href="/news/articles">Articles and Press Releases</a>
                                    <ul className="dropdown">
                                        <li className="title back js-generated">
                                            <h5>
                                                <a href="#">Back</a>
                                            </h5>
                                        </li>
                                        <li className="first expanded show-for-small">
                                            <a className="articles news" href="/news/articles">Articles and Press Releases</a>
                                        </li>
                                        <li className="first leaf">
                                            <a href="/news/articles/2016-ward-tour-press-release">2016 Ward Tour Press Release</a>
                                        </li>
                                        <li className="leaf">
                                            <a href="/news/articles-and-press-releases/grand-street-vision-protected-bike-lane-petition">Grand
                                                Street Vision - Protected Bike Lane Petition</a>
                                        </li>
                                        <li className="leaf">
                                            <a href="/news/articles/job-posting-contract-grant-writer">Job Posting: Contract Grant
                                                Writer</a>
                                        </li>
                                        <li className="leaf">
                                            <a href="/news/articles/design-bike-jcs-7th-annual-ward-tour-poster">Design Bike JC's 7th
                                                Annual Ward Tour Poster</a>
                                        </li>
                                        <li className="leaf">
                                            <a href="/news/articles/jersey-citys-first-permanent-bike-lane">Jersey City's First
                                                Permanent Bike Lane</a>
                                        </li>
                                        <li className="leaf">
                                            <a href="/news/articles/installation-jersey-citys-new-bike-racks-underway">New Bike Rack
                                                Installation Underway</a>
                                        </li>
                                        <li className="leaf">
                                            <a href="/news/articles/bike-jc-awarded-jersey-city-green-award">Bike JC Awarded 'Jersey
                                                City Green Award'</a>
                                        </li>
                                        <li className="last leaf">
                                            <a href="/news/articles/footbridge-liberty-state-park-arrives">Footbridge to Liberty State
                                                Park Arrives</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="last leaf media-coverage news">
                                    <a className="media-coverage news" href="/news/media-coverage">Media Coverage</a>
                                </li>
                            </ul>
                        </li>
                        <li className="expanded has-dropdown support not-click">
                            <a className="support" href="/support">Support</a>
                            <ul className="dropdown">
                                <li className="title back js-generated">
                                    <h5>
                                        <a href="#">Back</a>
                                    </h5>
                                </li>
                                <li className="expanded show-for-small">
                                    <a className="support" href="/support">Support</a>
                                </li>
                                <li className="first leaf sponsors">
                                    <a className="sponsors" href="/support/sponsors">Sponsors</a>
                                </li>
                                <li className="leaf">
                                    <a href="/support/volunteer">Volunteer</a>
                                </li>
                                <li className="leaf donate">
                                    <a className="donate" href="/support/donate">Donate</a>
                                </li>
                                <li className="last leaf merchandise">
                                    <a className="merchandise" href="/support/cool-swag-cool-bikers">Cool Swag for Cool Bikers!</a>
                                </li>
                            </ul>
                        </li>
                        <li className="expanded has-dropdown resources not-click">
                            <a className="resources" href="/resources">Resources</a>
                            <ul className="dropdown">
                                <li className="title back js-generated">
                                    <h5>
                                        <a href="#">Back</a>
                                    </h5>
                                </li>
                                <li className="expanded show-for-small">
                                    <a className="resources" href="/resources">Resources</a>
                                </li>
                                <li className="first leaf">
                                    <a href="/citi-bike-usage-jersey-city-2018">Citi Bike Usage 2018</a>
                                </li>
                                <li className="leaf road-rules">
                                    <a className="road-rules" href="/resources/rules-road">Rules of the Road</a>
                                </li>
                                <li className="leaf bike-maps">
                                    <a className="bike-maps" href="/resources/bike-maps">Bike Maps</a>
                                </li>
                                <li className="leaf">
                                    <a href="/resources/national-bike-registry">National Bike Registry</a>
                                </li>
                                <li className="leaf">
                                    <a href="/resources/speed-hump-requests">Speed Hump Requests</a>
                                </li>
                                <li className="leaf">
                                    <a href="/resources/bike-racks-businesses">Bike Racks for Businesses</a>
                                </li>
                                <li className="last leaf useful-links">
                                    <a className="useful-links" href="/resources/useful-links">Useful Links</a>
                                </li>
                            </ul>
                        </li>
                        <li className="last leaf contact">
                            <a className="contact" href="/contact-us">Contact</a>
                        </li>
                    </ul>
                </section>
            </nav>
        </div>
    )
}

export function BigMenu({ path }: { path: string }) {
    const topLevelMap = (Sitemap as any)[""] as any as { [k: string]: string }
    const numTopLevels = Object.keys(topLevelMap).length
    const menuListItems = Object.entries(topLevelMap).map(
        ([ name, map ], idx) => {
            const text = (typeof map === 'string') ? map : ((map as any)[""] as any as string)
            const topLevelPath = `/${name}`
            const n = topLevelPath.length
            if (name === 'ward-tour') return null
            return (
                <MenuListItem
                    key={name}
                    idx={idx} n={numTopLevels}
                    active={
                        path == topLevelPath ||
                        (
                            path.substring(0, n) == topLevelPath
                            && path.length > n
                            && path[n] == '/'
                            && path != '/'
                        )
                    }
                    text={text}
                    href={topLevelPath}
                />
            )
        })

    return (
        <section className="row main-menu-wrapper hide-for-small">
            <div className="logo-container">
                <a className="active" href="/" rel="home" title="bikejc Home">
                    <img alt="bikejc logo" className="logo" src="/files/logo.png" title="bikejc Home"
                         typeof="foaf:Image"></img>
                </a>
                <div className="element-invisible" id="site-name">
                    <strong>
                        <a href="/" rel="home" title="Home">
                            <span>bikejc</span>
                        </a>
                    </strong>
                </div>
            </div>
            <nav className="navigation" id="main-menu" role="navigation">
                <h2 className="element-invisible">Main menu</h2>
                <ul className="links inline-list clearfix" id="main-menu-links">
                    {menuListItems}
                </ul>
            </nav>
        </section>
    )
}
