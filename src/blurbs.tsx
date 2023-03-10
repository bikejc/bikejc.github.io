import TweetEmbed from "react-tweet-embed";
import MD from "./md";
import React from "react";

export const schedule2023Tweet = <TweetEmbed tweetId='1620594685185245185' />
export const postponedMarch2023Tweet = <TweetEmbed tweetId='1634020038834372612' />
// 'https://twitter.com/bikejc/status/1634020038834372612'
export const wtBlurb = MD(`
#### The Jersey City Ward Tour is back! **Sunday, June 4, 2023**. Free registration coming soon, [subscribe for updates](#subscribe), or [sign up to volunteer](/support/volunteer).

---
`)

export const schedule2023Blurb = <>
    <h4>Join our monthly Light-UP Rides! Usually 15-20 miles, start and finish at Grove St PATH.</h4>
    {postponedMarch2023Tweet}
    {schedule2023Tweet}
    {MD(`
Roll-out times:
- March 17, 7:30pm (postponed from March 10)
- April 14, 7:30pm
- May 12, 7:30pm
- June 23, 7:30pm
- July 14, 8pm
- August 11, 7:30pm
- September 8, 7pm
- October 13, 6:30pm
- November 10, 6pm

---
`)}
</>
