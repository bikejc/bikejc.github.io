import { Page } from "../../src/page";

export default function Home() {
    return (
        <Page path={"/support/cool-swag-cool-bikers"}>
            <div className="field field-name-body field-type-text-with-summary field-label-hidden field-wrapper body field">
                <h2>
                    Donate to BikeJC and Earn Cool Swag
                </h2>
                <p>
                    We&apos;ll thank you for your donation by sending you something that lets you show off your support for bicycling in Jersey City.
                </p>
                <div style={{ "backgroundColor": "#a59d46", "width": "100%", "height": "50px", "textAlign": "right", "paddingTop": "10px", "paddingBottom": "10px", "paddingRight": "20px" }}>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal">
                        <input name="cmd" type="hidden" value="_s-xclick"/>
                        <input name="encrypted" type="hidden" value="-----BEGIN PKCS7-----MIIG3QYJKoZIhvcNAQcEoIIGzjCCBsoCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYCGR2MTciqMPlbR0p8QbbG5aKf94tHpGjpKetc/ECJGXrz3+VRxsY2y5gCxOvZ3Y2K7cT6E1FqsZSXWjg6dErFnSFJyirtRttjo7IqQf27etIES24E19IS7vAALNfOrOo02V5/ghTQraWFeXb/VZuyexpNdozAZUwe72SIdgmIHRzELMAkGBSsOAwIaBQAwWwYJKoZIhvcNAQcBMBQGCCqGSIb3DQMHBAjs5Qg3d9bdo4A4Wiu6b31tcDwpdQ7skBg7EhYVdoO5/bj9dVZTo+ifCipN+oRFVI6I5FCYCW86cOxU0VYgSh16EYugggOHMIIDgzCCAuygAwIBAgIBADANBgkqhkiG9w0BAQUFADCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20wHhcNMDQwMjEzMTAxMzE1WhcNMzUwMjEzMTAxMzE1WjCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20wgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAMFHTt38RMxLXJyO2SmS+Ndl72T7oKJ4u4uw+6awntALWh03PewmIJuzbALScsTS4sZoS1fKciBGoh11gIfHzylvkdNe/hJl66/RGqrj5rFb08sAABNTzDTiqqNpJeBsYs/c2aiGozptX2RlnBktH+SUNpAajW724Nv2Wvhif6sFAgMBAAGjge4wgeswHQYDVR0OBBYEFJaffLvGbxe9WT9S1wob7BDWZJRrMIG7BgNVHSMEgbMwgbCAFJaffLvGbxe9WT9S1wob7BDWZJRroYGUpIGRMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbYIBADAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBBQUAA4GBAIFfOlaagFrl71+jq6OKidbWFSE+Q4FqROvdgIONth+8kSK//Y/4ihuE4Ymvzn5ceE3S/iBSQQMjyvb+s2TWbQYDwcp129OPIbD9epdr4tJOUNiSojw7BHwYRiPh58S1xGlFgHFXwrEBb3dgNbMUa+u4qectsMAXpVHnD9wIyfmHMYIBmjCCAZYCAQEwgZQwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tAgEAMAkGBSsOAwIaBQCgXTAYBgkqhkiG9w0BCQMxCwYJKoZIhvcNAQcBMBwGCSqGSIb3DQEJBTEPFw0xODEwMjQyMDA3MzBaMCMGCSqGSIb3DQEJBDEWBBTcY8aPeAeXCgAScBMHzMHtdqibaDANBgkqhkiG9w0BAQEFAASBgBIWAtaGQOe8rBp8ZLRToSi+WiANTc2BC2oiR8uwZLilsyijJKVd29pGRaiEhrOSe2gp39uRKsuUtQ9b6Hubp18148GTox2pLvdi0X7VRpYDaWDMphOlQP7+CNZcXnTgU8MCG3JjNJvwOJ2Mtt+ds8ZyP7RafYUCqILzudCn7c0G-----END PKCS7-----&lt;br /&gt;
            "/>
                        <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="/files/btn_viewcart_LG.gif" type="image"/>
                        <img alt="" height={1} src="/files/pixel.gif" width={1}/>
                    </form>
                </div>
                <div style={{ "float": "left", "textAlign": "center", "border": "1px solid #cccccc", "marginRight": "4px", "marginBottom": "8px" }}>
                    <p>
                        <img alt="" src="/files/wings-tote.jpg" style={{ "height": "350px", "width": "280px" }}/>
                    </p>
                    <p>
                        <strong>
                            Wings Tote Bag
                            <br/>
                            $15 Donation
                        </strong>
                    </p>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal">
                        <input name="cmd" type="hidden" value="_s-xclick"/>
                        <input name="hosted_button_id" type="hidden" value="CS2FNLKR44FWA"/>
                        <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="/files/btn_cart_LG.gif" type="image"/>
                        <img alt="" height="1" src="/files/pixel.gif" width="1"/>
                    </form>
                </div>
                <div style={{ "float": "left", "textAlign": "center", "border": "1px solid #cccccc", "marginRight": "4px", "marginBottom": "8px" }}>
                    <p>
                        <img alt="" src="/files/retro-tote.jpg" style={{ "height": "350px", "width": "280px" }} />
                    </p>
                    <p>
                        <strong>
                            BikeJC Retro Tote Bag
                            <br/>
                            $15 Donation
                        </strong>
                    </p>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal">
                        <input name="cmd" type="hidden" value="_s-xclick"/>
                        <input name="hosted_button_id" type="hidden" value="5J7GWWHTBFJTG"/>
                        <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="/files/btn_cart_LG.gif" type="image"/>
                        <img alt="" height="1" src="/files/pixel.gif" width="1"/>
                    </form>
                </div>
                <div style={{ "clear": "both" }}>
                </div>
                <div style={{ "float": "left", "textAlign": "center", "border": "1px solid #cccccc", "marginRight": "4px", "marginBottom": "8px" }}>
                    <p>
                        <img alt="" src="/files/BlackWingsMens.jpg" style={{ "width": "280px", "height": "350px" }}/>
                    </p>
                    <p>
                        <strong>
                            Wings T-Shirt - Standard Cut:
                            <br/>
                            $20 Donation
                        </strong>
                    </p>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal">
                        <input name="cmd" type="hidden" value="_s-xclick"/>
                        <input name="hosted_button_id" type="hidden" value="2J5FBDE4LYA9E"/>
                        <table style={{ "width": "90%", "margin": "auto" }}>
                            <tbody>
                            <tr>
                                <td>
                                    <input name="on0" type="hidden" value="Size"/>
                                    Select Size
                                    <br/>
                                    <select name="os0">
                                        <option value="Small">
                                            Small
                                        </option>
                                        <option value="Medium">
                                            Medium
                                        </option>
                                        <option value="Large">
                                            Large
                                        </option>
                                        <option value="XL">
                                            XL
                                        </option>
                                        <option value="XXL">
                                            XXL
                                        </option>
                                    </select>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <p>
                            <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="/files/btn_cart_LG.gif" type="image"/>
                            <img alt="" height="1" src="/files/pixel.gif" width="1"/>
                        </p>
                    </form>
                </div>
                <div style={{ "float": "left", "textAlign": "center", "border": "1px solid #cccccc", "marginRight": "4px", "marginBottom": "8px" }}>
                    <p>
                        <img alt="" src="/files/WingsWomens.jpg" style={{ "width": "280px", "height": "350px" }}/>
                    </p>
                    <p>
                        <strong>
                            Wings T-Shirt - Women&apos;s Cut:
                            <br/>
                            $20 Donation
                        </strong>
                    </p>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal">
                        <input name="cmd" type="hidden" value="_s-xclick"/>
                        <input name="hosted_button_id" type="hidden" value="BXMTJ7A5PQ27N"/>
                        <table style={{ "width": "90%", "margin": "auto" }}>
                            <tbody>
                            <tr>
                                <td>
                                    <input name="on0" type="hidden" value="Size"/>
                                    Select Size
                                    <br/>
                                    <select name="os0">
                                        <option value="Small">
                                            Small
                                        </option>
                                        <option value="Medium">
                                            Medium
                                        </option>
                                        <option value="Large">
                                            Large
                                        </option>
                                    </select>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <p>
                            <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="/files/btn_cart_LG.gif" type="image"/>
                            <img alt="" height="1" src="/files/pixel.gif" width="1"/>
                        </p>
                    </form>
                </div>
                <div style={{ "clear": "both" }}>
                </div>
                <div style={{ "float": "left", "textAlign": "center", "border": "1px solid #cccccc", "marginRight": "4px", "marginBottom": "8px" }}>
                    <p>
                        <img alt="" src="/files/GreenRetroMens.jpg" style={{ "width": "280px", "height": "350px" }}/>
                    </p>
                    <p>
                        <strong>
                            Green Retro T-Shirt - Standard Cut:
                            <br/>
                            $20 Donation
                        </strong>
                    </p>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal">
                        <input name="cmd" type="hidden" value="_s-xclick"/>
                        <input name="hosted_button_id" type="hidden" value="5HAGBYPET732A"/>
                        <table style={{ "width": "90%", "margin": "auto" }}>
                            <tbody>
                            <tr>
                                <td>
                                    <input name="on0" type="hidden" value="Size"/>
                                    Select Size
                                    <br/>
                                    <select name="os0">
                                        <option value="Small">
                                            Small
                                        </option>
                                        <option value="Large">
                                            Large
                                        </option>
                                        <option value="XXL">
                                            XXL
                                        </option>
                                    </select>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <p>
                            <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="/files/btn_cart_LG.gif" type="image"/>
                            <img alt="" height="1" src="/files/pixel.gif" width="1"/>
                        </p>
                    </form>
                </div>
                <div style={{ "float": "left", "textAlign": "center", "border": "1px solid #cccccc", "marginRight": "4px", "marginBottom": "8px" }}>
                    <p>
                        <img alt="" src="/files/GreenRetroWomens.jpg" style={{ "width": "280px", "height": "350px" }}/>
                    </p>
                    <p>
                        <strong>
                            Green Retro T-Shirt - Women&apos;s Cut:
                            <br/>
                            $20 Donation
                        </strong>
                    </p>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal">
                        <input name="cmd" type="hidden" value="_s-xclick"/>
                        <input name="hosted_button_id" type="hidden" value="RBZM7ZXWK98PS"/>
                        <table style={{ "width": "90%", "margin": "auto" }}>
                            <tbody>
                            <tr>
                                <td>
                                    <input name="on0" type="hidden" value="Size"/>
                                    Select Size
                                    <br/>
                                    <select name="os0">
                                        <option value="Small">
                                            Small
                                        </option>
                                        <option value="Medium">
                                            Medium
                                        </option>
                                        <option value="Large">
                                            Large
                                        </option>
                                    </select>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <p>
                            <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="/files/btn_cart_LG.gif" type="image"/>
                            <img alt="" height="1" src="/files/pixel.gif" width="1"/>
                        </p>
                    </form>
                </div>
                <div style={{ "clear": "both" }}>
                </div>
                <div style={{ "float": "left", "textAlign": "center", "border": "1px solid #cccccc", "marginRight": "4px", "marginBottom": "8px" }}>
                    <p>
                        <img alt="" src="/files/BlackRetroMens.jpg" style={{ "width": "280px", "height": "350px" }}/>
                    </p>
                    <p>
                        <strong>
                            Black Retro T-Shirt - Standard Cut:
                            <br/>
                            $20 Donation
                        </strong>
                    </p>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal">
                        <input name="cmd" type="hidden" value="_s-xclick"/>
                        <input name="hosted_button_id" type="hidden" value="T4KMR59Z6Z96U"/>
                        <table style={{ "width": "90%", "margin": "auto" }}>
                            <tbody>
                            <tr>
                                <td>
                                    <input name="on0" type="hidden" value="Size"/>
                                    Select Size
                                    <br/>
                                    <select name="os0">
                                        <option value="Medium">
                                            Medium
                                        </option>
                                        <option value="XL">
                                            XL
                                        </option>
                                        <option value="XXL">
                                            XXL
                                        </option>
                                    </select>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <p>
                            <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="/files/btn_cart_LG.gif" type="image"/>
                            <img alt="" height="1" src="/files/pixel.gif" width="1"/>
                        </p>
                    </form>
                </div>
                <div style={{ "float": "left", "textAlign": "center", "border": "1px solid #cccccc", "marginRight": "4px", "marginBottom": "8px" }}>
                    <p>
                        <img alt="" src="/files/BlackRetroWomens.jpg" style={{ "width": "280px", "height": "350px" }}/>
                    </p>
                    <p>
                        <strong>
                            Black Retro T-Shirt - Women&apos;s Cut:
                            <br/>
                            $20 Donation
                        </strong>
                    </p>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal">
                        <input name="cmd" type="hidden" value="_s-xclick"/>
                        <input name="hosted_button_id" type="hidden" value="5C6TYB6QLGEDN"/>
                        <table style={{ "width": "90%", "margin": "auto" }}>
                            <tbody>
                            <tr>
                                <td>
                                    <input name="on0" type="hidden" value="Size"/>
                                    Select Size
                                    <br/>
                                    <select name="os0">
                                        <option value="Small">
                                            Small
                                        </option>
                                        <option value="Large">
                                            Large
                                        </option>
                                    </select>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <p>
                            <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="/files/btn_cart_LG.gif" type="image"/>
                            <img alt="" height="1" src="/files/pixel.gif" width="1"/>
                        </p>
                    </form>
                </div>
                <div style={{ "clear": "both" }}>
                </div>
                <div style={{ "float": "left", "textAlign": "center", "border": "1px solid #cccccc", "marginRight": "4px", "marginBottom": "8px" }}>
                    <p>
                        <img alt="ward tour 10 shirt" src="/files/WardTour10MensShirt.jpg" style={{ "height": "350px", "width": "280px" }}/>
                    </p>
                    <p>
                        <strong>
                            Ward Tour 10 T-Shirt - Standard Cut:
                            <br/>
                            $15 Donation
                        </strong>
                    </p>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal">
                        <input name="cmd" type="hidden" value="_s-xclick"/>
                        <input name="hosted_button_id" type="hidden" value="LRFCWB5WCRW4N"/>
                        <table style={{ "width": "90%", "margin": "auto" }}>
                            <tbody>
                            <tr>
                                <td>
                                    <input name="on0" type="hidden" value="Size"/>
                                    Select Size
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select name="os0">
                                        <option value="Small">
                                            Small
                                        </option>
                                        <option value="Medium">
                                            Medium
                                        </option>
                                        <option value="Large">
                                            Large
                                        </option>
                                        <option value="XL">
                                            XL
                                        </option>
                                        <option value="XXL">
                                            XXL
                                        </option>
                                    </select>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <p>
                            <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="/files/btn_cart_LG.gif" type="image"/>
                            <img alt="" height="1" src="/files/pixel.gif" width="1"/>
                        </p>
                    </form>
                </div>
                <div style={{ "float": "left", "textAlign": "center", "border": "1px solid #cccccc", "marginRight": "4px", "marginBottom": "8px" }}>
                    <p>
                        <img alt="womens shirt" src="/files/WardTour10WomensShirt.jpg" style={{ "width": "280px", "height": "350px" }}/>
                    </p>
                    <p>
                        <strong>
                            Ward Tour 10 T-Shirt - Women&apos;s Cut:
                            <br/>
                            $15 Donation
                        </strong>
                    </p>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal">
                        <input name="cmd" type="hidden" value="_s-xclick"/>
                        <input name="hosted_button_id" type="hidden" value="C8SHVGE6AGKYQ"/>
                        <table style={{ "width": "90%", "margin": "auto" }}>
                            <tbody>
                            <tr>
                                <td>
                                    <input name="on0" type="hidden" value="Size"/>
                                    Select Size
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select name="os0">
                                        <option value="Small">
                                            Small
                                        </option>
                                        <option value="Medium">
                                            Medium
                                        </option>
                                        <option value="Large">
                                            Large
                                        </option>
                                        <option value="Extra Large">
                                            Extra Large
                                        </option>
                                    </select>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <p>
                            <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="/files/btn_cart_LG.gif" type="image"/>
                            <img alt="" height="1" src="/files/pixel.gif" width="1"/>
                        </p>
                    </form>
                </div>
                <div style={{ "clear": "both" }}>
                </div>
                <div style={{ "float": "left", "textAlign": "center", "border": "1px solid #cccccc", "marginRight": "4px", "marginBottom": "8px" }}>
                    <p>
                        <img alt="" src="/files/WardTour9Mens.jpg" style={{ "width": "280px", "height": "350px" }}/>
                    </p>
                    <p>
                        <strong>
                            Ward Tour 9 T-Shirt - Standard Cut:
                            <br/>
                            $15 Donation
                        </strong>
                    </p>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal">
                        <input name="cmd" type="hidden" value="_s-xclick"/>
                        <input name="hosted_button_id" type="hidden" value="PULBDPCA5QHM8"/>
                        <table style={{ "width": "90%", "margin": "auto" }}>
                            <tbody>
                            <tr>
                                <td>
                                    <input name="on0" type="hidden" value="Size"/>
                                    Select Size
                                    <br/>
                                    <select name="os0">
                                        <option value="Small">
                                            Small
                                        </option>
                                        <option value="XL">
                                            XL
                                        </option>
                                        <option value="XXL">
                                            XXL
                                        </option>
                                    </select>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <p>
                            <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="/files/btn_cart_LG.gif" type="image"/>
                            <img alt="" height="1" src="/files/pixel.gif" width="1"/>
                        </p>
                    </form>
                </div>
                <div style={{ "float": "left", "textAlign": "center", "border": "1px solid #cccccc", "marginRight": "4px", "marginBottom": "8px" }}>
                    <p>
                        <img alt="" src="/files/WardTour9Womens.jpg" style={{ "width": "280px", "height": "350px" }}/>
                    </p>
                    <p>
                        <strong>
                            Ward Tour 9 T-Shirt - Women&apos;s Cut:
                            <br/>
                            $15 Donation
                        </strong>
                    </p>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal">
                        <input name="cmd" type="hidden" value="_s-xclick"/>
                        <input name="hosted_button_id" type="hidden" value="6YTFHWMWHX4NJ"/>
                        <table style={{ "width": "90%", "margin": "auto" }}>
                            <tbody>
                            <tr>
                                <td>
                                    <input name="on0" type="hidden" value="Size"/>
                                    Select Size
                                    <br/>
                                    <select name="os0">
                                        <option value="Small">
                                            Small
                                        </option>
                                        <option value="Large">
                                            Large
                                        </option>
                                    </select>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <p>
                            <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="/files/btn_cart_LG.gif" type="image"/>
                            <img alt="" height="1" src="/files/pixel.gif" width="1"/>
                        </p>
                    </form>
                </div>
                <div style={{ "clear": "both" }}>
                </div>
                <div style={{ "float": "left", "textAlign": "center", "border": "1px solid #cccccc", "marginRight": "4px", "marginBottom": "8px" }}>
                    <p>
                        <img alt="" src="/files/WardTour9TankTop.jpg" style={{ "width": "280px", "height": "350px" }}/>
                    </p>
                    <p>
                        <strong>
                            Ward Tour 9 Tank:
                            <br/>
                            $10 Donation
                        </strong>
                    </p>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal">
                        <input name="cmd" type="hidden" value="_s-xclick"/>
                        <input name="hosted_button_id" type="hidden" value="XVJFYU4996V5C"/>
                        <table style={{ "width": "90%", "margin": "auto" }}>
                            <tbody>
                            <tr>
                                <td>
                                    <input name="on0" type="hidden" value="Size"/>
                                    Select Size
                                    <br/>
                                    <select name="os0">
                                        <option value="Small">
                                            Small
                                        </option>
                                        <option value="Medium">
                                            Medium
                                        </option>
                                        <option value="Large">
                                            Large
                                        </option>
                                    </select>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <p>
                            <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="/files/btn_cart_LG.gif" type="image"/>
                            <img alt="" height="1" src="/files/pixel.gif" width="1"/>
                        </p>
                    </form>
                </div>
                <div style={{ "float": "left", "textAlign": "center", "border": "1px solid #cccccc", "marginRight": "4px", "marginBottom": "8px" }}>
                    <p>
                        <img alt="" src="/files/WardTour8Mens.jpg" style={{ "width": "280px", "height": "350px" }}/>
                    </p>
                    <p>
                        <strong>
                            Ward Tour 8 T-Shirt - Standard Cut:
                            <br/>
                            $10 Donation
                        </strong>
                    </p>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal">
                        <input name="cmd" type="hidden" value="_s-xclick"/>
                        <input name="hosted_button_id" type="hidden" value="EJBR9PEERBFMC"/>
                        <table style={{ "width": "90%", "margin": "auto" }}>
                            <tbody>
                            <tr>
                                <td>
                                    <input name="on0" type="hidden" value="Size"/>
                                    Select Size
                                    <br/>
                                    <select name="os0">
                                        <option value="Large">
                                            Large
                                        </option>
                                    </select>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <p>
                            <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="/files/btn_cart_LG.gif" type="image"/>
                            <img alt="" height="1" src="/files/pixel.gif" width="1"/>
                        </p>
                    </form>
                </div>
                <div style={{ "clear": "both" }}>
                </div>
                <div style={{ "float": "left", "textAlign": "center", "border": "1px solid #cccccc", "marginRight": "4px", "marginBottom": "8px" }}>
                    <p>
                        <img alt="" src="/files/WardTour7Mens.jpg" style={{ "width": "280px", "height": "350px" }}/>
                    </p>
                    <p>
                        <strong>
                            Ward Tour 7 - Standard Cut:
                            <br/>
                            $10 Donation
                        </strong>
                    </p>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal">
                        <input name="cmd" type="hidden" value="_s-xclick"/>
                        <input name="hosted_button_id" type="hidden" value="LCQGTMTX4YQK2"/>
                        <table style={{ "width": "90%", "margin": "auto" }}>
                            <tbody>
                            <tr>
                                <td>
                                    <input name="on0" type="hidden" value="Size"/>
                                    Select Size
                                    <br/>
                                    <select name="os0">
                                        <option value="Small">
                                            Small
                                        </option>
                                    </select>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <p>
                            <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="/files/btn_cart_LG.gif" type="image"/>
                            <img alt="" height="1" src="/files/pixel.gif" width="1"/>
                        </p>
                    </form>
                </div>
                <div style={{ "float": "left", "textAlign": "center", "border": "1px solid #cccccc", "marginRight": "4px", "marginBottom": "8px", "width": "314px" }}>
                    <p>
                        <img alt="" src="/files/WardTour7Womens.jpg" style={{ "width": "280px", "height": "350px" }}/>
                    </p>
                    <p>
                        <strong>
                            Ward Tour 7 - Women&apos;s Cut:
                            <br/>
                            $10 Donation
                        </strong>
                    </p>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal">
                        <input name="cmd" type="hidden" value="_s-xclick"/>
                        <input name="hosted_button_id" type="hidden" value="87JE6SSR7JUQ2"/>
                        <table style={{ "width": "90%", "margin": "auto" }}>
                            <tbody>
                            <tr>
                                <td>
                                    <input name="on0" type="hidden" value="Size"/>
                                    Select Size
                                    <br/>
                                    <select name="os0">
                                        <option value="Small">
                                            Small
                                        </option>
                                    </select>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <p>
                            <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="/files/btn_cart_LG.gif" type="image"/>
                            <img alt="" height="1" src="/files/pixel.gif" width="1"/>
                        </p>
                    </form>
                </div>
                <div style={{ "clear": "both" }}>
                </div>
                <div style={{ "float": "left", "textAlign": "center", "border": "1px solid #cccccc", "marginRight": "4px", "marginBottom": "8px", "width": "314px" }}>
                    <p>
                        <img alt="" src="/files/WardTour9Poster.jpg" style={{ "width": "280px", "height": "415px" }}/>
                    </p>
                    <p>
                        <strong>
                            Ward Tour 9 Poster:
                            <br/>
                            $10 Donation
                        </strong>
                    </p>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal">
                        <input name="cmd" type="hidden" value="_s-xclick"/>
                        <input name="hosted_button_id" type="hidden" value="Q9NLLANTKL8NJ"/>
                        <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="/files/btn_cart_LG.gif" type="image"/>
                        <img alt="" height="1" src="/files/pixel.gif" width="1"/>
                    </form>
                </div>
                <div style={{ "float": "left", "textAlign": "center", "border": "1px solid #cccccc", "marginRight": "4px", "marginBottom": "8px" }}>
                    <p>
                        <img alt="" src="/files/WardTour8Poster.jpg" style={{ "width": "280px", "height": "415px" }}/>
                    </p>
                    <p>
                        <strong>
                            Ward Tour 8 Poster:
                            <br/>
                            $10 Donation
                        </strong>
                    </p>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal">
                        <input name="cmd" type="hidden" value="_s-xclick"/>
                        <input name="hosted_button_id" type="hidden" value="DLAT6XEDHQAUW"/>
                        <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="/files/btn_cart_LG.gif" type="image"/>
                        <img alt="" height="1" src="/files/pixel.gif" width="1"/>
                    </form>
                </div>
                <div style={{ "clear": "both" }}>
                </div>
                <div style={{ "float": "left", "textAlign": "center", "border": "1px solid #cccccc", "marginRight": "4px", "marginBottom": "8px", "width": "314px" }}>
                    <p>
                        <img alt="" src="/files/WardTour1stPoster.jpg" style={{ "width": "280px", "height": "426px" }}/>
                    </p>
                    <p>
                        <strong>
                            Ward Tour 1st Ever Poster:
                            <br/>
                            $25 Donation
                        </strong>
                    </p>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal">
                        <input name="cmd" type="hidden" value="_s-xclick"/>
                        <input name="hosted_button_id" type="hidden" value="YGTL8FCGWK6Q2"/>
                        <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="/files/btn_cart_LG.gif" type="image"/>
                        <img alt="" height="1" src="/files/pixel.gif" width="1"/>
                    </form>
                </div>
                <p>
                </p>
            </div>
        </Page>
    )
}
