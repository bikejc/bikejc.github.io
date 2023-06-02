import { Page } from "../../src/page";
import {aboutBlurb} from "./index";

const md = `
Bike JC came together for the first time in December 2009, and we’ve since become the most important force for better biking in Jersey City.

But the seeds of a citizen-based bicycle advocacy group were planted 10 years earlier, when a local group called Bicycle Advocates of Jersey City staged a bike rally to attract attention to the city’s nascent bicycle plan, courtesy of Rutgers Transportation Policy Institute. Then in 2004, the East Coast Greenway Alliance held its annual conference here to highlight the Jersey City portions of the Greenway, a city-to-city bicycle and walking path planned from Maine to Florida, adding energy to the city’s bike movement. Many revisions to the Jersey City Bicycle Plan later, bicycle route signage and racks were put into place in 2008.

When Bike JC was formed the following year by a small group of civic-minded cyclists, we knew our city still had far to go in becoming bike friendly. We began advocating with the city and county governments for more and better infrastructure, at the same time organizing group rides and other events to get more bikes on the streets and raise awareness of the issues facing us all.

We’re proud to say we’ve seen great progress!
- We sat on the city’s official committee to design a network of bike lanes and share-the-road arrows (“sharrows”). With some changes in emphasis, that effort led to 2014’s installation of the state’s largest set of bike lanes in the streets of our city.
- Also in 2014, we co-led an online crowdfunding campaign that raised over $43,000 to place public bike racks all over the city, some at sites chosen by donors and others placed and funded by the city government. Large-scale installation began in spring 2015.
- And in 2015, as the city prepared to roll out its groundbreaking bike share system—the first in New Jersey—we were among the community groups invited to provide input and guidance on the building of that system.

Meanwhile, we’ve also taken some internal steps to become a more effective organization. In 2014, Bike JC expanded our all-volunteer working board of directors to 11 members, and we became fully qualified by the IRS as a 501(c)(3) tax-exempt nonprofit organization, qualifying us for greater funding partnerships with, and grants from, many foundations,   government agencies, and businesses.

But we also have fun!
- Throughout our history, we’ve led informal bike rides in and around the city, often trying out interesting and scenic biking routes or visiting other community and environmentally friendly groups, and ending in social gatherings.
- In 2014 we started an annual fall event: we offer bike tours in conjunction with the city’s biggest annual arts event, the Jersey City Art &amp; Studio Tour, leading art-lovers on two wheels around some this great citywide festival’s many venues.
- And of course, every spring we still put on our largest and best-known event, the Jersey City Ward Tour and Festival. In 2014, its fifth year, the Ward Tour took more than 1,100 riders on a 15-mile bike tour through all six wards of our city, and ended with an afternoon festival of music and food and fun.

All these measures have helped build a bike culture in Jersey City—but they’re just the beginning. We believe even more can, and should, and will be done to make Jersey City truly bike-friendly, from the redesign of streets to include protected bike lanes to better education and awareness of cycling and road rules among all road users.

With your help, we’ll get there! Please consider volunteering, or just participating, in one of our events; donating to Bike JC or helping us secure more substantial funding; and letting our government, business and community leaders know that you support better biking in Jersey City just as much as we do. And whatever else you do … please bike in JC! Get out and ride, for any reason, or for no reason. The more we do it, and the more of us who do it, the better it gets for all of us.
`

export default function Home() { return <Page path={"/about/history"} description={aboutBlurb} md={md} /> }
