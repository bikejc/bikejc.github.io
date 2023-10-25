import TweetEmbed from "react-tweet-embed"
import MD from "./md"
import React from "react"

export const schedule2023Tweet = <TweetEmbed tweetId='1620594685185245185' />
export const regfox = `https://bikejc.regfox.com/ward-tour-2023?t=ref-web`
export const wt23vol = 'https://docs.google.com/forms/d/e/1FAIpQLSfp4MnwIfZ3U6wsIBs5cQabnuxkC1lipEYqq13b52waDSKDqA/viewform'
export const wt23posterSq = '/img/wt23/poster_50p_sq.png'
export const wt23poster = '/img/wt23/BikeJC_WT_2023_7x11_.jpg'
export const wt23rwgps = `https://ridewithgps.com/routes/42028667`
export const wt23citibikeRedirect = '/ward-tour/citibike'
export const wt23citibikeForm = 'https://docs.google.com/forms/d/e/1FAIpQLSeQQ4l-areO9v6bOgYA6KNQqbKc9uxRzwJW6g3gfYm7AfufMA/viewform'

export const wtBlurb = MD(`
#### [Register for the Jersey City Ward Tour!](${regfox}) Sunday, June 4, 2023
Join 1,000's of our closest friends on a ride through all 6 wards of Jersey City!

[**Register here**](${regfox}), [**sign up to volunteer here**](${wt23vol}), [**subscribe for updates**](#subscribe), or find [**more info here**](/ward-tour).

[![](${wt23poster})](${regfox})

---
`)
export const upcomingEventsBlurb = <>
    {wtBlurb}
    {MD(`
#### [Sign up](/bike-bus/signup) for the Jersey City Bike Bus
"Bike buses" are the new best way to get to school. [**Sign up here**](/bike-bus/signup) and Bike JC will help coordinate one in your area! [**More info here**](/bike-bus).

<iframe src="/bike-bus/map?S" width="100%" style="aspect-ratio: 4/3" loading="lazy"></iframe>

[More info](/bike-bus), [View full screen](/bike-bus/map?S)

---
`)}
    {MD(`
#### Monthly Light-Up Rides

Join our monthly Light-Up Rides! Usually the 2nd Friday of each month, 15-20 miles, start and finish at Grove St PATH.

**Next ride is Friday, November 10, rolling out from Grove St at 6:30pm (we recommend meeting at Grove St around 6pm).**

---

`)}
    <h4 id={"2023-schedule"}>2023 Schedule</h4>
    {schedule2023Tweet}
    {MD(`
Meet times:
- ~March 17, 7:30pm (postponed from March 10)~
- ~April 14, 7pm (roll at 7:30pm)~
- ~May 12, 7:30pm (roll at 8pm)~
- ~June 30, 7:30pm (roll at 8pm)~
- ~July 14, 8pm (roll at 8:30pm)~
- ~August 11, 7:30pm (roll at 8pm)~
- ~September 8, 7pm (roll at 7:30pm)~
- ~October 13, 6:30pm (roll at 7pm)~
- November 10, 6pm (roll at 6:30pm)

---
`)}
</>
