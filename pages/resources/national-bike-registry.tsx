import {Pg} from "../../src/page";
import React from 'react'

const md = `
Thousands of stolen bikes are recovered by police but few are returned to their owners. The National Bike Registry helps authorities locate you when they find your bike.

Register your bike online in these four easy steps:
1. Find the serial number on your bike.
2. [Go to NationalBikeRegistry.com to register online](https://nationalbikeregistry.com/register.html).
    This registry charges a fee ($10 for 10 years) but it's the registry used as a central database accessible by police
3. [Go to Bike Index to register online](https://bikeindex.org/how_it_works).
    - This registry is free and easily searchable. Many bike stores register information here in addition to scores of community partners nationwide.
    - You can also register your bike and pay your fees at your local bike retailer, library branch or police department.
4. In 2 to 3 weeks your registration certificate and bike label will be mailed to you.

**If your bike is stolen or you think you've come across someone else's stolen bike**, submit your bike's information
[or look for a match](https://bikeindex.org/bikes?utf8=%E2%9C%93&query=&proximity=Jersey+City+New+Jersey&proximity_radius=5&stolen=true&non_stolen=&non_proximity=&serial=)
using the [Bike Index](https://bikeindex.org/bikes/new?stolen=true) for free!
`

const Home = Pg({ path: "/resources/national-bike-registry", md, })
export default Home
