import TweetEmbed from "react-tweet-embed";
import {Page} from "../../src/page";
import MD from "../../src/md";
import YouTubeEmbed from "next-utils/youtube";
import {helmets} from "../../src/img";
import {iframeHtml} from "../../src/insta";
import {RouteDisplay, routeDisplays, routeHref, routes} from "../../src/bike-bus/routes";
import {filterEntries, o2a} from "next-utils/objs";
import {ReactNode} from "react";
import Link from "next/link";
import Dot from "../../src/dot";

const signupMd = `
### [Sign up for the Jersey City Bike Bus](/bike-bus/signup)
"Bike buses" are the new best way to get to school: a group ride picks up kids near their homes, and everyone rides to school together. Being in a group improves safety, and there are dedicated "marshals" assisting with intersections and making sure no one is left behind.

[**Sign up here**](/bike-bus/signup) and Bike JC will help coordinate one in your area!

### Next Bike Bus: Thursday, May 25 <a id="next-bike-bus"></a>
Next Bike Bus is Thursday, May 25!

[**Sign up**](/bike-bus/signup) and [sign the waiver](/bike-bus/waiver) (if you haven't yet), and tell your friends!
`

const routesMapMd = `
### Routes <a id="routes"></a>
Here are the routes we plan to run (subject to change!):
<iframe src="/bike-bus/map?ll=40.724_-74.057&S=" width="100%" style="aspect-ratio: 4/3" loading="lazy"></iframe>

[(full screen version)](/bike-bus/map?S)
`

const routesMapPsMd = `
If you don't see a route that works for you, [let us know](mailto:bikebus@bikejc.org) and [make sure you and your school-mates are signed up](/bike-bus/signup). The more signups we get from each school, the easier it is to plan a route there, ensure there will be sufficient bike racks, etc.
`

