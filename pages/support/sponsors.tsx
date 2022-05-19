import { Page } from "../../src/page";

type Sponsor = {
    href: string
    src: string
    alt: string
    doubleWidth?: boolean
}

const width = 560

function Sponsor({ href, src, alt, doubleWidth }: Sponsor) {
    return (
        <li style={doubleWidth ? { maxWidth: 560, maxHeight: 560, } : {}}>
            <div className="views-field views-field-field-sponsor-logo">
                <div className="field-content">
                    <a href={href} target="_blank" rel="noreferrer">
                        <img alt={alt} src={src} typeof="foaf:Image" />
                    </a>
                </div>
            </div>
        </li>
    )
}

function Sponsors({ title, sponsors, tier }: {
    title: string
    sponsors: Sponsor[]
    tier: string
}) {
    const id = `${tier}-sponsors`
    return (
        <section className="block block-views block-views-sponsor-logos-all-block-3">
            <a href={`#${id}`}><h2 id={id} className="block-title">{title}</h2></a>
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

export function SponsorsList() {
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
        {/*<Sponsors*/}
        {/*    title="Aluminum Sponsors"*/}
        {/*    sponsors={[*/}
        {/*    ]}*/}
        {/*/>*/}
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
                { href: "https://letsshareameal.org/", src: "/files/LSM Logo_25p.jpg", alt: "Let's Share A Meal", },
            ]}
        />
    </>
}

export default function Home() {
    return (
        <Page path={"/support/sponsors"} documentClasses={["section-support"]}>
            <div className="field field-name-body field-type-text-with-summary field-label-hidden field-wrapper body field">
                <h3>We are grateful for our 2022 Bike JC Ward Tour sponsors, they are instrumental to the work we do.</h3>
                <p>To find out ways your business can partner with Bike JC and help support our mission, please contact us.</p>
            </div>
            <SponsorsList />
        </Page>
    )
}
