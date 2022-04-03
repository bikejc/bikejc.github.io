import { Page } from "../../src/page";

const md = `
#### We're in the news!

Here is some media coverage about Bike JC:

**Thousands Expected for Jersey City Bike Tour and Festival**
https://www.nj.com/hudson/index.ssf/2016/05/thousands_expected_for_jersey_city_bike_tour_and_f.html

**54.7 Miles Of New Bike Lanes Coming To Jersey City**
https://newyork.cbslocal.com/2012/12/09/report-54-7-miles-of-new-bike-lanes-coming-to-jersey-city

**Mayor Fulop &amp; Community Organizations Announce Crowdfunding Partnership Raised More than $38,000 for 275 Bike Racks; Innovative Public-Private Fundraising Effort First of Its Kind in New Jersey**
https://www.cityofjerseycity.com/uploadedFiles/Public_Notices/Press_Releases/Bike%20Rack%20Funding%20Goal%20Reached%20Press%20Release.pdf

**PHOTOS: BikeJC's 5th annual Ward Tour**
https://www.nj.com/hudson/index.ssf/2014/06/photos_bikejcs_5th_annual_ward_tour.html

**Three Cities in New Jersey Alter Bike Sharing Plans**
https://www.nytimes.com/2014/09/27/nyregion/three-cities-in-new-jersey-alter-bike-sharing-plans.html?_r=1

**Two major new bike initiatives to enhance Jersey City's bike infrastructure**
https://blog.nj.com/nj_off-road_biking/2013/03/two_major_new_bike_initiatives_to_enhance_jersey_citys_bike_infrastructure.html

**Jersey City Announces Winners of 4th Annual ‘Green Awards’**
https://www.jerseycityindependent.com/2011/10/jersey-city-announces-winners-of-4th-annual-green-awards
`

export default function Home() { return <Page path={"/news/media-coverage"} documentClasses={["section-news"]} md={md} /> }
