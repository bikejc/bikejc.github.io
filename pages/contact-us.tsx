import {Page} from "../src/page";
import Triptych from "../src/triptych"

export default function Home() {
    return (
        <Page path={"/contact-us"} preFooter={<Triptych />}>
            <form acceptCharset="UTF-8" action="/contact-us" className="webform-client-form webform-client-form-10" id="webform-client-form-10" method="post">
                <div>
                    <div className="form-item webform-component webform-component-textfield webform-component--name">
                        <label htmlFor="edit-submitted-name">
                            Name
                            <span className="form-required" title="This field is required.">
                                *
                            </span>
                        </label>
                        <input className="form-text required" id="edit-submitted-name" maxLength={128} name="submitted[name]" required={true} size={60} style={{ backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==")', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%' }} type="text" />
                    </div>
                    <div className="form-item webform-component webform-component-email webform-component--email-address">
                        <label htmlFor="edit-submitted-email-address">
                            Email Address
                            <span className="form-required" title="This field is required.">
                 *
                </span>
                        </label>
                        <input className="email form-text form-email required" id="edit-submitted-email-address" name="submitted[email_address]" required={true} size={60} type="email"/>
                    </div>
                    <div className="form-item webform-component webform-component-textfield webform-component--phone-number">
                        <label htmlFor="edit-submitted-phone-number">
                            Phone Number
                        </label>
                        <input className="form-text" id="edit-submitted-phone-number" maxLength={128} name="submitted[phone_number]" size={60} type="text" />
                    </div>
                    <div className="form-item webform-component webform-component-textarea webform-component--message">
                        <label htmlFor="edit-submitted-message">
                            Message
                            <span className="form-required" title="This field is required.">
                 *
                </span>
                        </label>
                        <div className="form-textarea-wrapper resizable textarea-processed resizable-textarea">
                            <textarea className="form-textarea required" cols={60} id="edit-submitted-message" name="submitted[message]" required={true} rows={5}/>
                            <div className="grippie">
                            </div>
                        </div>
                    </div>
                    <input name="details[sid]" type="hidden"/>
                    <input readOnly={true} name="details[page_num]" type="hidden" value="1"/>
                    <input readOnly={true} name="details[page_count]" type="hidden" value="1"/>
                    <input readOnly={true} name="details[finished]" type="hidden" value="0"/>
                    <input readOnly={true} name="form_build_id" type="hidden" value="form-qVl_jLsRhqvC1y8MszoNSZVXBY4Z7dZeJkfu7Ngoy5k"/>
                    <input readOnly={true} name="form_id" type="hidden" value="webform_client_form_10"/>
                    <input readOnly={true} name="honeypot_time" type="hidden" value="1647831765|QtjENZy21LkeBP6KuO-P61PC9cf1A_0oo8C5gmS3bpQ"/>
                    <div className="url-textfield">
                        <div className="form-item form-type-textfield form-item-url">
                            <label htmlFor="edit-url">
                                Leave this field blank
                            </label>
                            <input autoComplete="off" className="form-text" id="edit-url" maxLength={128} name="url" size={20} type="text" readOnly={true} value=""/>
                        </div>
                    </div>
                    <button className="webform-submit button-primary secondary button radius form-submit" name="op" type="submit" value="Send Message">
                        Send Message
                    </button>
                </div>
            </form>
        </Page>
    )
}
