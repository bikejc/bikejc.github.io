import { Page } from "../../src/page";

const md = `As of 2014, Bike JC is fully qualified by the IRS as a 501(c)(3) tax-exempt nonprofit organization.`

export default function Home() { return <Page path={"/about/non-profit-information"} description={md} md={md} /> }
