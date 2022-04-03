import { Page } from "../../src/page";

const md = `
#### Bike Rack Initative

In 2012 the City sponsored an iniative called the JC Bike Rack Trust Fund. Through this program business owners could donate $250.00 to the fund in exchange for placement of a U-shaped bike rack in front of their business.

Jersey City Art School was approached by the City to offer a more creative alternative to the standard U-shape design. JCAS decided to take this opportunity to turn the project into a design competition and partner with Bike JC. Numerous submission were reviewed by a board consisting of artists, cyclists, and city officials, and an elegant design was selected.

Sustainable JC joined the partnership and contributed a successful fundraising campagn, and in 2015 approx. 275 signature bike racks are being stalled throughout Jersey City!

The success of this partnerships between the City and advocacy groups such as Bike JC, JCAS, and Sustainable JC   has laid the groundwork for Jersey City's future towards a more bike-friendly city!
`

export default function Home() { return <Page path={"/projects/bike-racks"} md={md} /> }
