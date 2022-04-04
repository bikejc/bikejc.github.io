import { Page } from "../../src/page";

const md = `
[**PLEASE NOTE: Following 2 years of cancellations due to COVID-19, we are currently hoping to bring back our Jersey City Ward Tour and other spring events for 2022, if public health and logistics considerations allow it. We will let you know here and through all our other channels, including social media and email to members. If held, the Ward Tour would be Sunday, June 5 (always the first Sunday in June).**](/events/jersey-city-ward-tour)

Naturally, most of our events involve riding bikes!

We’re best known for our [Jersey City Ward Tour](/events/jersey-city-ward-tour), our annual spring bike ride in which over a thousand riders circle the city and then participate in a giant after-party. We recently started an annual fall art-themed bike tour in conjunction with the citywide Jersey City Art &amp; Studio Tour

We also put on various smaller, informal rides that take us on two wheels to have fun, see the sights, and socialize. And we pitch in with other sustainable, people-oriented events like neighborhood cleanups and community gardening.

Join us!
`

export default function Home() { return <Page path={"/events"} banner="/files/bike-tour-back-banner.jpg" md={md} /> }
