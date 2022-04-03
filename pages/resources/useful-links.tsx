import { Page } from "../../src/page";
import { Ext } from "../../src/link"
import {ReactNode} from "react";

function Link({ label, href, text, children }: {
    label: string
    href: string
    text?: string
    children?: ReactNode
}) {
    text = text || new URL(href).host
    return (
        <div className={"useful-link"}>
            <p><strong>{label}</strong></p>
            <p><Ext href={href}>{text}</Ext></p>
            {children}
        </div>
    )
}

export default function Home() {
    return (
        <Page path={"/resources/useful-links"}>
            <h4>Websites for some of our friends in biking, bike advocacy, government, and related fields:</h4>
            <Link label="Jersey City government" href="https://cityofjerseycity.com/" />
            <Link label="New Jersey Bike &amp; Walk Coalition" href="https://newjerseybikewalk.org/" />
            <Link label="New Jersey Bicycle &amp; Pedestrian Resource Center" href="https://njbikeped.org/" />
            <Link label="Bicycle Touring Club of North Jersey" href="https://btcnj.com/" />
            <Link label="Hudson County Transportation Management Association" href="https://hudsontma.org/" />
            <Link label="The League of American Bicyclists" href="https://www.bikeleague.org/" />
            <Link label="Bike&amp;Walk Montclair" href="https://bikewalkmontclair.org/" />
            <Link label="Bike And Walk Morristown" href="https://bikewalktown.org/" />
            <Link label="Bike New York" href="https://bikenewyork.org/" />
            <Link label="Boys &amp; Girls Club of Newark Bike Exchange" href="https://bike.bgcn.org/" />
            <Link label="East Coast Greenway" href="https://greenway.org/" />
            <Link label="Passaic Pedal" href="https://www.facebook.com/pages/Passaic-Pedal/858036867546238" text="facebook.com/passaicpedal" />
            <Link label="Five Borough Bicycle Club" href="https://www.5bbc.org/" />
            <Link label="Transportation Alternatives" href="https://www.transalt.org/" />

            <h4>Bike Shops in Jersey City:</h4>
            <Link label="Grove Street Bicycles" href="https://grovestreetbicycles.com/">
                <p>365 Grove St.</p>
                <p>(201) 451-2453</p>
            </Link>
            <Link label="Jersey City Bicycle Co." href="https://www.facebook.com/jcbicycleco/" text="facebook.com/jcbicycleco">
                <p>687 Montgomery Street</p>
                <p>(201) 763-6872</p>
            </Link>
            <Link label="Jersey Cycles" href="https://jerseycycles.net/" >
                <p>510 Central Ave.</p>
                <p>(201) 763-7133</p>
            </Link>
            <Link label="The Bike Hub" href="https://www.facebook.com/bikehubcyclery/" text="facebook.com/bikehubcyclery/">
                <p>191 Monticello Avenue</p>
                <p>(201) 369-0900</p>
            </Link>

            <h4>Safety Activism:</h4>
            <Link label="Crash Not Accident Pledge" href="https://www.crashnotaccident.com/" />
        </Page>
    )
}
