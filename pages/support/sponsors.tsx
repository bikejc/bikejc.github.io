import { Page } from "../../src/page"
import MD from "../../src/md"
import {ReactNode} from "react";
import A from "next-utils/a";

type Sponsor = {
    href: string
    src: string
    alt: string
    label?: ReactNode
    doubleWidth?: boolean
    children?: ReactNode
}

export function SponsorsList2023() {
    const aluminums: Sponsor[] = [
        { href: "https://modcup.com/", src: "/img/wt23/sponsors/ModCup_Logo.png", alt: "ModCup Coffee", },
        { href: "https://www.4wall.com/", src: "/img/wt23/sponsors/4Wall Flat_PantoneBlue-01.png", alt: "4Wall Entertainment", },
        { href: "https://silvermanbuilding.com/", src: "/img/wt23/sponsors/silverman.png", alt: "SILVERMAN / NJ Beer Co.", label: <><A href={"https://silvermanbuilding.com"}><strong>SILVERMAN</strong></A> / <A href={"https://www.instagram.com/njbeerco/"}><strong>NJ Beer Co.</strong></A></> },
        { href: "https://riverviewjazz.org/", src: "/img/wt23/sponsors/RVJ_Stacked_Logo_Blue_RGB.png", alt: "Riverview Jazz", },
        { href: "https://visithudson.org/", src: "/img/wt23/sponsors/hudson-home-logo-01.png", alt: "Hudson County Cultural & Heritage Affairs", },
        { href: "https://twitter.com/bicyclesonly", src: "/img/wt23/sponsors/vaccaro-01.png", alt: "Vaccaro Law", },
        { href: "https://citibikenyc.com/", src: "/img/wt23/sponsors/Citi_Bike_logo_padded.png", alt: "Citi Bike", },
        { href: "https://twitter.com/solomonforjc", src: "/img/wt23/sponsors/solomon-sq.png", alt: "James Solomon Civic Association", },
        { href: "https://www.radpowerbikes.com/", src: "/img/wt23/sponsors/rad-square.png", alt: "Rad Power Bikes", },
        { href: "https://letsshareameal.org/", src: "/img/wt23/sponsors/Lets Share A Meal logo.jpeg", alt: "Let's Share A Meal", },
    ]
    const steels: Sponsor[] = [
        { href: "https://www.chocopainbakery.com/", src: "/img/wt23/sponsors/choc-o-pain-sq2.png", alt: "Choc O Pain", },
        { href: "https://www.ckokickboxing.com/", src: "/img/wt23/sponsors/cko-sq.jpg", alt: "CKO Kickboxing", },
        { href: "https://www.grovestreetbicycles.com/", src: "/img/wt23/sponsors/grove-sq.png", alt: "Grove Street Bicycles", },
        { href: "https://hudsontma.org/", src: "/img/wt23/sponsors/hudson-tma.png", alt: "Hudson TMA", },
        { href: "https://www.veolianorthamerica.com/", src: "/img/wt23/sponsors/veolia-sq.png", alt: "Veolia", },
        { href: "https://www.facebook.com/jerseycyclesllc/", src: "/img/wt23/sponsors/jersey cycles.jpeg", alt: "Jersey Cycles", },
    ]
    return <div>
        <div>
            <div className={"col-12"}>
                <img style={{ marginBottom: "1em" }} src={"/img/wt23/sponsors/epa3.png"} alt={"Exchange Place Alliance"} />
                {MD(`The 2023 Ward Tour is presented by the [Exchange Place Alliance](https://www.exchangeplacealliance.com/). The Exchange Place Alliance elevates Downtown Jersey City through capital improvements, repairs and maintenance, landscaping, cleaning, and programming. We thank the E.P.A. for their support of the Ward Tour, and Bike JC's mission.`)}
            </div>
        </div>
        <hr/>
        <div>
            <p>We are deeply grateful to our other sponsors and community partners for their support:</p>
            {
                aluminums.map(({ href, src, alt, label }) =>
                    <div key={alt} style={{ display: "inline-block", width: "50%", padding: "0 0.5em" }} className={"col-6"}>
                        <A href={href}><img style={{ marginBottom: "1em", }} src={src} alt={alt} /></A>
                        <p>{ label || <A href={href}><strong>{alt}</strong></A> }</p>
                    </div>
                )
            }
        </div>
        <div>{
            steels.map(({ href, src, alt, label }) =>
                <div key={alt} style={{ display: "inline-block", width: "33.333333333%", padding: "0 0.5em" }}className={"col-4"}>
                    <A href={href}><img style={{ marginBottom: "1em", }} src={src} alt={alt} /></A>
                    <p>{ label || <A href={href}><strong>{alt}</strong></A> }</p>
                </div>
            )
        }</div>
    </div>
}
export default function Home() {
    return (
        <Page path={"/support/sponsors"} documentClasses={["section-support"]}>
            <div className="field field-name-body field-type-text-with-summary field-label-hidden field-wrapper body field">
                {MD(`### We are grateful for our 2023 Bike JC Ward Tour sponsors, they are instrumental to the work we do.`)}
                {MD(`To find out ways your business can partner with Bike JC and help support our mission, please [contact us](mailto:hello@bikejc.org).`)}
            </div>
            <hr/>
            <SponsorsList2023 />
        </Page>
    )
}
