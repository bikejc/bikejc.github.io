import { Page } from "../../src/page";

type Sponsor = {
    href: string
    src: string
    alt: string
}

function Sponsor({ href, src, alt, }: Sponsor) {
    return (
        <li>
            <div className="views-field views-field-field-sponsor-logo">
                <div className="field-content">
                    <a href={href} target="_blank" rel="noreferrer">
                        <img alt={alt} height="400"
                             src={src} typeof="foaf:Image" width="400"></img>
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
                { href: "https://www.grovestreetbicycles.com/", src: "/files/grove-street-bicycles-giant.png", alt: "Grove Street Bicycles", }
                // { href: "https://www.citibikejc.com/", src: "/files/citibike-jc.png", alt: "Citibike Jersey City", },
            ]}
        />
        <Sponsors
            title="Titanium Sponsors"
            sponsors={[
                { href: "https://www.lyft.com/", src: "/files/lyft-logo.jpg", alt: "lyft logo", },
                // { href: "https://www.grovestreetbicycles.com/", src: "/files/grove-street-bicycles-giant.png", alt: "Grove Street Bicycles", },
                { href: "http://www.hudsontma.org/", src: "/files/hudson-tma.png", alt: "Hudson TMA", },
                { href: "http://www.cityofjerseycity.com/", src: "/files/city-of-jersey-city.png", alt: "City of Jersey City", },
                { href: "http://jerseycityculture.org", src: "/files/cultural-affairs.jpg", alt: "Jersey City Office of Cultural Affairs", },
                // { href: "https://www.li.me/electric-scooter", src: "/files/lime-logo.jpg", alt: "Lime logo", },
                // { href: "https://www.jump.com/", src: "/files/jump-logo.jpg", alt: "Jump logo", },
                // { href: "", src: "", alt: "", },
            ]}
        />
        {/*<Sponsors*/}
        {/*    title="Aluminum Sponsors"*/}
        {/*    sponsors={[*/}
        {/*        { href: "http://www.rockitdocket.com", src: "/files/rockitdocket-black-and-white_0.gif", alt: "Rock-it Docket", },*/}
        {/*        { href: "http://www.roadid.com", src: "/files/road-id.png", alt: "Road ID", },*/}
        {/*        { href: "https://www.bird.co/", src: "/files/bird-logo.jpg", alt: "Bird Logo", },*/}
        {/*        { href: "http://www.letsshareameal.org/", src: "/files/lets-share-a-meal-logo.jpg", alt: "Let's Share a Meal logo", },*/}
        {/*    ]}*/}
        {/*/>*/}
        {/*<Sponsors*/}
        {/*    title="Steel Sponsors"*/}
        {/*    sponsors={[*/}
        {/*        { href: "http://www.mysuezwater.com/", src: "/files/suez.png", alt: "Suez", },*/}
        {/*    ]}*/}
        {/*/>*/}
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
