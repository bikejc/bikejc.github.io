import { Page } from "../../../src/page";

const md = `
## [2022 WARD TOUR REGISTRATION IS OPEN!](https://www.eventbrite.com/e/jersey-city-ward-tour-2022-tickets-324066169637)

## Frequently Asked Questions

### What is the time and date of the 2022 Ward Tour? <a id="date-time"></a>

The Ward Tour will take place on June 5, 2022.

Registration begins at 9am, roll out at 11am sharp, so be sure to come early to get your number and avoid the last-minute rush at registration which can result in missing the start!

### Where is the event located? <a id="location"></a>

The ride starts at City Hall ([280 Grove St., at Montgomery Street](https://goo.gl/maps/tMHCxVZU4Q3qBGvc8)) and finishes at the Jersey City Jazz Festival, at [107 Morgan St.](https://goo.gl/maps/YLfwHwet3ATYxVc79). Riders will find a bike parking area and great food, drink, and entertainment options there!

### How do I get to the Ward Tour using public transportation? <a id="public-transit"></a>

The closest PATH station to the start at City Hall is at Grove street, just a few blocks away. Both the WTC and 33rd Street PATH lines stop there. [Sunday PATH scheuldes](https://www.panynj.gov/path/en/schedules-maps.html#sunsched)

If you are coming by light rail, the Harismus Cove, Harborside, and Exchange Place stations are all an easy bike ride from the start.
[Light rail map](https://d2g63oyneaimm8.cloudfront.net/sites/default/files/pdfs/light-rail/sf_lr_hblr_map.pdf)

### I'll need to drive to the event. Is there parking available? <a id="driving"></a>

We suggest public transportation to the start. There are a few parking lots near the start at City Hall where you could park as well.

### How much does it cost to ride in the Ward Tour? <a id="cost"></a>

It's free! We strive to encourage as many people as possible to join the ride and we don't want the cost of entry to be a barrier to participating in the event. That said, we do have a suggested donation of $5 and gladly accept donations online or at the registration tables.

### What should I bring with me? <a id="gear"></a>

Some suggestions: sunglasses, a water bottle, a hat if you'd like to keep the sun/rain off your head, a snack, a light-weight lock if you have one (we will have a supervised bike parking area at the finish line), and a small amount of cash for refreshments from the vendors at the finish. If you plan on purchasing alcohol at the festival please remember to bring a valid ID.

### Is there a place for me to store a bag or backpack while I ride? <a id="baggage"></a>

Due to the large number of participants, we can't provide this service this year. Please consider packing lightly so that you can carry whatever you bring with you on the ride.

### Are people from outside of Jersey City allowed to participate? <a id="visitors"></a>

Of course! We love introducing more people to all of the interesting, diverse, lively, and historic neighborhoods of Jersey City.

### Am I required to wear a helmet? <a id="helmets"></a>

New Jersey State law requires anyone under the age of 17 to wear a bicycle helmet. In addition we ask all participants over 17 years of age to also wear a helmet. Please contact us with questions or concerns in the event that you are over 17 and the helmet requirement would rule out your ability to participate due to financial and/or religious factors. We would like everyone to be able to participate so we will try to work with you to make sure you or your group are able to ride in the tour.

### What is the age limit for riders? <a id="ages"></a>

The age limit for riding a bike in the Ward Tour is 12 years and older. Younger children are allowed to ride with an adult in a pull-wagon, on a child's bike seat, etc. All ages are welcome at the Finish Line Festival though!

### Is the Finish Line Festival family friendly? <a id="family-friendly"></a>

Yes! There will be activities available for all ages.

### Are the roads closed to traffic? <a id="road-closures"></a>

Yes, the route has rolling closures which means that traffic is not allowed on the road until the riders pass.

### How challenging is the course? Are there a lot of hills? <a id="difficulty"></a>

[The route](https://ridewithgps.com/routes/38744234) is about 15 miles long. The riding pace is conversational. Most of of the course is slightly rolling to flat. However, there are a few steady uphill sections, and one steeper but very short hill in Lincoln Park just before the halfway rest point where the ride takes a short water and shade break. People with a wide range of athletic abilities should be able to complete this course.

### What if I am unable to complete the ride? <a id="bailing"></a>

If you run into mechanical issues on the course, we'll have bike mechanics along the route to help fix minor problems so that you can continue on the ride.

In the event you feel unwell or sustain an injury, Jersey City Medical Center will be providing the ride with EMTs on bicycles in addition to a rescue wagon, and can treat you immediately as well as help you determine whether it's safe for you to continue on.

### What if I don't have a bike to ride? <a id="rentals"></a>

Some local bike rental options:
- [**Grove Street Bicycles** offers bike rentals](https://www.grovestreetbicycles.com/about/rentals-pg110.htm)
- [**Citi Bike**](https://citibikenyc.com/) is offering members 3-hour rentals on Ward Tour day (promo code will be posted here soon, and circulated at the Ward Tour start)
- [**Zoomo**](https://www.ridezoomo.com/us/plans) offers e-bike rentals in Journal Square

### Is there same-day registration? <a id="day-of-registration"></a>

There is limited morning-of registration. If you are unable to [register online](https://www.eventbrite.com/e/jersey-city-ward-tour-2022-tickets-324066169637) for some reason, please be sure to show up at 9:00 since the lines for anyone who hasn't registered online can become very long, and we don't want you to miss the start of the tour! Also, since the tour is free, and run by a volunteer staff, we ask everyone to please [register online](https://www.eventbrite.com/e/jersey-city-ward-tour-2022-tickets-324066169637) instead if at all possible, since it cuts down on the amount of work volunteers need to do in a very short time frame at the start of the ride.

### I noticed there's no rain date. If it's raining does that automatically mean the event will be canceled? <a id="rain-or-shine"></a>

No! The Ward Tour is officially rain-or-shine. It will still be held the event of rain, unless there are safety issues such as lightning storms, very high winds, hail, etc. If the weather is severe enough that the tour absolutely must be canceled we will alert riders via email and on social media asap.
`

export default function Home() { return <Page path={"/events/jersey-city-ward-tour/ward-tour-faqs"} banner="/files/wardtourbanner1_5.jpg" md={md} /> }
