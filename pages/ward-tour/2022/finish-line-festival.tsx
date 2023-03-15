import { Page } from "../../../src/page";
import {reservoir} from "../../../src/img";

const md = `
We're excited to partner with [the Jersey City Jazz Festival](https://riverviewjazz.org/jersey-city-jazz-festival) for this year's "Finish Line Festival!"

At the end of [the Ward Tour route](/ward-tour/2022/route) (at [107 Morgan St.](https://goo.gl/maps/YLfwHwet3ATYxVc79)), riders will find a bike parking area and great food, drink, and entertainment options there!

Live music and festivities are scheduled there from 12-6pm.

ALL RIDERS, OF ALL AGES, and even people who AREN'T riding, are welcome to join us at the end of the Tour, for this "Finish Line Festival."
`

export default function Home() { return <Page path={"/ward-tour/2022/finish-line-festival"} banner={reservoir} md={md} /> }
