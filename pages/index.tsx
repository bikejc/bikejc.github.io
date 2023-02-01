import type { NextPage } from 'next'
import {Page, Triptych} from "../src/page";
import React from "react";

const md = `
#### Welcome to the official website of Bike JC, Jersey City’s advocacy group for bicyclists!

---

#### The Jersey City Ward Tour is back! **Sunday, June 4, 2023**. Free registration coming soon, [subscribe for updates](#subscribe).

---

#### Join our monthly Light-UP Rides! Usually 15-20 miles, start and finish at Grove St PATH.

<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">SAVE THE BIKE DATES!!🚲✨🎉<br>
Bike JC 2023 scheduled Light-Up Rides (and Ward Tour). Light-Ups start at sunset, 2nd Friday each month:
<br> 
<br>
•March 10<br>
•April 14<br>
•May 12<br>
•JC WARD TOUR: Sunday, June 4, 11 a.m.<br>
•June 23<br>
•July 14<br>
•August 11<br>
•September 8<br>
•October 13<br>
•November 10
</p>&mdash; 🚲Bike JC🗽 (@bikejc) <a href="https://twitter.com/bikejc/status/1620594685185245185?ref_src=twsrc%5Etfw">February 1, 2023</a></blockquote>

Roll-out times:
- March 10, 6:30pm
- April 14, 7pm
- May 12, 7:30pm
- June 23, 7:30pm
- July 14, 8pm
- August 11, 7:30pm
- September 8, 7pm
- October 13, 6:30pm
- November 10, 6pm

---

Bike JC is a citizen-based non-profit advocacy organization that aims to make Jersey City streets
safe and welcoming for bicyclists, by promoting bicycle lane creation, additional bicycle rack
placement, education, and group rides.

We are bicyclists, commuters, parents, and advocates for the full potential of Jersey City. We are
committed to working with our neighborhoods, schools, and elected officials to make Jersey City the
most bike-friendly city in the state. We want to help bicyclists commute, exercise, enjoy scenic
rides, ferry children to school and activities, and head out shopping in increasing numbers in the
immediate future.

We believe a bike-friendly city is safer for everyone. Studies have shown that the mere presence of
more bicyclists (and pedestrians) encourages motorists to drive with more caution and decreases
crashes. Bicycle lanes not only tend to increase the number of cyclists but can act as a traffic
calming measure, helping pedestrians navigate streets safely as well. Bicycling is also economical,
easy on the environment, and transforms the average commute into a great workout.

![](/files/light-up-ride-city-hall.jpg)
`

const Home: NextPage = () => {
  return (
      <Page
          path={"/"}
          h1={"Welcome to Bike JC"}
          banner={[
              "/files/BikeJcHomeSlide1.jpg",
              "/files/BikeJcHomeSlide2.jpg",
              "/files/BikeJcHomeSlide5.jpg",
              "/files/WardTourSticker_website.jpg",
          ]}
          md={md}
          preFooter={<Triptych />}
      />
  )
}

export default Home
