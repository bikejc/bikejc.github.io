import TweetEmbed from "react-tweet-embed";
import {Page} from "../../src/page";
import MD from "../../src/md";
import YouTubeEmbed from "next-utils/youtube";
import {helmets} from "../../src/img";

export default function Home() { return (
    <Page
        path={"/bike-bus"}
        banner={helmets}
    >
        {MD(`
#### [Sign up](/bike-bus/signup) for the Jersey City Bike Bus
"Bike buses" are the new best way to get to school: a group ride picks up kids near their homes, and everyone rides to school together. Being in a group improves safety, and there are dedicated "marshals" assisting with intersections and making sure no one is left behind.

[**Sign up here**](/bike-bus/signup) and Bike JC will help coordinate one in your area!

#### Bike Bus Inspiration

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
