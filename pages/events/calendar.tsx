import {Page} from "../../src/page";
import {upcomingEventsBlurb} from "../../src/blurbs";

export default function Home() { return (<Page path={"/events/calendar"}>{upcomingEventsBlurb}</Page>) }
