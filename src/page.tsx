import React, {ReactNode} from "react";
import Head from "next/head";
import Script from "next/script";
import {Breadcrumb, lookup, Sitemap} from "./sitemap";
import { dirname } from "path";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Markdown from "./md";
import {action, mc_id, mc_u} from "./mc";

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

export function Slider({ srcs }: { srcs: string[] }) {
    return (
        <section className="l-header-region row">
            <div className="large-12 columns home-splash-image">
                <section className="block block-nivo-slider block-nivo-slider-nivo-slider header">
                    <div className="slider-wrapper theme-light">
                        <div className="ribbon"></div>
                        <div className="nivoSlider" id="slider">{
                            srcs.map((src, idx) =>
                                <img
                                    id={`slide-${idx}`} key={`${idx}`} data-thumb={src} src={src}
                                    alt="" title="" typeof="foaf:Image" data-transition="" className="slide"
                                />
                            )
                        }</div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export function Banner({ src }: { src: string }) {
    return (
        <section className="l-header-region row">
            <div className="large-12 columns">
                <section className="block block-views page-header-banner block-views-page-header-image-view-block header">
                    <div className="view view-page-header-image-view view-id-page_header_image_view view-display-id-block">
                        <div className="view-content">
                            <div className="views-row views-row-1 views-row-odd views-row-first views-row-last">
                                <div className="views-field views-field-field-page-header-image">
                                    <div className="field-content">
                                        <img alt="" height="200" src={src} typeof="foaf:Image" width="1000"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export function Header({ path, banners }: { path: string, banners: string[] }) {
    return (
        <header className="l-header" role="banner">
            <SmallMenu />
            <BigMenu path={path} />
            {
                banners.length > 1
                    ? <Slider srcs={banners} />
                    : <Banner src={banners[0]} />
            }
        </header>
    )
}

type SectionMenu = {
    title: string
    activePath?: string
    breadcrumbs: Breadcrumb[]
}

function MenuListItem({ idx, n, active, text, href, }: {
    idx: number
    n: number
    active: boolean
    text: string
    href: string
}) {
    let classes = []
    let linkClasses = []
    if (idx == 0) {
        classes.push("first")
    }
    classes.push("leaf")
    if (active) {
        classes.push("active")
        classes.push("active-trail")
        linkClasses.push("active")
        linkClasses.push("active-trail")
    }
    if (idx + 1 == n) {
        classes.push("last")
    }
    return (
        <li key={text} className={classes.join(" ")}>
            <a href={href} className={linkClasses.join(" ")}>{text}</a>
        </li>
    )
}

export function SectionMenu({ title, activePath, breadcrumbs }: SectionMenu) {
    const numBreadcrumbs = breadcrumbs.length
    return (
        <>
            <h2 className="block-title">{title}</h2>
            <div className="menu-block-wrapper menu-block-1 menu-name-main-menu parent-mlid-0 menu-level-2">
                <ul className="menu">{
                    breadcrumbs.map(({ href, text }, idx) =>
                        <MenuListItem
                            key={text}
                            idx={idx} n={numBreadcrumbs}
                            active={!!activePath && href == activePath}
                            text={text} href={href}
                        />
                    )
                }</ul>
            </div>
        </>
    )
}

export function Aside({ sectionMenu }: { sectionMenu?: SectionMenu }) {
    // console.log("sectionMenu:", sectionMenu)
    return (
        <aside className="large-4 sidebar-second columns sidebar columns" role="complementary">
            <section className="block block-block social-media block-block-6 block-odd clearfix">
                <h2 className="block-title">Follow Us</h2>
                <div>
                    <a className="twitter" href="http://www.twitter.com/bikejc" target="_blank"></a>
                </div>
                <div>
                    <a className="facebook" href="https://www.facebook.com/bikeJC" target="_blank"></a>
                </div>
                <div>
                    <a className="instagram" href="http://www.instagram.com/bikejcgram" target="_blank"></a>
                </div>
            </section>
            <section className="block block-menu-block block-menu-block-1 block-even clearfix">{
                sectionMenu
                    ? <SectionMenu {...sectionMenu} />
                    : null
            }</section>
            <section className="block block-block block-block-13 block-even clearfix">
                <h2 className="block-title">Ward Tour 2023</h2>
                <p>
                    <strong>The Jersey City Ward Tour is back! Sunday, June 4, roll out 11am from City Hall!</strong>
                    {' '}<strong>2,500 Bikes. 15 Miles. 6 Wards, finishing at the Jersey City Jazz Festival.</strong>
                    {' '}<strong>Free registration coming soon, <a href={"#subscribe"}>subscribe for updates</a></strong>.
                </p>
            </section>
            <section className="block block-block block-block-14 block-odd clearfix">
                <h2 className="block-title">Cool Swag!</h2>
                <p></p>
                <p>
                    <a href="/support/cool-swag-cool-bikers">
                        <img src="/files/Retro Banner.jpg"></img>
                    </a>
                    <br></br>
                </p>
                <div className="center">
                    <p>
                        <strong>Support Bike JC's important work through a tax deductible donation and receive cool
                            swag!</strong>
                    </p>
                </div>
            </section>
            <section className="block block-block donate block-block-8 block-odd clearfix">
                <h4>Donate to Bike JC</h4>
                <a className="button small radius" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BMJXSWD8HGWXW">
                    Make a Paypal Donation
                </a>
            </section>
        </aside>
    )
}

export function Breadcrumbs({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) {
    return (
        breadcrumbs.length ? (
            <>
                <h2 className="element-invisible">You are here</h2>
                <ul className="breadcrumbs">{
                    breadcrumbs.map(
                        ( { href, text }, idx) => {
                            return (
                                <li key={href} className={idx + 1 == breadcrumbs.length ? "current" : ""}>
                                    <a href={href}>{text}</a>
                                </li>
                            )
                        }
                    )
                }</ul>
            </>
        ) : null
    )
}

export function Main({ breadcrumbs, sectionMenu, children }: {
    sectionMenu?: SectionMenu
    breadcrumbs?: Breadcrumb[]
    children: ReactNode
}) {
    return (
        <main className="row l-main" role="main">
            <div className="large-8 main columns">
                <a id="main-content"></a>
                <Breadcrumbs breadcrumbs={breadcrumbs || []} />
                {children}
            </div>
            <Aside sectionMenu={sectionMenu} />
        </main>
    )
}

export function Triptych() {
    return (
        <section className="l-triptych row">
            <div className="triptych-first large-4 columns">
                <section className="block block-block promo-box first-box block-block-2">
                    <h4 id={"subscribe"}>Subscribe to Our Mailing List + Monthly Newsletter</h4>
                    {/*Begin Mailchimp Signup Form*/}
                    <div id="mc_embed_signup">
                        <form action={action} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate={true}>
                            <input type="email" placeholder="email address" name="EMAIL" className="email" id="mce-EMAIL" />
                            <div hidden={true}><input type="hidden" name="tags" value="4204057" /> {/* free wheeler */} </div>
                            {/*real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                            <div style={{ position: "absolute", left: "-5000px", }} aria-hidden="true">
                                <input type="text" name={`b_${mc_u}_${mc_id}`} tabIndex={-1} />
                            </div>
                            <div className="clear">
                                <input type="submit" value="Subscribe" readOnly={true} name="subscribe" id="mc-embedded-subscribe" className="button" />
                            </div>
                        </form>
                    </div>
                </section>
            </div>
            <div className="triptych-middle large-4 columns">
                <section className="block block-block promo-box second-box block-block-3">
                    <h4>Follow Bike JC on Twitter</h4>
                    <p>Making Jersey City bike-friendly since 2009</p>
                    <p>Tweeting bike community news since 2010</p>
                    <p><a href="https://twitter.com/bikejc" target="_blank">Tweet @bikejc!</a></p>
                </section>
            </div>
            <div className="triptych-last large-4 columns">
                <section className="block block-block promo-box third-box block-block-4">
                    <h4>We're Now on Instagram</h4>
                    <p>Check out our official instagram account</p>
                    <p>Show us your photos of biking in JC at #bikejc!</p>
                    <p><a href="https://instagram.com/bikejcgram/" target="_blank">@bikejcgram/</a></p>
                </section>
            </div>
        </section>
    )
}

export function Footer() {
    return (
        <footer className="l-footer panel row" role="contentinfo">
            <div className="footer large-12 columns">
                <section className="block block-menu-block block-menu-block-2">
                    <div className="menu-block-wrapper menu-block-2 menu-name-menu-footer-main parent-mlid-0 menu-level-1">
                        <ul className="menu">
                            <li className="first leaf">
                                <a href="/about">about</a>
                            </li>
                            <li className="leaf">
                                <a href="/projects">projects</a>
                            </li>
                            <li className="leaf">
                                <a href="/events">events</a>
                            </li>
                            <li className="leaf">
                                <a href="/news">news</a>
                            </li>
                            <li className="leaf">
                                <a href="/support">support</a>
                            </li>
                            <li className="leaf">
                                <a href="/resources">resources</a>
                            </li>
                            <li className="last leaf">
                                <a href="/contact-us">contact</a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="block block-block site-info block-block-7">
                    <div className="site-credits">
                        site by <a href="http://www.designsprawl.com/" target="blank">design sprawl</a>
                    </div>
                </section>
            </div>
            <div className="copyright large-12 columns">
                <span> © 2022 bikejc Information likes to be shared.</span>
            </div>
        </footer>
    )
}

export type Page = {
    path: string
    h1?: string
    description?: string
    banner?: string[] | string
    article?: boolean
    ctime?: string
    mtime?: string
    documentClasses?: string[]
    articleClasses?: string[]
    md?: string
    preFooter?: ReactNode
    children?: ReactNode
}

export const Pg = (page: Page) => () => <Page {...page} />

export function Page({ path, h1, description, banner, article, ctime, mtime, documentClasses, articleClasses, md, preFooter, children, }: Page) {
    if (!banner) {
        banner = [ "/files/lincoln-park-banner.jpg" ]
    } else if (typeof banner === "string") {
        banner = [ banner ]
    }

    const root = path == '/'

    article = (article !== false) && !(article === undefined && root)

    const res = lookup(path)
    const { breadcrumbs, name, redirect, sitemap } = res
    // console.log("res:", res)

    if (redirect) {
        return <>
            <Head>
                <meta httpEquiv="refresh" content={`0,url=${redirect}`} />
                <title>Redirecting</title>
            </Head>
            <div>
                This page has moved. Click <a href={redirect}>here</a> to go to the new page.
            </div>
        </>
    }

    if (!(typeof name === 'string')) {
        throw Error(`Sitemap error: name ${name} must be string, got:`, name)
    }

    let sectionMenu: SectionMenu | undefined = undefined
    if (!root) {
        const sectionPath = (typeof sitemap === 'string') ? dirname(path) : path
        const { name: sectionName, sitemap: sectionMap } = lookup(sectionPath)
        if (!(typeof sectionName === 'string')) {
            throw Error(`Sitemap error: sectionPath ${sectionPath} must have string name, got:`, sectionName)
        }
        // console.log("sectionMap:", sectionMap)
        const sectionMenuItems: Breadcrumb[] = []
        Object.entries(sectionMap).forEach(([ piece, map ]) => {
            if (piece == "") return
            const href = `${sectionPath}/${piece}`
            const text = (typeof map === 'string') ? map : (map[""] as any as string)
            // console.log(`piece ${piece} text ${text}`)
            if (typeof text === "string") {
                sectionMenuItems.push({href, text,})
            }
        })
        if (sectionMenuItems.length) {
            sectionMenu = {
                title: sectionName,
                activePath: path,
                breadcrumbs: sectionMenuItems
            }
        }
    }
    // console.log("sectionMenu:", sectionMenu)

    if (!children) {
        if (!md && md != "") {
            throw Error("Pass either `children` or `md`")
        }
        children = Markdown(md)
    } else {
        if (md) {
            throw Error("Pass either `children` or `md`")
        }
    }

    const title = `bikejc | ${name}`
    const wrapArticle = (children: ReactNode) => <>
        <article about={path} className={`node node-page view-mode-full ${(articleClasses || []).join(" ")}`} typeof="sioc:Item foaf:Document">
            <div className="field field-name-body field-type-text-with-summary field-label-hidden field-wrapper body field">
                {children}
            </div>
        </article>
    </>

    // TODO: make required
    const descriptionTag = (name: string) => (description && <meta content={description} name={name}></meta>)

    // TODO: add og thumbs

    return (
        <>
            <meta content="width=device-width, maximum-scale = 1.0" name="viewport"></meta>
            {descriptionTag("description")}
            <link href={path} rel="canonical"></link>
            <link href={path} rel="shortlink"></link>
            <meta content="bikejc" property="og:site_name"></meta>
            <meta content="article" property="og:type"></meta>
            <meta content={path} property="og:url"></meta>
            <meta content={name} property="og:title"></meta>
            {descriptionTag("og:description")}
            {mtime && <meta content={mtime} property="og:updated_time"></meta>}
            <meta content="summary" name="twitter:card"></meta>
            <meta content={path} name="twitter:url"></meta>
            <meta content={name} name="twitter:title"></meta>
            {descriptionTag("twitter:description")}
            {ctime && <meta content={ctime} property="article:published_time"></meta>}
            {mtime && <meta content={mtime} property="article:modified_time"></meta>}
            <Script src="/files/drupal.js"></Script>
            <Script src="/files/foundation-init.js"></Script>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8"/>
                <link rel="icon" href="/misc/favicon.ico" type="image/x-icon"/>
            </Head>
            <div className="skip-link">
                <a href="#main-content" className="element-invisible element-focusable">Skip to main content</a>
            </div>
            <div className={`page ${(documentClasses || []).join(" ")}`} role="document">
                <Header path={path} banners={banner} />
                <Main
                    sectionMenu={sectionMenu}
                    breadcrumbs={root ? [] : breadcrumbs}
                >
                    <h1 className="title" id="page-title">{h1 || name}</h1>
                    {
                        article ? wrapArticle(children) : children
                    }
                </Main>
                {preFooter}
                <Footer />
            </div>
        </>
    )
}
