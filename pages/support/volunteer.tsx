import { Page } from "../../src/page"

import Script from "next/script"
import {action, mc_id, mc_u} from "../../src/mc";
import React from "react";

export default function Home() {
    return (
        <Page path={"/support/volunteer"}>
            <div>
                <h3><a href={"/events/jersey-city-ward-tour/volunteer"}>Register to volunteer for the 2022 Jersey City Ward Tour!</a></h3>
            </div>
            <hr/>
            <div className="field field-name-body field-type-text-with-summary field-label-hidden field-wrapper body field">

                <p>Volunteer with Bike JC and help make Jersey City a better place for bicyclists of all kinds and in every neighborhood.</p>
                <p>{"We'd love to meet you!"}</p>

                {/*Begin MailChimp Signup Form*/}
                <div id="mc_embed_signup">
                    <form action={action} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                        <div id="mc_embed_signup_scroll">
                            <h2>Subscribe</h2>
                            <div className="indicates-required"><span className="asterisk">*</span> indicates required
                            </div>
                            <div className="mc-field-group">
                                <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                                <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
                            </div>
                            <div className="mc-field-group">
                                <label htmlFor="mce-FNAME">First Name </label>
                                <input type="text" name="FNAME" id="mce-FNAME" />
                            </div>
                            <div className="mc-field-group">
                                <label htmlFor="mce-LNAME">Last Name </label>
                                <input type="text" name="LNAME" id="mce-LNAME" />
                            </div>
                            <div className="mc-field-group input-group">
                                <strong>Roles </strong>
                                <ul>
                                    <li>
                                        <input type="checkbox" value="1" name="group[383869][1]" id="mce-group[383869]-383869-0" />
                                        <label htmlFor="mce-group[383869]-383869-0">Marshal</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" value="2" name="group[383869][2]" id="mce-group[383869]-383869-1" />
                                        <label htmlFor="mce-group[383869]-383869-1">Outreach</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" value="4" name="group[383869][4]" id="mce-group[383869]-383869-2" />
                                        <label htmlFor="mce-group[383869]-383869-2">Fundraising</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" value="8" name="group[383869][8]" id="mce-group[383869]-383869-3" />
                                        <label htmlFor="mce-group[383869]-383869-3">Bike Valet</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" value="16" name="group[383869][16]" id="mce-group[383869]-383869-4" />
                                        <label htmlFor="mce-group[383869]-383869-4">Survey Canvassing</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" value="32" name="group[383869][32]" id="mce-group[383869]-383869-5" />
                                        <label htmlFor="mce-group[383869]-383869-5">Other</label>
                                    </li>
                                </ul>
                            </div>
                            <div hidden={true}><input type="hidden" name="tags" value="4424169" /> {/* www-volunteer-signup */} </div>
                            <div id="mce-responses" className="clear">
                                <div className="response" id="mce-error-response" style={{ display: "none", }}></div>
                                <div className="response" id="mce-success-response" style={{ display: "none", }}></div>
                            </div>
                            {/*real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                            <div style={{ position: "absolute", left: "-5000px", }} aria-hidden="true">
                                <input type="text" name={`b_${mc_u}_${mc_id}`} tabIndex={-1} />
                            </div>
                            <div className="clear">
                                <input type="submit" value="Subscribe" readOnly={true} name="subscribe" id="mc-embedded-subscribe" className="button" />
                            </div>
                        </div>
                    </form>
                </div>
                <Script src="/files/mc-validate.js" type="text/javascript" />
                <Script src="/files/mc-init.js" type="text/javascript" />
            </div>
        </Page>
    )
}
