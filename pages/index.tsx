import type { NextPage } from 'next'
import {Page} from "../src/page";
import React from "react";

const md = `
#### Welcome to the official website of Bike JC, Jersey City’s advocacy group for bicyclists!

---

#### The Jersey City Ward Tour is back! Sunday, June 5, roll out 11am from City Hall. **[REGISTER HERE](https://www.eventbrite.com/e/jersey-city-ward-tour-2022-tickets-324066169637)**.

---

#### Monthly Light-UP Ride this Friday, May 13! Meet at Grove St PATH at 7:30pm, roll out at 8pm! [Route](https://ridewithgps.com/routes/39369217). 

Full schedule:
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">2022 Jersey City Light-Up Rides ✨🚲<br>2nd Friday of each month, April–October, sunset. Meet times:⁰April 8, 7 <br>May 13, 7:30<br>June 24, 7:30*<br>July 8, 8<br>Aug. 12, 7:30<br>Sept. 9, 7<br>Oct. 14, 6:30<br> <br>*Special Light Up the Loop Ride w/ferries to/from Manhattan! (Not a 2nd Friday.) 1/2</p>&mdash; 🚲Bike JC🗽 (@bikejc) <a href="https://twitter.com/bikejc/status/1518381269419188227">April 25, 2022</a></blockquote>

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
      />
  )
}

export default Home
