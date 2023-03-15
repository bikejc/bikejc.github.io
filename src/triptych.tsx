import {action, mc_id, mc_u} from "./mc";
import React from "react";
import A from "next-utils/a";

export default function Triptych() {
    return (
        <section className="l-triptych row">
            <div className="triptych-first large-4 columns">
                <section className="block block-block promo-box first-box block-block-2">
                    <h4 id={"subscribe"}>Subscribe to Our Mailing List + Monthly Newsletter</h4>
                    {/*Begin Mailchimp Signup Form*/}
                    <div id="mc_embed_signup">
                        <form action={action} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate={true}>
                            <input type="email" placeholder="email address" name="EMAIL" className="email" id="mce-EMAIL" />
                            <div hidden={true}><input type="hidden" name="tags" value="4204057" /> {/* free wheeler */} </div>
                            {/*real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                            <div style={{ position: "absolute", left: "-5000px", }} aria-hidden="true">
                                <input type="text" name={`b_${mc_u}_${mc_id}`} tabIndex={-1} />
                            </div>
                            <div className="clear">
                                <input type="submit" value="Subscribe" readOnly={true} name="subscribe" id="mc-embedded-subscribe" className="button" />
                            </div>
                        </form>
                    </div>
                </section>
            </div>
            <div className="triptych-middle large-4 columns">
                <section className="block block-block promo-box second-box block-block-3">
                    <h4>Follow Bike JC on Twitter</h4>
                    <p>Making Jersey City bike-friendly since 2009</p>
                    <p>Tweeting bike community news since 2010</p>
                    <p><A href="https://twitter.com/bikejc">Tweet @bikejc!H</A></p>
                </section>
            </div>
            <div className="triptych-last large-4 columns">
                <section className="block block-block promo-box third-box block-block-4">
                    <h4>Follow us on Instagram</h4>
                    <p>Check out our official instagram account</p>
                    <p>Show us your photos of biking in JC at #bikejc!</p>
                    <p><A href="https://instagram.com/bikejcgram/">@bikejcgram</A></p>
                </section>
            </div>
        </section>
    )
}
