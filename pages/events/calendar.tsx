import {Page, Triptych} from "../../src/page";

const md = `
---

#### The Jersey City Ward Tour is back! **Sunday, June 4, 2023**. Free registration coming soon.

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

`

export default function Home() { return (
    <Page
        path={"/events/calendar"}
        md={md}
        preFooter={<Triptych />}
    >

    </Page>
)
}
