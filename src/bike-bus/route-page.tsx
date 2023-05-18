import {Page} from "../page";
import MD from "../../src/md";
import {helmets} from "../img";
import {routeDisplays, routeList, routes} from "./routes";
import css from "./route-page.module.css";
import A from "next-utils/a";

export type Props = {
    inactive?: boolean
    nextDate?: string
}

export default function RoutePage(routeName: string, props?: Props) {
    const routeDisplay = routeDisplays[routeName]
    const nextDate = props ? props.nextDate : `Friday, May 19`
    const body = props?.inactive
        ? <>
            <p><strong>Next {`"${routeDisplay.title}"`} Bike Bus Date: TBD</strong></p>
            {MD(`[Sign up](/bike-bus/signup) or [get in touch](mailto:bikebus@bikejc.org) if you'd like to ride this route!`)}
        </>
        : <>
            <p><strong>Next {`"${routeDisplay.title}"`} Bike Bus Date:</strong> {nextDate}.</p>
            {MD(`[Sign up to join here](/bike-bus/signup), and [sign the waiver here](/bike-bus/waiver), or [get in touch](mailto:bikebus@bikejc.org).`)}
        </>
    const { title, summary } = routeDisplay
    const { color } = routes[routeName]
    return (
        <Page
            path={`/bike-bus/${routeName}-line`}
            banner={helmets}
            h1={<><span className={css.dot} style={{ backgroundColor: color }} /> {title}: {summary}</>}
        >
            {body}
            {routeList(routeName, routeDisplay)}
            {MD(`
### Join the Bike Bus!
[**Sign up here**](/bike-bus/signup), and tell your school-mates to as well! The more signups we get from each school, the easier it is to plan a route there, ensure there will be sufficient bike racks, etc.

[Other routes and more info here](/bike-bus), or [contact the organizers](mailto:bikebus@bikejc.org).
`)}
        </Page>
    ) }
