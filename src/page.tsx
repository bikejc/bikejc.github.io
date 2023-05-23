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
import {Img} from "./img";
import {entries, fromEntries} from "next-utils/objs";
import {wt23poster, wt23posterSq} from "./blurbs";

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
    h1?: ReactNode
    description?: string
    ogImg?: string
    ogImgType?: string
    banner?: Img[] | Img
    article?: boolean
    ctime?: string
    mtime?: string
    documentClasses?: string[]
    articleClasses?: string[]
    md?: string
    preFooter?: ReactNode
    children?: ReactNode
}

export function Page(
    {
        path, h1,
        description,
        ogImg = wt23posterSq, ogImgType = "image/png",
        banner, article,
        ctime, mtime,
        documentClasses, articleClasses,
        md,
        preFooter=<Triptych/>,
        children,
    }: Page) {
    if (!banner) {
        banner = [{ src: "/files/lincoln-park-banner.jpg", alt: "Ward Tour participants in Lincoln Park" } ]
    } else if ('src' in banner) {
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

    const { sitemap, breadcrumbs, parent } = res
    // console.log("res:", res)

    let sectionMenu: SectionMenu | undefined = undefined
    if (!root) {
        // console.log("sectionMap:", sectionMap)
        const sectionMenuItems: Breadcrumb[] = []
        let children = sitemap?.children
        let menuPath = path
        let title = sitemap.node || sitemap.title
        if (!children?.size) {
            children = parent?.children
            menuPath = path.substring(0, path.lastIndexOf('/'))
            if (!parent) {
                throw new Error(`No parent or children: ${path}`)
            }
            title = parent.node || parent.title
        }
        if (children) {
            console.log("children:", children)
            Array.from(children).forEach(([piece, child]) => {
                //if (piece == "") return
                let breadcrumb: Breadcrumb
                if (!child) {
                    throw new Error(`path ${path}, falsey child, ${piece}: ${child}`)
                }
                if (typeof child === 'object' && 'href' in child) {
                    // if (child.has('href')) {  // Breadcrumb
                    breadcrumb = child
                    if (breadcrumb.href.startsWith("http")) {
                        breadcrumb.target = "_blank"
                    }
                } else if (typeof child === 'object') {
                    breadcrumb = { node: child.node || child.title, href: `${menuPath}/${piece}`  }
                } else {
                    breadcrumb = { node: child, href: `${menuPath}/${piece}` }
                }
                console.log("push:", breadcrumb)
                sectionMenuItems.push(breadcrumb)
            })
            if (sectionMenuItems.length) {
                sectionMenu = {
                    title,
                    activePath: path,
                    breadcrumbs: sectionMenuItems,
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
        <article className={`node node-page view-mode-full ${(articleClasses || []).join(" ")}`}>
            <div className="field field-name-body field-type-text-with-summary field-label-hidden field-wrapper body field">
                {children}
            </div>
        </article>
    </>

    // TODO: make required
    const descriptionTag = (name: string) => (description && <meta content={description} name={name} />)

    // TODO: add og thumbs

    return (
        <>
            <meta content="width=device-width, maximum-scale = 1.0" name="viewport" />
            {descriptionTag("description")}
            <link href={path} rel="canonical" />
            <link href={path} rel="shortlink" />
            <meta content="Bike JC" property="og:site_name" />
            <meta content={title} property="og:title" />
            <meta content="website" property="og:type" />
            <meta content={path} property="og:url" />
            {ogImg && <>
                    <meta content={`http://bikejc.org${ogImg}`} property="og:image"/>
                    <meta content={`https://bikejc.org${ogImg}`} property="og:image:secure_url"/>
                    ogImgType && <meta property={"og:image:type"} content={ogImgType} />
                </>
            }
            {descriptionTag("og:description")}
            {mtime && <meta content={mtime} property="og:updated_time" />}
            <meta content="summary" name="twitter:card" />
            <meta content={path} name="twitter:url" />
            <meta content={title} name="twitter:title" />
            {descriptionTag("twitter:description")}
            {ctime && <meta content={ctime} property="article:published_time" />}
            {mtime && <meta content={mtime} property="article:modified_time" />}
            <Script src="/files/drupal.js"></Script>
            <Script src="/files/foundation-init.js"></Script>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8"/>
                <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
            </Head>
            <div className={`page ${(documentClasses || []).join(" ")}`} role="document">
                <Header path={path} banners={banner} />
                <Main sectionMenu={sectionMenu} breadcrumbs={root ? [] : breadcrumbs} >
                    <h1 className="title" id="page-title">{h1 || title}</h1>
                    {article ? wrapArticle(children) : children}
                </Main>
                {preFooter}
                <Footer />
            </div>
        </>
    )
}
