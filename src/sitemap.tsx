
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
        }
    }
}

export function lookup(path: string) {
    const root = path == '/'
    const pieces = root ? [""] : path.split('/')
    console.log("pieces:", pieces)

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
                console.log("newPath:", newPath, "newName:", newName)
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
