import React, {ReactNode} from "react";
import Head from "next/head";
import Script from "next/script";
import {lookup} from "./sitemap";
import Markdown from "./md";
import {Aside} from "./aside";
import {SectionMenu} from "./sectionMenu";
import Header from "./header";
import Footer from "./footer";
import {Breadcrumb, Breadcrumbs} from "./breadcrumbs";
import Triptych from "./triptych";

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

export function Page({ path, h1, description, banner, article, ctime, mtime, documentClasses, articleClasses, md, preFooter=<Triptych/>, children, }: Page) {
    if (!banner) {
        banner = [ "/files/lincoln-park-banner.jpg" ]
    } else if (typeof banner === "string") {
        banner = [ banner ]
    }

    const root = path == '/'
    path = root ? "" : path

    article = (article !== false) && !(article === undefined && root)

    const res = lookup(path)
    // if ('redirect' in res) {
    //     const redirect = res.redirect
    //     return <>
    //         <Head>
    //             <meta httpEquiv="refresh" content={`0,url=${redirect}`} />
    //             <title>Redirecting</title>
    //         </Head>
    //         <div>
    //             This page has moved. Click <a href={redirect}>here</a> to go to the new page.
    //         </div>
    //     </>
    // }

    const { sitemap, breadcrumbs, siblings } = res
    // console.log("res:", res)

    let sectionMenu: SectionMenu | undefined = undefined
    if (!root) {
        // console.log("sectionMap:", sectionMap)
        const sectionMenuItems: Breadcrumb[] = []
        let children = sitemap?.children, menuPath = path
        if (!children) {
            children = siblings
            menuPath = path.substring(0, path.lastIndexOf('/'))
        }
        if (children) {
            Object.entries(children).forEach(([piece, child]) => {
                //if (piece == "") return
                let breadcrumb: Breadcrumb
                if (typeof child === 'string') {
                    breadcrumb = {text: child, href: `${menuPath}/${piece}`}
                } else if ('text' in child) {
                    breadcrumb = {...child}
                    if (breadcrumb.href.startsWith("http")) {
                        breadcrumb.target = "_blank"
                    }
                } else {
                    breadcrumb = {text: child.title, href: `${path}/${piece}`}
                }
                sectionMenuItems.push(breadcrumb)
            })
            if (sectionMenuItems.length) {
                sectionMenu = {
                    title: sitemap.title,
                    activePath: path,
                    breadcrumbs: sectionMenuItems
                }
            }
        }
    }
    console.log("sectionMenu:", sectionMenu)

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

    const title = sitemap.title
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
            <meta content={title} property="og:title"></meta>
            {descriptionTag("og:description")}
            {mtime && <meta content={mtime} property="og:updated_time"></meta>}
            <meta content="summary" name="twitter:card"></meta>
            <meta content={path} name="twitter:url"></meta>
            <meta content={title} name="twitter:title"></meta>
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
                    <h1 className="title" id="page-title">{h1 || title}</h1>
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
