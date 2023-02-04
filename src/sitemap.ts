import {Breadcrumb} from "./breadcrumbs";

type Entry = Breadcrumb | string
type Sitemap = { [k: string]: Sitemap | Entry }

export const Sitemap: Sitemap = {
    "": {
        "": "Home",
        "about": {
            "": "About",
            "history": "History",
            "founding": "Founding",
            "board-members": "Board Members",
            "non-profit-information": "Non Profit Information",
        },
        "projects": {
            "": "Projects",
            "bike-lanes": "Bike Lanes",
            "bike-share": "Bike Share",
            "bike-racks": "Bike Racks",
            "revised-zoning": "Revised Zoning",
            "gsv": "Grand Street Vision",
        },
        "events": {
            "": "Events",
            "jersey-city-ward-tour": {
                "": "Jersey City Ward Tour",
            },
            "bike-jcast": {
                "": "Bike JCAST",
                "bike-jcast-2017": "Bike JCAST 2017",
            },
            "calendar": "Calendar",
        },
        "news": {
            "": "News",
            "articles": {
                "": "Articles and Press Releases",
                "citi-bike-jc-rebalancing": "Citi Bike JC Rebalancing",
                "2016-ward-tour-press-release": "2016 Ward Tour Press Release",
                "grand-street-vision-protected-bike-lane-petition": "Grand Street Vision - Protected Bike Lane Petition",
                "job-posting-contract-grant-writer": "Job Posting: Contract Grant Writer",
                "design-bike-jcs-7th-annual-ward-tour-poster": "Design Bike JC's 7th Annual Ward Tour Poster",
                "jersey-citys-first-permanent-bike-lane": "Jersey City's First Permanent Bike Lane",
                "installation-jersey-citys-new-bike-racks-underway": "New Bike Rack Installation Underway",
                "bike-jc-awarded-jersey-city-green-award": "Bike JC Awarded 'Jersey City Green Award'",
                "footbridge-liberty-state-park-arrives": "Footbridge to Liberty State Park Arrives",
            },
            "media-coverage": "Media Coverage",
        },
        "support": {
            "": "Support",
            "sponsors": "Sponsors",
            "volunteer": "Volunteer",
            "donate": "Donate",
            "cool-swag-cool-bikers": "Cool Swag for Cool Bikers!",
        },
        "resources": {
            "": "Resources",
            // "citi-bike-usage-jersey-city-2018": "Citi Bike Usage 2018",
            "ctbk.dev": { name: "Citi Bike Dashboard", redirect: "https://ctbk.dev/?r=jh", },
            "bike-maps": { name: "Bike Maps", redirect: "https://bikejc.github.io/maps", },
            "rules-road": "Rules of the Road",
            "national-bike-registry": "National Bike Registry",
            // "speed-hump-requests": "Speed Hump Requests",
            // "bike-racks-businesses": "Bike Racks for Businesses",
            "useful-links": "Useful Links",
        },
        "contact-us": { "": "Contact" },
        "ward-tour": {
            "": "Jersey City Ward Tour",
            "2022": {
                "": "2022 Jersey City Ward Tour",
                "registration": { name: "Registration (closed)", redirect: "https://www.eventbrite.com/e/jersey-city-ward-tour-2022-tickets-324066169637" },
                "volunteer": "Volunteer for the Ward Tour",
                "route": "Ward Tour Route",
                "finish-line-festival": "Finish Line Festival",
                "sponsors": "Ward Tour Sponsors",
                "faqs": "Ward Tour FAQs",
            }
        }
    }
}

export function lookup(path: string) {
    const root = path == '/'
    const pieces = root ? [""] : path.split('/')

    const { breadcrumbs, name, redirect, sitemap } =
        pieces.reduce<{
            path: string,
            breadcrumbs: Breadcrumb[],
            name?: string,
            redirect?: string,
            sitemap: Sitemap,
        }>(
            ({ path, breadcrumbs, name, sitemap, }, piece) => {
                const sep = (path && path[path.length - 1] == '/') ? "" : "/"
                const newPath = `${path}${sep}${piece}`
                const newSitemap = (sitemap as any)[piece]
                let newName: string | undefined
                let redirect: string | undefined
                if (typeof newSitemap === 'string') {
                    newName = newSitemap
                } else {
                    if (newSitemap === undefined) {
                        throw Error(`Sitemap error: no object at: ${JSON.stringify(newSitemap)}, path ${path}`)
                    }
                    newName = newSitemap[""] as any
                    if (newName === undefined) {
                        throw Error(`Sitemap error: no name at: ${JSON.stringify(newSitemap)}`)
                    }
                    else if (typeof newName !== "string") {
                        redirect = (newName && newName["redirect"])
                        newName = undefined
                        if (!redirect) {
                            throw Error("Sitemap entry should either be string (page title) or type { redirect: string }")
                        }
                    }
                }
                return {
                    path: newPath,
                    breadcrumbs: newName ? breadcrumbs.concat([{ href: newPath, text: newName }]) : breadcrumbs,
                    name: newName,
                    redirect,
                    sitemap: newSitemap,
                }
            }, {
                path: "",
                breadcrumbs: [],
                name: "",
                sitemap: Sitemap,
            }
        )

    return { breadcrumbs, name, redirect, sitemap, }
}
