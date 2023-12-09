import {Page} from "../../src/page"

import Script from "next/script"
import {action, mc_id, mc_u} from "../../src/mc"
import React from "react"
import MD from "../../src/md"
import {wt23vol} from "../../src/blurbs";

const {entries} = Object;

export default function Home() {
    return (
        <Page path={"/support/volunteer"}>
            <div className="field field-name-body field-type-text-with-summary field-label-hidden field-wrapper body field">
                {MD(`
Volunteer with Bike JC and help make Jersey City a better place for bicyclists of all kinds and in every neighborhood.

We'd love to meet you!
`)}
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
                                <strong>Roles</strong>
                                <ul>{
                                    entries({
                                        'Ward Tour': 64,
                                        'Marshal': 1,
                                        'Outreach': 2,
                                        'Fundraising': 4,
                                        'Bike Valet': 8,
                                        'Survey Canvassing': 16,
                                        'Other': 32,
                                    }).map(([ name, flag ], idx) => {
                                        const groupId = 383869
                                        const group = `group[${groupId}]`
                                        idx -= 1  // Ward Tour" was prepended later, keep others stable (though I don't think it matters)
                                        const id = `mce-${group}-${groupId}-${idx}`
                                        return <li key={flag}>
                                            <input type="checkbox" value={flag} name={`${group}[${flag}]`} id={id}/>
                                            <label htmlFor={id}>{name}</label>
                                        </li>
                                    })
                                }</ul>
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
