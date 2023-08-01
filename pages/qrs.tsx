import {Page} from "../src/page"
import {Fragment, useEffect, useMemo, useState} from "react"
import css from "./qrs.module.css"
import {loadSync} from "next-utils/load";
import A from "next-utils/a"

const QRs = [
    "ward-tour",
    "ward-tour/register",
    "wt/reg",
    "wt/register",
    "wt/palm",
    'bbsu',
]

export type Redirects = { [path: string]: string }
export type QR = {
    url: string
    fullUrl: string
    pngPath: string
    name: string
    svgPath: string
    path: string
    redirect?: string
}

export function getStaticProps() {
    const redirects = loadSync<Redirects>("redirects.json")
    return { props: { redirects } }
}

export type Props = { redirects: Redirects }

const Home = ({ redirects }: Props) => {
    const domain = 'bikejc.org'
    const qrs: QR[] = QRs.map(name => {
            const path = `/${name}`
            const url = `${domain}/${name}`
            const protocol = 'https'
            const fullUrl = `${protocol}://${url}`
            const pngPath = `/qr/bikejc.org/${name}.png`
            const svgPath = `/qr/bikejc.org/${name}.svg`
            const qr: QR = { name, path, url, fullUrl, pngPath, svgPath }
            const redirect = redirects[path]
            if (redirect) {
                qr.redirect = redirect
            }
            return qr
        })
    return (
        <Page
            path={"/qrs"}
            banner={{ src: "/files/bike-gathering-page-header.jpg", alt: "Ward Tour participants resting in Lincoln Park " }}
        >
            <ul>{
                qrs.map(({ url, name, }) =>
                    <li key={name}><a href={`#${name}`}>{url}</a></li>
                )
            }</ul>
            {
                qrs.map(({ url, fullUrl, name, pngPath, svgPath, redirect }) => {
                    return <Fragment key={pngPath}>
                        <h3><a id={name} href={`#${name}`}>{url}</a></h3>
                        <p className={css.qrPng}><A href={fullUrl}><img src={pngPath} alt={`QR code: ${url}`}/></A>
                        </p>
                        <p>(<a href={svgPath}>SVG</a>)</p>
                        { redirect && <p>Redirects to <A href={redirect}>{redirect}</A></p>}
                    </Fragment>
                })
            }
        </Page>
    )
}
export default Home
