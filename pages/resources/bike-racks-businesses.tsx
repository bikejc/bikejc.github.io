import { Page } from "../../src/page";

const md = `
**Coming soon:** step by step instructions on how to get a bike rack installed at your place of business for your bike-riding customers to use and appreciate!

For now, please make use of the following form in your request to the city:

[Bike rack request form](/sites/default/files/documents/jcdpwbikerackrequestform.pdf)
`

export default function Home() { return <Page path={"/resources/bike-racks-businesses"} description={"step by step instructions on how to get a bike rack installed at your place of business for your bike-riding customers to use and appreciate!"} md={md} /> }