export default function Home() {
    const activeRoutes = filterEntries(routeDisplays, (routeName) => routes[routeName].active !== false)
    return (
        <Page path={"/bike-bus"} banner={helmets}>
            {MD(signupMd)}
            {MD(routesMapMd)}
            {<>
                <p>More info about each route:</p>
                <ul>{
                    o2a<string, RouteDisplay, ReactNode>(
                        routeDisplays,
                        (routeName, { title, summary }) =>
                            <li key={routeName}>
                                <Link href={`/bike-bus/${routeName}-line`}>
                                    <Dot color={routes[routeName].color} />
                                    <strong>{title}</strong>: {summary}
                                </Link>
                            </li>
                    )
                }</ul>
            </>}
            {MD(routesMapPsMd)}
            {MD(`
---

#### School Signup Standings <a id="standings"></a>

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR7OykHYT-mz7qF40nn18ivkbKrM8Q6UC1ys8vTadmcEloaN1X5u74kOZ441t-HBF6m6hoh0X6OA3Vk/pubhtml?gid=601478093&amp;single=true&amp;widget=true&amp;headers=false" width="100%" style="aspect-ratio: 4/3"></iframe>

##### [**Get your school to sign up**](/bike-bus/signup), so that we can plan Bike Bus routes there!

[**bikejc.org/bike-bus/signup**](https://bikejc.org/bike-bus/signup)

#### Waiver <a id="waiver"></a>
[**Parents must sign the waiver for their children who will join**](/bike-bus/waiver).

### Previous Bike Buses <a id="past"></a>

#### Bike Bus #3: Friday, May 19 <a id="20230519"></a>
We added a new route this week, [the "silver line"](/bike-bus/silver-line) from Communipaw / Bergen Lafayette to the West Side (Three Little Birds, LCCS, PS 17)

<img src="/bikebus/20230519/silver%202.jpeg" style="max-height: 40em; margin: 0"></img>

#### Bike Bus #2: Friday, May 12 <a id="20230512"></a>
[We ran another Bike Bus on Friday, May 12](https://www.instagram.com/p/CsVA5tRsxiK/), and are hoping to keep running them each Friday.

Check out [this email to all our signups](https://mailchi.mp/bikejc/next-jc-bike-bus-friday-may-12) with more info about planning and next steps, and [make sure you and your school-mates are signed up](/bike-bus/signup)!

![](/bikebus/20230512/yellow%201_50p.jpg)

![](/bikebus/20230512/blue%20line%201.jpeg)

#### Bike Bus Pilot: Wednesday May 3 <a id="pilot"></a>
On [National Bike, Walk, & Roll to School Day](https://www.walkbiketoschool.org/), we ran 7 Bike Bus routes around Jersey City:

${iframeHtml("CrySd81oNMn")}

---

#### FAQs <a id="faq"></a>

##### What do I need to bring?
A lock and helmet are required.

##### Where will we lock up our bikes?
The city is providing temporary bike racks at schools that were mentioned as not having any (at sign up)

You do need to being your own lock though!

##### Does the Bike Bus go home from school as well?
No, this is ride **TO** school only.

##### Will the roads be closed?
No. There will be volunteer marshals – with hi-viz vests and radios – at the front and back of each group, to keep everyone safe.

The routes have been chosen to make the most out of the city's bike lane network. Children up to 12 are allowed to be on the sidewalk, so that's also an option at certain spots (please be mindful of pedestrians!).

##### Are scooters allowed?
Yes! Though parents should accompany kids, help them onto the sidewalk in places, if necessary, etc.

##### Do I need to ride the whole route?
If where you need to be is outside the route, you can of course peel off the group with your child but please let us know in advance or let one of the marshals know.

Students whose parents signed them up, and are joining alone, need to go the route with Bike JC. Parents also need to sign [the waiver](/bike-bus/waiver).

##### Will we be on time for school?
That's the plan, and we have calculated extra time for traffic and/or construction. Hopefully, there won't be unforeseen circumstances out of our control.

You can click around [the map](./map) to see timelines for each route.

##### Biking to school, in this weather?
Yes, biking is fun in most kinds of weather. Kids especially don't think twice about it if dressed for the occasion. Luckily there is no rain in the forecast, and we will have music on the ride to help you forget it's not yet summer.

#### Bike Bus Inspiration <a id="inspiration"></a>

##### "Oregon School’s Unique Way Of Getting Students To Class: A ‘Bike Bus’"
`)}
            <YouTubeEmbed video={"zNOb377piC8"} alt={"BikePortland – Bike Bus for Earth Day"} />
            {MD(`
##### "Kid Wheel Power: Barcelona Bici Bus is Magic"
`)}
            <YouTubeEmbed video={"5iwYkkqXTh0"} alt={"BikePortland – Bike Bus for Earth Day"} />
            {MD(`
##### "Bike Bus for Earth Day"
`)}
            <YouTubeEmbed video={"XNRnKXd9sHE"} alt={"BikePortland – Bike Bus for Earth Day"} />
            {MD(`

##### Misc links:
- "[I Started a Bike Bus, and You Can Too](https://www.wired.com/story/how-to-start-a-bike-bus/)" (WIRED)
- "[How to Set Up a Bike Bus at Your School](https://www.edutopia.org/article/set-up-bike-bus-school)"
- [walkbiketoschool.org](https://www.walkbiketoschool.org/)
- [sfbikebus.com](https://sfbikebus.com/) / [@SFBikeBus](https://twitter.com/SFBikeBus)
- [#BikeBus on Twitter](https://twitter.com/search?q=%23BikeBus)
- [@bicibuseixample](https://twitter.com/bicibuseixample)
- [@KidicalMassLond](https://twitter.com/KidicalMassLond)

##### Misc #BikeBus Tweets
`)}
            <TweetEmbed tweetId="1524441653716561920" /> {/*https://twitter.com/CoachBalto/status/1524441653716561920*/}
            <TweetEmbed tweetId="1534573151853522944" /> {/*https://twitter.com/CoachBalto/status/1534573151853522944*/}
            <TweetEmbed tweetId="1570106591067934721" /> {/*https://twitter.com/coachbalto/status/1570106591067934721*/}
            <TweetEmbed tweetId="1466994720010211328" /> {/*https://twitter.com/Qagggy/status/1466994720010211328*/}
            <TweetEmbed tweetId="1449311777309741063" /> {/*https://twitter.com/adamtranter/status/1449311777309741063*/}
            <TweetEmbed tweetId="1634991837630074880" /> {/*https://twitter.com/0jhl/status/1634991837630074880*/}
            <TweetEmbed tweetId="1487172130252931077" /> {/*https://twitter.com/lasmartinez/status/1487172130252931077*/}
            <TweetEmbed tweetId="1544073994793406464" /> {/*https://twitter.com/CarterRubin/status/1544073994793406464*/}
            <TweetEmbed tweetId="1592562809455652865" /> {/*https://twitter.com/schneider/status/1592562809455652865*/}
            {/*<TweetEmbed tweetId="1580853586400923648" /> /!*https://twitter.com/thomashallett/status/1580853586400923648*!/*/}
            {/*<TweetEmbed tweetId="1393369358194286592" /> /!*https://twitter.com/BrentToderian/status/1393369358194286592*!/*/}

            {MD(`
### Join us!
[Sign up here](/bike-bus/signup).
`)}
        </Page>
    ) }
