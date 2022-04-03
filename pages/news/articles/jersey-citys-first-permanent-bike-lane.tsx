import { Page } from "../../../src/page";

const md = `
Three and a half years after Bike JC formed to advocate for safe cycling throughout Jersey City, city workers striped the city's first permanent bike lane in white paint earlier this week on Grove Street.

A paint-over of the trial lane put down last year, the lane represents the first concrete infrastructure improvement for safe bicycling in the city. Three more miles of bike lanes will be painted this year on roads that are due for re-paving on last year's schedule.

The Grove Street lanes are short but sweet, running from the PATH station to Grand Street via the front of city hall. Often crowded by double-parked cars and trucks in one of the more congested areas of the city, the lanes are well situated for the practice of traffic law enforcement as well as cycling etiquette.
`

export default function Home() { return <Page path={"/news/articles/jersey-citys-first-permanent-bike-lane"} md={md} /> }
