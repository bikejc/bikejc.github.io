import TweetEmbed from "react-tweet-embed";
import MD from "./md";
import React from "react";
import {bikeBusMapEmbedMD} from "../pages/bike-bus";

export const schedule2023Tweet = <TweetEmbed tweetId='1620594685185245185' />

export const wtBlurb = MD(`
#### The Jersey City Ward Tour is back! **Sunday, June 4, 2023**
Registration coming soon! [Subscribe for updates](#subscribe), or [sign up to volunteer](/support/volunteer).

---
`)
export const upcomingEventsBlurb = <>
    {MD(`
#### [Sign up](/bike-bus/signup) for the Jersey City Bike Bus
"Bike buses" are the new best way to get to school. We're planning a pilot for next Wednesday, May 3, for [National Bike, Walk, & Roll to School Day](https://www.walkbiketoschool.org/).

[**Sign up here**](/bike-bus/signup) and Bike JC will help coordinate one in your area! [**More info here**](/bike-bus).

<iframe src="https://bikejc.org/bike-bus/map?S" width="100%" style="aspect-ratio: 4/3"></iframe>

[View full screen here](/bike-bus/map)

---
`)}
    {wtBlurb}
    {MD(`
#### Monthly Light-Up Rides

Join our monthly Light-Up Rides! Usually the 2nd Friday of each month, 15-20 miles, start and finish at Grove St PATH.

**Next ride is Friday, April 14, rolling out from Grove St at 7:30 (we recommend meeting at Grove St around 7).**

---

`)}
    <h4 id={"2023-schedule"}>2023 Schedule</h4>
    {schedule2023Tweet}
    {MD(`
Meet times:
- ~March 17, 7:30pm (postponed from March 10)~
- ~April 14, 7pm (roll at 7:30pm)~
- May 12, 7:30pm (roll at 8pm)
- June 23, 7:30pm (roll at 8pm)
- July 14, 8pm (roll at 8:30pm)
- August 11, 7:30pm (roll at 8pm)
- September 8, 7pm (roll at 7:30pm)
- October 13, 6:30pm (roll at 7pm)
- November 10, 6pm (roll at 6:30pm)

---
`)}
</>
