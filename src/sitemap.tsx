import {Breadcrumb} from "./breadcrumbs";
import {entries, fromEntries, values} from "next-utils/objs";
import {routeDisplays, routes} from "./bike-bus/routes";
import {Fragment, isValidElement, ReactNode} from "react";
import css from "./bike-bus/route-page.module.css";

export type Entry = Breadcrumb | string
export type Child = Entry | Sitemap
export type Children = { [name: string]: Child }
export type Sitemap = {
    title: string
    node?: ReactNode
    header?: boolean
    children?: Children
}

export const Sitemap: Sitemap = {
    title: "Home",
    children: {
        "about": {
            title: "About",
            children: {
                "history": "History",
                "founding": "Founding",
                "board-members": "Board Members",
                "non-profit-information": "Non Profit Information",
            }
        },
        "projects": {
            title: "Projects",
            children: {
                "bike-bus": { node: "Bike Bus", href: "/bike-bus" },
                "bike-lanes": "Bike Lanes",
                "bike-share": "Bike Share",
                "bike-racks": "Bike Racks",
                // "revised-zoning": "Revised Zoning",
                "gsv": "Grand Street Vision",
            }
        },
        "events": {
            title: "Events",
            children: {
                "bike-jcast": {
                    title: "Bike JCAST",
                    children: {
                        "bike-jcast-2017": "Bike JCAST 2017",
                    }
                },
                "calendar": "Calendar",
                "jersey-city-ward-tour": { node: "Jersey City Ward Tour", href: "/ward-tour" },
            }
        },
        "news": {
            title: "News",
            children: {
                "articles": {
                    title: "Articles and Press Releases",
                    children: {
                        "citi-bike-jc-rebalancing": "Citi Bike JC Rebalancing",
                        "2016-ward-tour-press-release": "2016 Ward Tour Press Release",
                        "grand-street-vision-protected-bike-lane-petition": "Grand Street Vision - Protected Bike Lane Petition",
                        "job-posting-contract-grant-writer": "Job Posting: Contract Grant Writer",
                        "design-bike-jcs-7th-annual-ward-tour-poster": "Design Bike JC's 7th Annual Ward Tour Poster",
                        "jersey-citys-first-permanent-bike-lane": "Jersey City's First Permanent Bike Lane",
                        "installation-jersey-citys-new-bike-racks-underway": "New Bike Rack Installation Underway",
                        "bike-jc-awarded-jersey-city-green-award": "Bike JC Awarded 'Jersey City Green Award'",
                        "footbridge-liberty-state-park-arrives": "Footbridge to Liberty State Park Arrives",
                    }
                },
                "media-coverage": "Media Coverage",
            }
        },
        "support": {
            title: "Support",
            children: {
                "sponsors": "Sponsors",
                "volunteer": "Volunteer",
                "donate": "Donate",
                "cool-swag-cool-bikers": "Cool Swag for Cool Bikers!",
            }
        },
        "resources": {
            title: "Resources",
            children: {
                // "citi-bike-usage-jersey-city-2018": "Citi Bike Usage 2018",
                "ctbk.dev": { node: "Citi Bike Dashboard", href: "https://ctbk.dev/?r=jh" },
                "bike-maps": { node: "Bike Maps", href: "https://bikejc.github.io/maps" },
                "rules-road": "Rules of the Road",
                "national-bike-registry": "National Bike Registry",
                // "speed-hump-requests": "Speed Hump Requests",
                // "bike-racks-businesses": "Bike Racks for Businesses",
                "useful-links": "Useful Links",
            }
        },
        "bike-bus": {
            title: "Bike Bus", header: false, children: fromEntries(
                entries(routeDisplays).map(([ routeName, { title, summary, } ]) => [
                    `${title.split(" ")[0].toLowerCase()}-line`,
                    {
                        title: `${title} (${summary})`,
                        node: <Fragment key={title}>
                            <span className={css.dot} style={{ backgroundColor: routes[routeName].color, marginRight: "0.3em", marginTop: "-0.2em", }} />
                            {title} <span style={{ fontWeight: "normal" }}>({summary})</span>
                        </Fragment>,
                    },
                ])
                // [ "Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "Gold", "Silver", "Teal", ].map(name => [ `${name.toLowerCase()}-line`, `${name} line` ])
            ),
        },
        "contact-us": { title: "Contact", children: {} },
        "qrs": { title: "QR Codes", header: false, children: {} },
        "ward-tour": {
            title: "Jersey City Ward Tour",
            header: false,
            children: {
                "faq": { title: "FAQs", children: {}, },
                "2022": {
                    title: "2022 Ward Tour",
                    children: {
                        "registration": {
                            node: "Registration (closed)",
                            href: "https://www.eventbrite.com/e/jersey-city-ward-tour-2022-tickets-324066169637"
                        },
                        "volunteer": "Volunteer for the Ward Tour",
                        "route": "Ward Tour Route",
                        "finish-line-festival": "Finish Line Festival",
                        "sponsors": "Ward Tour Sponsors",
                        "faqs": "Ward Tour FAQs",
                    }
                }
            }
        }
    }
}

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
        let child: Child | undefined = siblings && siblings[name]
        if (!child) {
            throw new Error(`No child ${name} found for ${href}`)
        } else if (typeof child === 'object' && 'title' in child) {
            sitemap = child
        } else {
            throw new Error(`Found leaf breadcrump ${child} at ${href}`)
        }
        breadcrumbs.push({ node: sitemap.node, href })
    }

    return { sitemap, breadcrumbs, parent }
}
