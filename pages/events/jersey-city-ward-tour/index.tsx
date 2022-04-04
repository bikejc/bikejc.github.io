import { Page } from "../../../src/page";

const md = `
## The Jersey City Ward Tour is TENTATIVELY scheduled to return on Sunday, June 5, 2022, at 11:00am

![bike jc ward tour poster](/files/WardTour10_digital_0.jpg)

2,000 Bikes. 15 Miles. 6 Wards. 1 Great Day in #JerseyCity!

**PLEASE NOTE: Following 2 years of cancellations due to COVID-19, we are currently hoping to bring back our Jersey City Ward Tour and other spring events for 2022, IF PUBLIC HEALTH AND LOGISTICS CONSIDERATIONS ALLOW IT. We will let you know here and through all our other channels, including social media and email to members. If held, the Ward Tour would be Sunday, June 5 (always the first Sunday in June). MOST OF THE INFORMATION BELOW IS FROM 2019, and would be updated as needed if we roll this year.**

Bike JC’s Jersey City Ward Tour will roll Sunday, June 5, taking you (and probably over 2,000 of our closest friends) on a tour of our great city, and passing through all of its political wards.

**FREE!** $5 suggested donation to fund our year-round work for better biking in JC. But it is JUST a suggestion. $0 is totally OK. So is $500, or $5 million. :-)

We all start at City Hall, 280 Grove St. at Montgomery Street.

We all end up near the foot of Second Street along the Hudson River waterfront, in and around Lutze Biergarten. The Finish Line Festival afterparty will follow there, with great food, a drink special for riders all afternoon, a face painter for kids, and more!

We’ll ride on streets (or sometimes on one side of a street) that are closed to motor-vehicle traffic by the Jersey City Police Department. Officers on bikes and in motor vehicles will escort us throughout the ride.

Riders on must be age 12 or older, and must wear helmets. (Younger children may be carried securely on an adult's bike in appropriate child seats, bakfiets buckets, trailers, tag-along attachments, etc.)

All riders must also be able to maintain a pace of approximately 10 mph. This is a fairly relaxed pace for an adult who bikes even occasionally. We also take some short breaks to catch a breath and to allow for smooth traffic control, and our one long break in Lincoln Park roughly at the halfway point, after the only steep uphill on the course (so you can just walk your bike up that hill if you want).

Please note that neither route on the Ward Tour is timed, and it is not a race. In fact, we will strictly limit the front  of the ride group to 10 mph.

But we must also emphasize: YOU MUST BE ABLE TO KEEP UP WITH THE GROUP, OR WE WILL HAVE TO ASK YOU TO CUT YOUR RIDE SHORT, as police re-open the streets to motor traffic behind us.

Also note, if you can’t keep up, if your bike quits on you, or if you simply want to drop out along the way, we will TRY to help you, but ultimately YOU are responsible for getting yourself home if need be. We will have marshals and others with mechanical skills in the pack, and at least one van following the tour to pick up riders. But this is not always possible. If you need to go home, please ride according to all traffic laws. You may be able to catch a light rail or PATH train to shorten your trip home.

We strongly recommend that you and everyone in your party do a least some bike riding in the weeks before the tour.

We do NOT rent or otherwise provide the bikes!

The tour rolls out at 11 a.m. SHARP, but you will need to pick up an official tour bib before the start, 9:00–10:30 a.m.

We encourage you to dress up yourself and your bike colorfully!

Bike JC is a citizen-based advocacy organization that aims to make Jersey City streets welcoming for bicyclists, by promoting bike-friendly policies, including bike lanes; and bicycle education.

We hope to see you June 5! With protected bike lanes spreading through Downtown, Journal Square, and surrounding neighborhoods—and proposals for other parts of the city up for public hearings—this is shaping up to be another banner year for biking in Jersey City. Come celebrate the victories with us—and let everyone know we need the great work to continue!

**PLEASE NOTE:** The Ward Tour &amp; Festival is officially a RAIN OR SHINE event. There is NO rain date.

We will ride June 5 even if it’s raining, in any weather that’s not dangerous, or simply cancel till next year for any that is (e.g. lightning, hail, very high winds, plague of frogs …). There will be no refunds, because it’s free! But if you give us the suggested $5 donation (or $5 million or whatever), those are non-refundable. And thank you!!

**MORE ABOUT THE FINISH LINE FESTIVAL:**

ALL RIDERS, OF ALL AGES, and even people who AREN'T riding, are welcome to join us at the end of the Tour, for our Finish Line Festival.

For the kids, we'll have a face-painter working magic!

Local nonprofit groups and others will have tables outside the biergarten so you can get to know them if you'd like.

The Jersey City Ward Tour is presented by Bike JC in partnership with the the City of Jersey City, Mayor Steven M. Fulop, the Jersey City Municipal Council, and the Office of Cultural Affairs, and through the generosity of our sponsors and the efforts of our volunteers.

See you June 5!

#JCWardTour2022

<!-- TODO: button -->
[Registration Page](/events/jersey-city-ward-tour/ward-tour-registration)

Registration for the 2022 Jersey City Ward Tour is not yet open.
`

export default function Home() { return <Page path={"/events/jersey-city-ward-tour"} md={md} /> }
