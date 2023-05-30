import {Breadcrumb} from "./breadcrumbs";
import {routes} from "./bike-bus/routes";
import {Fragment, ReactNode} from "react";
import {regfox, wt23vol} from "./blurbs";
import Dot from "./dot";

export type Entry = Breadcrumb | string
export type Child0 = Entry | Sitemap0
export type Children0 = [ string, Child0 ][]
export type Child = Entry | Sitemap
export type Children = Map<string, Child>

export type SitemapBase = {
    title: string
    node?: ReactNode
    header?: boolean
}
export type Sitemap0 = SitemapBase & {
    children?: Children0
}
export type Sitemap = SitemapBase & {
    children?: Children
}

export const Sitemap0: Sitemap0 = {
    title: "Home",
    children: [
        [ "about", {
            title: "About",
            children: [
                [ "history", "History", ],
                [ "founding", "Founding", ],
                [ "board-members", "Board Members", ],
                [ "non-profit-information", "Non Profit Information", ],
            ]
        } ],
        [ "projects", {
            title: "Projects",
            children: [
                [ "bike-bus", { node: "Bike Bus", href: "/bike-bus" } ],
                [ "bike-lanes", "Bike Lanes" ],
                [ "bike-share", "Bike Share" ],
                [ "bike-racks", "Bike Racks" ],
                [ "gsv", "Grand Street Vision" ],
            ]
        } ],
        [ "events", {
            title: "Events",
            children: [
                [ "jersey-city-ward-tour", { node: "WARD TOUR", href: "/ward-tour" } ],
                [ "bike-jcast", {
                    title: "Bike JCAST",
                    children: [
                        [ "bike-jcast-2017", "Bike JCAST 2017" ],
                    ]
                } ],
                [ "calendar", "Calendar" ],
            ]
        } ],
        [ "news", {
            title: "News",
            children: [
                [ "articles", {
                    title: "Articles and Press Releases",
                    children: [
                        [ "citi-bike-jc-rebalancing", "Citi Bike JC Rebalancing" ],
                        [ "2016-ward-tour-press-release", "2016 Ward Tour Press Release" ],
                        [ "grand-street-vision-protected-bike-lane-petition", "Grand Street Vision - Protected Bike Lane Petition" ],
                        [ "job-posting-contract-grant-writer", "Job Posting: Contract Grant Writer" ],
                        [ "design-bike-jcs-7th-annual-ward-tour-poster", "Design Bike JC's 7th Annual Ward Tour Poster" ],
                        [ "jersey-citys-first-permanent-bike-lane", "Jersey City's First Permanent Bike Lane" ],
                        [ "installation-jersey-citys-new-bike-racks-underway", "New Bike Rack Installation Underway" ],
                        [ "bike-jc-awarded-jersey-city-green-award", "Bike JC Awarded 'Jersey City Green Award'" ],
                        [ "footbridge-liberty-state-park-arrives", "Footbridge to Liberty State Park Arrives" ],
                    ],
                } ],
                [ "media-coverage", "Media Coverage" ],
            ]
        } ],
        [ "support", {
            title: "Support",
            children: [
                [ "sponsors", "Sponsors" ],
                [ "volunteer", "Volunteer" ],
                [ "donate", "Donate" ],
                [ "cool-swag-cool-bikers", "Cool Swag for Cool Bikers!" ],
            ]
        }],
        [ "resources", {
            title: "Resources",
            children: [
                [ "ctbk.dev", { node: "Citi Bike Dashboard", href: "https://ctbk.dev/?r=jh" } ],
                [ "bike-maps", { node: "Bike Maps", href: "https://bikejc.github.io/maps" } ],
                [ "rules-road", "Rules of the Road" ],
                [ "national-bike-registry", "National Bike Registry" ],
                [ "useful-links", "Useful Links" ],
            ]
        }],
        [ "bike-bus", {
            title: "Bike Bus", header: false,
            children: routes.map(({ color, title, summary, }) => [
                `${title.split(" ")[0].toLowerCase()}-line`,
                {
                    title: `${title} (${summary})`,
                    node: <Fragment key={title}>
                        <Dot color={color} style={{ border: "0px solid black" }} />
                        {title} <span style={{ fontWeight: "normal" }}>({summary})</span>
                    </Fragment>,
                },
            ])
        }],
        [ "contact-us", { title: "Contact", children: [] } ],
        [ "thankyou", { title: "Thank you!", header: false, } ],
        [ "qrs", { title: "QR Codes", header: false, children: [] } ],
        [ "ward-tour", {
            title: "Jersey City Ward Tour",
            header: false,
            children: [
                [ "register", { node: "Register", href: regfox } ],
                [ "volunteer", { node: "Volunteer", href: wt23vol } ],
                [ "bib-pickup", { node: "Bib Pickup (Friday/Saturday)", href: "#bib-pickup" } ],
                [ "sponsors", { node: "Sponsors", href: "#sponsors" } ],
                [ "route", { node: "Route", href: "#route" } ],
                [ "faq", { title: "FAQs", children: [
                        [ "register", { node: "Register", href: regfox } ],
                        [ "volunteer", { node: "Volunteer", href: wt23vol } ],
                        [ "bib-pickup", { node: "Bib Pickup (Friday/Saturday)", href: "#bib-pickup" } ],
                        [ "sponsors", { node: "Sponsors", href: "/ward-tour#sponsors" } ],
                        [ "route", { node: "Route", href: "/ward-tour#route" } ],
                    ], } ],
                [ "2022", {
                    title: "2022 Ward Tour",
                    children: [
                        [ "registration", { node: "Registration (closed)", href: "https://www.eventbrite.com/e/jersey-city-ward-tour-2022-tickets-324066169637" } ],
                        [ "volunteer", "Volunteer for the Ward Tour" ],
                        [ "route", "Ward Tour Route" ],
                        [ "finish-line-festival", "Finish Line Festival" ],
                        [ "sponsors", "Ward Tour Sponsors" ],
                        [ "faqs", "Ward Tour FAQs" ],
                    ]
                } ]
            ]
        }]
    ]
}

