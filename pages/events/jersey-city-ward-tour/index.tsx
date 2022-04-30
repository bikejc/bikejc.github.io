import { Page } from "../../../src/page";

const md = `
#### The Jersey City Ward Tour is back on Sunday, June 5, 2022, at 11:00am.

#### [FREE! REGISTER HERE.](https://www.eventbrite.com/e/jersey-city-ward-tour-2022-tickets-324066169637)

**2,000 Bikes. 15 Miles. 6 Wards. 1 Great Day in Jersey City!**

---
`

export const bodyMd = `
The Jersey City Ward Tour will roll Sunday, June 5, taking you (and 2,000 of our closest friends) on a tour of our great city, and passing through all of its wards.

## FREE!
$5 is a suggested donation to fund Bike JC's year-round work for better biking in JC. But it is JUST a suggestion. $0 is totally OK. So is $500, or $5 million. :-)

#### [REGISTER HERE.](https://www.eventbrite.com/e/jersey-city-ward-tour-2022-tickets-324066169637)

## Route

Full route: https://ridewithgps.com/routes/38744234

[![Screenshot of Ward Tour route](/files/wt11-route-screenshot.png)](https://ridewithgps.com/routes/38744234)

**Start:** City Hall - [280 Grove St., at Montgomery Street](https://goo.gl/maps/tMHCxVZU4Q3qBGvc8). Registration begins at 9am, roll out at 11am.

**End:** [Jersey City Jazz Festival](https://riverviewjazz.org/jersey-city-jazz-festival), at [107 Morgan St.](https://goo.gl/maps/YLfwHwet3ATYxVc79). Riders will find a bike parking area and great food, drink, and entertainment options there!

We’ll ride on streets (or sometimes on one side of a street) that are closed to motor-vehicle traffic by the Jersey City Police Department. Officers on bikes and in motor vehicles will escort us throughout the ride.

## Finish Line: [Jersey City Jazz Festival](https://riverviewjazz.org/jersey-city-jazz-festival)

We're excited to partner with [the Jersey City Jazz Festival](https://riverviewjazz.org/jersey-city-jazz-festival) for this year's "Finish Line Festival!"

At the end of [the Ward Tour route](./ward-tour-route) (at [107 Morgan St.](https://goo.gl/maps/YLfwHwet3ATYxVc79)), riders will find a bike parking area and great food, drink, and entertainment options there!

Live music and festivities are scheduled there from 12-6pm.

ALL RIDERS, OF ALL AGES, and even people who AREN'T riding, are welcome to join us at the end of the Tour, for this "Finish Line Festival."

## Ride info

Riders must be age 12 or older, and must wear helmets. (Younger children may be carried securely on an adult's bike in appropriate child seats, bakfiets buckets, trailers, tag-along attachments, etc.)

All riders must also be able to maintain a pace of approximately 10 mph. This is a fairly relaxed pace for an adult who bikes even occasionally. We also take some short breaks to catch a breath and to allow for smooth traffic control, and our one long break in Lincoln Park roughly at the halfway point, after the only steep uphill on the course (so you can just walk your bike up that hill if you want).

Please note that the Ward Tour is not timed, and **it is not a race.** In fact, we will strictly limit the front  of the ride group to 10 mph.

But we must also emphasize: YOU MUST BE ABLE TO KEEP UP WITH THE GROUP, OR WE WILL HAVE TO ASK YOU TO CUT YOUR RIDE SHORT, as police re-open the streets to motor traffic behind us.

Also note, if you can’t keep up, if your bike quits on you, or if you simply want to drop out along the way, we will TRY to help you, but ultimately YOU are responsible for getting yourself home if need be. We will have marshals and others with mechanical skills in the pack, and at least one van following the tour to pick up riders. But this is not always possible. If you need to go home, please ride according to all traffic laws. You may be able to catch a light rail or PATH train to shorten your trip home.

We strongly recommend that you and everyone in your party do at least some bike riding in the weeks before the tour.

We do NOT rent or otherwise provide the bikes!

The tour rolls out at 11 a.m. SHARP, but you will need to pick up an official tour bib before the start, 9:00–10:30 a.m.

We encourage you to dress up yourself and your bike colorfully!

## Rain or Shine
**PLEASE NOTE:** The Ward Tour &amp; Festival is officially a RAIN OR SHINE event. There is NO rain date.

We will ride June 5 even if it’s raining, in any weather that’s not dangerous, or simply cancel till next year for any that is (e.g. lightning, hail, very high winds, plague of frogs …). There will be no refunds, because it’s free! But if you give us the suggested $5 donation (or $5 million or whatever), those are non-refundable. And thank you!!

## More Info
Bike JC is a citizen-based advocacy organization that aims to make Jersey City streets welcoming for bicyclists, by promoting bike-friendly policies, including bike lanes; and bicycle education.

We hope to see you June 5! With protected bike lanes spreading through Downtown, Journal Square, and surrounding neighborhoods—and proposals for other parts of the city up for public hearings—this is shaping up to be another banner year for biking in Jersey City. Come celebrate the victories with us—and let everyone know we need the great work to continue!

The Jersey City Ward Tour is presented by Bike JC in partnership with the City of Jersey City, Mayor Steven M. Fulop, the Jersey City Municipal Council, and the Office of Cultural Affairs, and through the generosity of our sponsors and the efforts of our volunteers.

**See you June 5!**

**#JCWardTour2022**

### [FREE! REGISTER HERE.](https://www.eventbrite.com/e/jersey-city-ward-tour-2022-tickets-324066169637)

[![bike jc ward tour poster](/files/DS-Bike-JC-Ward-Tour-Poster-4.11.png)](https://www.eventbrite.com/e/jersey-city-ward-tour-2022-tickets-324066169637)
`

export const description = "The Jersey City Ward Tour is back on Sunday, June 5, 2022, at 11:00am. Free registration! 2,000 Bikes. 15 Miles. 6 Wards. 1 Great Day in Jersey City!"

export default function Home() { return <Page path={"/events/jersey-city-ward-tour"} md={md + bodyMd} description={description} /> }
