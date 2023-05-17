import { Page } from "../../src/page"
import MD from "../../src/md"

export type Item = {
    name: string
    donation: number
    src: string
    paypalCode: string
    sizes?: string[]
}
function Item({ name, donation, src, paypalCode, sizes, }: Item) {
    const paypalPixel = <>
        <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="/files/btn_cart_LG.gif" type="image" />
        <img alt="" height="1" src="/files/pixel.gif" width="1" />
    </>
    return <div style={{ "float": "left", "textAlign": "center", "border": "1px solid #cccccc", "marginRight": "4px", "marginBottom": "8px" }}>
        <p>
            <img alt="" src={`/files/${src}`} style={{ "height": "350px", "width": "280px" }} />
        </p>
        <p>
            <strong>
                {name}
                <br/>
                ${donation} Donation
            </strong>
        </p>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal">
            <input name="cmd" type="hidden" value="_s-xclick"/>
            <input name="hosted_button_id" type="hidden" value={paypalCode} />
            {
                sizes ? <>
                    <table style={{ "width": "90%", "margin": "auto" }}>
                        <tbody>
                        <tr>
                            <td>
                                <input name="on0" type="hidden" value="Size" />
                                Select Size
                                <br />
                                <select name="os0">{
                                    sizes.map(size => <option key={size} value={size}>{size}</option>)
                                }</select>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <p>{paypalPixel}</p>
                </> : paypalPixel
            }
        </form>
    </div>
}

const items = [
    { name: "Wings Tote Bag", donation: 15, src: "wings-tote.jpg", paypalCode: "CS2FNLKR44FWA", },
    { name: "BikeJC Retro Tote Bag", donation: 15, src: "retro-tote.jpg", paypalCode: "5J7GWWHTBFJTG", },
    // { name: "Wings Long Sleeve T-Shirt", donation: 25, src: "BlackWingsMens.jpg", paypalCode: "R7BC75UKBXMXJ", sizes: [ "Small", "Medium", "Large", "XL", ] },
    { name: "Wings T-Shirt - Standard Cut", donation: 25, src: "BlackWingsMens.jpg", paypalCode: "2J5FBDE4LYA9E", sizes: [ "Small", "Medium", "Large", "XL", "XXL" ] },
    { name: "Wings T-Shirt - Women's Cut", donation: 25, src: "WingsWomens.jpg", paypalCode: "BXMTJ7A5PQ27N", sizes: [ "Small", "Medium", "Large" ] },
    { name: "Green Retro T-Shirt - Standard Cut", donation: 25, src: "GreenRetroMens.jpg", paypalCode: "5HAGBYPET732A", sizes: [ "Small", "Medium", "XL", "XXL" ] },
    { name: "Green Retro T-Shirt - Women's Cut", donation: 25, src: "GreenRetroWomens.jpg", paypalCode: "RBZM7ZXWK98PS", sizes: [ "Large" ] },
    { name: "Black Retro T-Shirt - Standard Cut", donation: 25, src: "BlackRetroMens.jpg", paypalCode: "T4KMR59Z6Z96U", sizes: [ "Small", "Medium", "XXL" ] },
    { name: "Black Retro T-Shirt - Women's Cut", donation: 25, src: "BlackRetroWomens.jpg", paypalCode: "5C6TYB6QLGEDN", sizes: [ "Small", "Medium", "Large" ] },
    { name: "Ward Tour 10 T-Shirt - Standard Cut", donation: 5, src: "WardTour10MensShirt.jpg", paypalCode: "LRFCWB5WCRW4N", sizes: [ "Small", "Medium", "Large", "XL", "XXL" ] },
    { name: "Ward Tour 10 T-Shirt - Women's Cut", donation: 5, src: "WardTour10WomensShirt.jpg", paypalCode: "C8SHVGE6AGKYQ", sizes: [ "Small", "Medium", "Large", "Extra Large" ]},
    { name: "Ward Tour 9 T-Shirt - Standard Cut", donation: 5, src: "WardTour9Mens.jpg", paypalCode: "PULBDPCA5QHM8", sizes: [ "Small" ] },
    { name: "Ward Tour 9 Tank", donation: 5, src: "WardTour9TankTop.jpg", paypalCode: "XVJFYU4996V5C", sizes: [ "Medium", "Large/XL" ] },
    { name: "Ward Tour 8 T-Shirt - Standard Cut", donation: 5, src: "WardTour8Mens.jpg", paypalCode: "EJBR9PEERBFMC", sizes: [ "Large" ] },
    // { name: "Ward Tour 8 T-Shirt - Women's Cut", donation: 5, src: ".jpg", paypalCode: "URV5EGKABB46Y", sizes: [ "Medium", "Large" ] },
    { name: "Ward Tour 9 Poster", donation: 10, src: "WardTour9Poster.jpg", paypalCode: "Q9NLLANTKL8NJ", },
    { name: "Ward Tour 8 Poster", donation: 10, src: "WardTour8Poster.jpg", paypalCode: "DLAT6XEDHQAUW", },
    { name: "Ward Tour 1st Ever Poster", donation: 25, src: "WardTour1stPoster.jpg", paypalCode: "YGTL8FCGWK6Q2", },
]

export default function Home() {
    return (
        <Page path={"/support/cool-swag-cool-bikers"}>
            <div className="field field-name-body field-type-text-with-summary field-label-hidden field-wrapper body field">
                {MD(`## Donate to BikeJC and Earn Cool Swag`)}
                {MD(`We'll thank you for your donation by sending you something that lets you show off your support for bicycling in Jersey City.`)}
                <div style={{ "backgroundColor": "#a59d46", "width": "100%", "height": "50px", "textAlign": "right", "paddingTop": "10px", "paddingBottom": "10px", "paddingRight": "20px" }}>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal">
                        <input name="cmd" type="hidden" value="_s-xclick"/>
                        <input name="encrypted" type="hidden" value="-----BEGIN PKCS7-----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-----END PKCS7-----&lt;br /&gt;"/>
                        <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="/files/btn_viewcart_LG.gif" type="image"/>
                        <img alt="" height={1} src="/files/pixel.gif" width={1}/>
                    </form>
                </div>
                {
                    items.map((item, idx) => {
                        const node = <Item key={item.name} {...item} />
                        return idx % 2 == 0 && idx > 0 ? <><div style={{ clear: "both" }} />{node}</> : node
                    })
                }
            </div>
        </Page>
    )
}