function normalizeChild0(child0: Child0): Child {
    if (typeof child0 === 'string') return child0
    if ('href' in child0) return child0
    return normalizeSitemap(child0)
}

function normalizeSitemap({ children, ...rest }: Sitemap0): Sitemap {

    if (children) {
        return {
            ...rest,
            children: new Map(
                children.map(([ name, child0 ]) => ([ name, normalizeChild0(child0) ]))
            )
        }
    } else
        return rest
}

export const Sitemap: Sitemap = normalizeSitemap(Sitemap0)

export type SitePath = {
    sitemap: Sitemap
    breadcrumbs: Breadcrumb[]
    parent?: Sitemap
}

export function lookup(path: string): SitePath {
    const root = path == '/' || path == ''
    if (!root && !path.startsWith('/')) {
        throw new Error(`Expected path ${path} to start with /`)
    }
    const pieces = root ? [] : path.substring(1).split('/')

    let sitemap: Sitemap = Sitemap
    let href = ""
    const breadcrumbs: Breadcrumb[] = [{ node: "Home", href: "/" }]
    let parent: Sitemap | undefined
    for (const name of pieces) {
        href = `${href}/${name}`
        if (!(typeof sitemap === 'object' && 'title' in sitemap)) {
            throw new Error(`No child ${name} found for ${href}`)
        }
        parent = sitemap
        const siblings = parent.children
        let child: Child | undefined = siblings?.get(name)
        if (!child) {
            throw new Error(`No child ${name} found for ${href}`)
        } else if (typeof child === 'object' && 'title' in child) {
            sitemap = child
        } else if (typeof child === 'string') {
            sitemap = { title: child }
        } else {
            throw new Error(`Found leaf breadcrumb ${child} at ${href}`)
        }
        breadcrumbs.push({ node: sitemap.node || sitemap.title, href })
    }

    return { sitemap, breadcrumbs, parent }
}
