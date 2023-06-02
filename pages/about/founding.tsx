import { Page } from "../../src/page";
import {aboutBlurb} from "./index";

const md = `
In 2009, Jersey City had a growing community of bicyclists but no advocacy group. Plenty of folks
were talking about the need for a group to provide a voice for bicyclist and pedestrian
concerns. Prompted by Civic JC organizer Dan Levin, they came together the first time in
December 2009 at a local pub for first meeting of what would become Bike JC; they included
representatives of Grove Street Bicycles, Rodney Morweiser and Mike Wilson; owners of bike
company Easy Riders, Christopher Englese and Damian Wieczorek; and community members Carly
Berwick, Kris Reiss, Andres Palmiter, Mike Selender, and others. The group quickly set the
template for what would become its mission and method: horizontal decision-making guiding by
strong principles of inclusiveness, access, safety, environmental stewardship, and low-cost
transit for all.

All hands joined to volunteer and build a group that would quickly decide a name, design a logo
and look, launch a web site and secure social media handles --both coordinated by founding board
member Andres Palmiter--and elect a board and first president, Carly Berwick.

Throughout the first months, in spring 2010, the group worked with the city and Hudson TMA to add
bike racks to Journal Square, to organize Bike to Work Week, and to stage the first Ward Tour,
led by Englese and Wieczorek. Organizers expected 50-100 riders to show: nearly 500 arrived.
Aside from being a fun time, the Ward Tour allowed the greater public to see the strength of the
local cycling community. In 2015 more than 1500 people rode--that's a lot of empowered community
members and voters.

During this first year Bike JC also worked with the City of Jersey City, particularly Doug
Greenfeld and the Mayors Office, culminating with the city painting the first bike lane along
Grove Street, and releasing a comprehensive bike plan.

Along with Bike JC, the citizens of Jersey City have supported a growing bike culture through key
allies including:
- The East Coast Greenway Alliance, which put in bicycle signage throughout Jersey City in
2008
- The Hudson County Transportation Management Association -City of Jersey City, which
implemented bike route signage and a network of bike lanes
- Local bike shops Grove Street Bicycles, Jersey Cycles, and the Bike Hub Bike
JC’s annual events also include the Community Garden Bike Tour and the BikeJCAST. Equally
critical to our mission is our ongoing support for expanded and connected bike lanes, traffic
calming, public information about safe cycling, and dedicated bike lanes throughout the
city.
`

export default function Home() { return <Page path={"/about/founding"} description={aboutBlurb} md={md} /> }
