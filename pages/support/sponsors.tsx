import { Page } from "../../src/page";

type Sponsor = {
    href: string
    src: string
    alt: string
    doubleWidth?: boolean
}

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

function Sponsors({ title, sponsors }: {
    title: string
    sponsors: Sponsor[]
}) {
    return (
        <section className="block block-views block-views-sponsor-logos-all-block-3">
            <h2 className="block-title">{title}</h2>
            <div className="view view-sponsor-logos-all view-id-sponsor_logos_all view-display-id-block_3 sponsors">
                <div className="view-content">
                    <div className="item-list sponsors">
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
            title="Carbon Fiber Sponsors"
            sponsors={[
                { href: "https://www.grovestreetbicycles.com/", src: "/files/Grove_Logo_Final_50p.jpg", alt: "Grove Street Bicycles", doubleWidth: true, }
            ]}
        />
        <Sponsors
            title="Titanium Sponsors"
            sponsors={[
                { href: "https://citibikenyc.com/homepage", src: "/files/Citi_Bike_logo_padded.png", alt: "Citi Bike logo", },
                { href: "https://www.vaccaroandwhite.com/", src: "/files/vaccaro_280.png", alt: "Vaccaro & White logo", },
                { href: "http://www.cityofjerseycity.com/", src: "/files/city-of-jersey-city.png", alt: "City of Jersey City", },
                { href: "http://jerseycityculture.org", src: "/files/cultural-affairs.jpg", alt: "Jersey City Office of Cultural Affairs", },
                // { href: "", src: "", alt: "", },
            ]}
        />
        {/*TODO: silverman, JCBC, JazzFest, */}
        {/*<Sponsors*/}
        {/*    title="Aluminum Sponsors"*/}
        {/*    sponsors={[*/}
        {/*    ]}*/}
        {/*/>*/}
        <Sponsors
            title="Steel Sponsors"
            sponsors={[
                { href: "https://www.ooneepod.com/", src: "/files/oonee-square.png", alt: "Oonee Pod", },
                { href: "http://www.hudsontma.org/", src: "/files/hudson-tma.png", alt: "Hudson TMA", },
                { href: "https://www.roadid.com/", src: "/files/roadid-square.png", alt: "RoadID", },
            ]}
        />
    </>
}

export default function Home() {
    return (
        <Page path={"/support/sponsors"} documentClasses={["section-support"]}>
            <div className="field field-name-body field-type-text-with-summary field-label-hidden field-wrapper body field">
                <h3>We are grateful for our 2019 Bike JC  Ward Tour sponsors, they are instrumental to the work we do.</h3>
                <p>To find out ways your business can partner with Bike JC and help support our mission, please contact us.</p>
            </div>
            <SponsorsList />
        </Page>
    )
}
