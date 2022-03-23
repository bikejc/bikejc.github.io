
export type Sitemap = { [k: string]: Sitemap } | string

export type Breadcrumb = {
    href: string
    text: string
}

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
                "ward-tour-registration": {
                    "": "Ward Tour Registration",
                    "15-mile-route-registration-form": "15 Mile Route Registration Form",
                    "register-25-mile-ride": "25 Mile Route Registration Form",
                },
                "volunteer": "Volunteer for the Ward Tour",
                "ward-tour-route": "Ward Tour Route",
                "finish-line-festival": "Finish Line Festival",
                "ward-tour-sponsors": "Ward Tour Sponsors",
                "ward-tour-faqs": "Ward Tour FAQs",
            },
            "bike-jcast": {
                "": "Bike JCast",
                "bike-jcast-2017": "Bike JCast 2017",
            },
            "neighborhood-cleanup": "Neighborhood Cleanup",
            "calendar": "Calendar",
        },
        "news": {
            "": "News",
            "articles": {
                "": "Articles and Press Releases",
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
            "citi-bike-usage-jersey-city-2018": "Citi Bike Usage 2018",
            "rules-road": "Rules of the Road",
            "bike-maps": "Bike Maps",
            "national-bike-registry": "National Bike Registry",
            "speed-hump-requests": "Speed Hump Requests",
            "bike-racks-businesses": "Bike Racks for Businesses",
            "useful-links": "Useful Links",
        },
        "contact-us": "Contact",
    }
}

export function lookup(path: string) {
    const root = path == '/'
    const pieces = root ? [""] : path.split('/')

    const { breadcrumbs, name, sitemap } =
        pieces.reduce<{
            path: string,
            breadcrumbs: Breadcrumb[],
            name: string,
            sitemap: Sitemap,
        }>(
            ({ path, breadcrumbs, name, sitemap, }, piece) => {
                const sep = (path && path[path.length - 1] == '/') ? "" : "/"
                const newPath = `${path}${sep}${piece}`
                const newSitemap = (sitemap as any)[piece]
                const newName: string = (typeof newSitemap === 'string') ? newSitemap : (newSitemap[""] as any as string)
                return {
                    path: newPath,
                    breadcrumbs: breadcrumbs.concat([{ href: newPath, text: newName }]),
                    name: newName,
                    sitemap: newSitemap,
                }
            }, {
                path: "",
                breadcrumbs: [],
                name: "",
                sitemap: Sitemap,
            }
        )

    return { breadcrumbs, name, sitemap, }
}
