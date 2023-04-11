import TweetEmbed from "react-tweet-embed";
import MD from "./md";
import React from "react";

export const schedule2023Tweet = <TweetEmbed tweetId='1620594685185245185' />

export const wtBlurb = MD(`
#### The Jersey City Ward Tour is back! **Sunday, June 4, 2023**
Registration coming soon! [Subscribe for updates](#subscribe), or [sign up to volunteer](/support/volunteer).

---
`)
export const upcomingEventsBlurb = <>
    {wtBlurb}
    {MD(`
#### Monthly Light-Up Rides

Join our monthly Light-Up Rides! Usually the 2nd Friday of each month, 15-20 miles, start and finish at Grove St PATH.

**Next ride is Friday, April 14, rolling out from Grove St at 7:30 (we recommend meeting at Grove St around 7).**

---

#### [Sign up](https://bit.ly/jc-bike-bus) for the Jersey City Bike Bus
"Bike buses" are the new best way to get to school.

[**Sign up here**](https://bit.ly/jc-bike-bus) and Bike JC will help coordinate one in your area! [More info here](/bike-bus).

---
`)}
    <h4 id={"2023-schedule"}>2023 Schedule</h4>
    {schedule2023Tweet}
    {MD(`
Meet times:
- ~March 17, 7:30pm (postponed from March 10)~
- April 14, 7pm (roll at 7:30pm)
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
