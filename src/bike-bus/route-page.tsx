import {Page} from "../page";
import MD from "../../src/md";
import {helmets} from "../img";
import * as routes from "./routes";
const {routeList, routesByName} = routes
import Dot from "../dot";

export type Props = {
    inactive?: boolean
    nextDate?: string
}

export default function RoutePage(name: string, props?: Props) {
    const route = routesByName[name]
    const nextDate = props ? props.nextDate : routes.nextDate
    const body = route.active
        ? <>
            <p><strong>Next {`"${route.title}"`} Bike Bus Date:</strong> {nextDate}.</p>
            {MD(`[Sign up to join here](/bike-bus/signup), and [sign the waiver here](/bike-bus/waiver), or [get in touch](mailto:bikebus@bikejc.org).`)}
        </>
        : <>
            <p><strong>Next {`"${route.title}"`} Bike Bus Date: TBD</strong></p>
            {MD(`[Sign up](/bike-bus/signup) or [get in touch](mailto:bikebus@bikejc.org) if you'd like to ride this route!`)}
        </>
    const { title, summary } = route
    const { color } = routesByName[name]
    return (
        <Page
            path={`/bike-bus/${name}-line`}
            banner={helmets}
            h1={<><Dot color={color} style={{ border: "1px solid black", marginRight: "0.1em" }} /> {title}: {summary}</>}
        >
            {body}
            {routeList(route)}
            {MD(`
### Join the Bike Bus!
[**Sign up here**](/bike-bus/signup), and tell your school-mates to as well! The more signups we get from each school, the easier it is to plan a route there, ensure there will be sufficient bike racks, etc.

[Other routes and more info here](/bike-bus), or [contact the organizers](mailto:bikebus@bikejc.org).
`)}
        </Page>
    ) }
