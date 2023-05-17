import {Page} from "../page";
import MD from "../../src/md";
import {helmets} from "../img";
import {routeDisplays, routeList, routes} from "./routes";
import css from "./route-page.module.css";
import A from "next-utils/a";

export default function RoutePage(routeName: string, props?: { nextDate?: string }) {
    const nextDate = (props ? props.nextDate : `Friday, May 19`) || "TBD"
    const routeDisplay = routeDisplays[routeName]
    const { title, rwgps } = routeDisplay
    const { color } = routes[routeName]
    return (
        <Page
            path={`/bike-bus/${routeName}-line`}
            banner={helmets}
            h1={<><span className={css.dot} style={{ backgroundColor: color }} /> {title}</>}
        >
            <p><strong>Next Bike Bus:</strong> {nextDate}. <A href={"/bike-bus/signup"}><strong>Sign up to join here.</strong></A>, and <A href={"/bike-bus/waiver"}>sign the waiver here</A></p>
            {routeList(routeName, routeDisplay)}
            {MD(`
### Join the Bike Bus!
[**Sign up here**](/bike-bus/signup), and tell your school-mates to as well! The more signups we get from each school, the easier it is to plan a route there, ensure there will be sufficient bike racks, etc.

[Other routes and more info here](/bike-bus), or [contact the organizers](mailto:bikebus@bikejc.org).
`)}
        </Page>
    ) }
