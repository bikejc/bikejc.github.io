import TweetEmbed from "react-tweet-embed";
import {Page} from "../src/page";
import MD from "../src/md";

export default function Home() { return (
    <Page
        path={"/bike-bus"}
        banner="/files/bike-tour-back-banner.jpg"
    >
        {MD(`
#### [Sign up](https://bit.ly/jc-bike-bus) for the Jersey City Bike Bus
"Bike buses" are the new best way to get to school. [Sign up here](https://bit.ly/jc-bike-bus) and Bike JC will help coordinate one in your area!

#### Bike Bus Inspiration
- [Oregon school’s unique way of getting students to class: a ‘bike bus’](https://www.nbcnews.com/nightly-news/video/oregon-school-s-unique-way-of-getting-students-to-class-a-bike-bus-150514245826) (NBC News)
- "[I Started a Bike Bus, and You Can Too](https://www.wired.com/story/how-to-start-a-bike-bus/)" (WIRED)
- "[How to Set Up a Bike Bus at Your School](https://www.edutopia.org/article/set-up-bike-bus-school)"
- [walkbiketoschool.org](https://www.walkbiketoschool.org/)
- [sfbikebus.com](https://sfbikebus.com/) / [@SFBikeBus](https://twitter.com/SFBikeBus)
- [@bicibuseixample](https://twitter.com/bicibuseixample)
- [@KidicalMassLond](https://twitter.com/KidicalMassLond)

##### Bike Bus Tweets
Check out [#BikeBus on Twitter](https://twitter.com/search?q=%23BikeBus):
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
        <TweetEmbed tweetId="1580853586400923648" /> {/*https://twitter.com/thomashallett/status/1580853586400923648*/}
        <TweetEmbed tweetId="1393369358194286592" /> {/*https://twitter.com/BrentToderian/status/1393369358194286592*/}

    {MD(`
### Join us!
[Sign up here](https://bit.ly/jc-bike-bus).
`)}
    </Page>
) }
