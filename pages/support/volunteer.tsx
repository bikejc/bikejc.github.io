import { Page } from "../../src/page"
import { Ext } from "../../src/link"
import Script from "next/script"

export default function Home() {
    return (
        <Page path={"/support/volunteer"}>
            <div className="field field-name-body field-type-text-with-summary field-label-hidden field-wrapper body field">
                <p>
                    Volunteer with Bike JC and help make Jersey City a better place for bicyclists of all kinds and in every neighborhood.
                </p>
                <p>
                    We&apos;d love to meet you!
                </p>
                {/*Begin MailChimp Signup Form*/}
                <div id="mc_embed_signup">
                    <form action="https://bikejc.us1.list-manage.com/subscribe/post?u=29e08864eb550bdd5c90dd362&id=8e5413c196" className="validate" id="mc-embedded-subscribe-form" method="post" name="mc-embedded-subscribe-form" noValidate={true} target="_blank">
                        <div id="mc_embed_signup_scroll">
                            <h2>
                                Subscribe to our mailing list
                            </h2>
                            <div className="indicates-required">
                                <span className="asterisk">*</span>
                                indicates required
                            </div>
                            <div className="mc-field-group">
                                <label htmlFor="mce-EMAIL">
                                    Email Address
                                    <span className="asterisk">*</span>
                                </label>
                                <input aria-required="true" className="required email" id="mce-EMAIL" name="EMAIL" style={{ "backgroundImage": 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==")', "backgroundRepeat": "no-repeat", "backgroundAttachment": "scroll", "backgroundSize": "16px 18px", "backgroundPosition": "98% 50%" }} type="email" />
                            </div>
                            <div className="mc-field-group">
                                <label htmlFor="mce-FNAME">
                                    First Name
                                </label>
                                <input className="" id="mce-FNAME" name="FNAME" type="text"/>
                            </div>
                            <div className="mc-field-group">
                                <label htmlFor="mce-LNAME">
                                    Last Name
                                </label>
                                <input className="" id="mce-LNAME" name="LNAME" type="text"/>
                            </div>
                            <div className="mc-field-group input-group">
                                <strong>
                                    Roles
                                </strong>
                                <ul>
                                    <li>
                                        <input className="hidden-field" id="mce-group[8701]-8701-0" name="group[8701][1]" type="checkbox" value="1"/>
                                        <span className="custom checkbox" />
                                        <label htmlFor="mce-group[8701]-8701-0">Marshal</label>
                                    </li>
                                    <li>
                                        <input className="hidden-field" id="mce-group[8701]-8701-1" name="group[8701][2]" type="checkbox" value="2"/>
                                        <span className="custom checkbox" />
                                        <label htmlFor="mce-group[8701]-8701-1">Outreach</label>
                                    </li>
                                    <li>
                                        <input className="hidden-field" id="mce-group[8701]-8701-2" name="group[8701][4]" type="checkbox" value="4"/>
                                        <span className="custom checkbox" />
                                        <label htmlFor="mce-group[8701]-8701-2">Fundraising</label>
                                    </li>
                                    <li>
                                        <input className="hidden-field" id="mce-group[8701]-8701-3" name="group[8701][8]" type="checkbox" value="8"/>
                                        <span className="custom checkbox" />
                                        <label htmlFor="mce-group[8701]-8701-3">Bike Valet</label>
                                    </li>
                                    <li>
                                        <input className="hidden-field" id="mce-group[8701]-8701-4" name="group[8701][16]" type="checkbox" value="16"/>
                                        <span className="custom checkbox" />
                                        <label htmlFor="mce-group[8701]-8701-4">
                                            Survey Canvassing
                                        </label>
                                    </li>
                                    <li>
                                        <input className="hidden-field" id="mce-group[8701]-8701-5" name="group[8701][32]" type="checkbox" value="32"/>
                                        <span className="custom checkbox" />
                                        <label htmlFor="mce-group[8701]-8701-5">
                                            Other
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="mc-field-group input-group">
                                <strong>
                                    Email Format
                                </strong>
                                <ul>
                                    <li>
                                        <input id="mce-EMAILTYPE-0" name="EMAILTYPE" type="radio" value="html"/>
                                        <label htmlFor="mce-EMAILTYPE-0">
                                            html
                                        </label>
                                    </li>
                                    <li>
                                        <input id="mce-EMAILTYPE-1" name="EMAILTYPE" type="radio" value="text"/>
                                        <label htmlFor="mce-EMAILTYPE-1">
                                            text
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="clear" id="mce-responses">
                                <div className="response" id="mce-error-response" style={{ "display": "none" }}>
                                </div>
                                <div className="response" id="mce-success-response" style={{ "display": "none" }}>
                                </div>
                            </div>
                            {/*real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                            <div aria-hidden="true" style={{ "position": "absolute", "left": "-5000px" }}>
                                <input name="b_29e08864eb550bdd5c90dd362_8e5413c196" tabIndex={-1} type="text"/>
                            </div>
                            <div className="clear">
                                <input className="button" id="mc-embedded-subscribe" name="subscribe" type="submit" value="Subscribe"/>
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
