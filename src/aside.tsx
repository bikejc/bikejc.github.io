import React from "react";
import {SectionMenu} from "./sectionMenu";
import A from "next-utils/a";
import Link from "next/link";

export function Aside({ sectionMenu }: { sectionMenu?: SectionMenu }) {
    // console.log("sectionMenu:", sectionMenu)
    return (
        <aside className="large-4 sidebar-second columns sidebar columns" role="complementary">
            <section className="block block-block social-media block-block-6 block-odd clearfix">
                <h2 className="block-title">Follow Us</h2>
                <div>
                    <A className="twitter" href="https://www.twitter.com/bikejc" />
                </div>
                <div>
                    <A className="facebook" href="https://www.facebook.com/bikeJC" />
                </div>
                <div>
                    <A className="instagram" href="https://www.instagram.com/bikejcgram" />
                </div>
            </section>
            <section className="block block-menu-block block-menu-block-1 block-even clearfix">{
                sectionMenu
                    ? <SectionMenu {...sectionMenu} />
                    : null
            }</section>
            <section className="block block-block block-block-13 block-even clearfix">
                <h2 className="block-title">Ward Tour 2023</h2>
                <p>
                    <strong>The Jersey City Ward Tour is back! Sunday, June 4, roll out 11am from City Hall!</strong>
                    {' '}<strong>3,000 Bikes. 15 Miles. 6 Wards, finishing at the Jersey City Jazz Festival.</strong>
                    {' '}<strong>Free registration coming soon, <a href={"#subscribe"}>subscribe for updates</a></strong>.
                </p>
            </section>
            <section className="block block-block block-block-14 block-odd clearfix">
                <h2 className="block-title">Cool Swag!</h2>
                <p></p>
                <p>
                    <Link href="/support/cool-swag-cool-bikers">
                        <img src="/files/Retro Banner.jpg"  alt={"Support Bike JC's important work through a tax deductible donation and receive cool swag!"} />
                    </Link>
                    <br></br>
                </p>
                <div className="center">
                    <p>
                        <strong>{`Support Bike JC's important work through a tax deductible donation and receive cool swag!`}</strong>
                    </p>
                </div>
            </section>
            <section className="block block-block donate block-block-8 block-odd clearfix">
                <h4>Donate to Bike JC</h4>
                <a className="button small radius" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BMJXSWD8HGWXW">
                    Make a Paypal Donation
                </a>
            </section>
        </aside>
    )
}
