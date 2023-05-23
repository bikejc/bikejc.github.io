import { Page } from "../../../src/page";
import Markdown from "../../../src/md";
import {ReactNode} from "react";
import css from "./sponsors.module.css";

type Sponsor = {
    href: string
    src: string
    alt: string
    doubleWidth?: boolean
    children?: ReactNode
}

function Sponsor({ href, src, alt, doubleWidth, children }: Sponsor) {
    return (
        <li style={doubleWidth ? { maxWidth: 560, maxHeight: 560, } : {}}>
            <div className="views-field views-field-field-sponsor-logo">
                <div className="field-content">
                    <a href={href} target="_blank" rel="noreferrer">
                        <img className={css.sponsorLogo} alt={alt} src={src} />
                    </a>
                </div>
                {children}
            </div>
        </li>
    )
}

function Sponsors({ title, sponsors, tier }: {
    title?: string
    sponsors: Sponsor[]
    tier: string
}) {
    const id = `${tier}-sponsors`
    return (
        <section className="block block-views block-views-sponsor-logos-all-block-3">
            {title && <a href={`#${id}`}><h2 id={id} className="block-title">{title}</h2></a>}
            <div className="view view-sponsor-logos-all view-id-sponsor_logos_all view-display-id-block_3 sponsors">
                <div className="view-content">
                    <div className={`item-list sponsors sponsors-${tier}`}>
                        <ul>{
                            sponsors.map(sponsor => <Sponsor key={sponsor.alt} {...sponsor} />)
                        }</ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function SponsorsList2022() {
    return <>
        <Sponsors
            title={`"Carbon Fiber" Sponsors`}
            tier={"carbon"}
            sponsors={[
                { href: "https://www.grovestreetbicycles.com/", src: "/files/Grove_Logo_Final_50p.jpg", alt: "Grove Street Bicycles", doubleWidth: true, }
            ]}
        />
        <Sponsors
            title={`"Titanium" Sponsors`}
            tier={"titanium"}
            sponsors={[
                { href: "https://citibikenyc.com/homepage", src: "/files/Citi_Bike_logo_padded.png", alt: "Citi Bike logo", },
                { href: "https://www.vaccaroandwhite.com/", src: "/files/vaccaro_280.png", alt: "Vaccaro & White logo", },
                { href: "https://www.cityofjerseycity.com/", src: "/files/city-of-jersey-city.png", alt: "City of Jersey City", },
                { href: "https://jerseycityculture.org", src: "/files/cultural-affairs.jpg", alt: "Jersey City Office of Cultural Affairs", },
                // { href: "", src: "", alt: "", },
            ]}
        />
        <Sponsors
            title={`"Steel" Sponsors`}
            tier={"steel"}
            sponsors={[
                { href: "https://www.ooneepod.com/", src: "/files/oonee-square.png", alt: "Oonee Pod", },
                { href: "https://www.hudsontma.org/", src: "/files/hudson-tma.png", alt: "Hudson TMA", },
                { href: "https://www.roadid.com/", src: "/files/roadid-square.png", alt: "RoadID", },
                { href: "https://silvermanbuilding.com/", src: "/files/silverman_square.png", alt: "Silverman", },
                { href: "https://www.jcbicycleco.com/", src: "/files/JCBC_square_negated.png", alt: "Jersey City Bicycle Co", },
                { href: "https://www.facebook.com/jerseycyclesllc/", src: "/files/JerseyCyclesLogo_square.jpg", alt: "Jersey Cycles", },
                { href: "https://www.mysuezwater.com/", src: "/files/suez-vertical_square.png", alt: "Suez Water", },
                { href: "https://davidsankey.net/", src: "/files/davidsankey_square.png", alt: "David Sankey", },
                { href: "https://riverviewjazz.org/jersey-city-jazz-festival", src: "/files/riverview-jazz_bg_square.png", alt: "Jersey City Jazz Festival", },
                { href: "https://letsshareameal.org/", src: "/files/lets-share-a-meal_25p.jpg", alt: "Let's Share A Meal", },
            ]}
        />
    </>
}

export default function Home() {
    return (
        <Page path={"/ward-tour/2022/sponsors"} documentClasses={["section-support"]}>
            {Markdown(`
### We'd like to thank our 2022 Ward Tour Sponsors.
This event would not be possible without their support.            
`)}
            <SponsorsList2022 />
        </Page>
    )
}
