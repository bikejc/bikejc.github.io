import { Page } from "../../../src/page";

const md = `
##### RFP- Call for Designs for Bike JC’s 7th Annual Ward Tour Poster!

Bike JC needs a poster for our big upcoming bike tour, the Jersey City Ward Tour, and we’re calling on the brilliant artists of Jersey City to blow our minds.

**The deadline for proposals is April 11th, with the chosen artist/design receiving $750 for their work.**

We’ll choose a design by April 13th; the finished work is due April 18th.

We are asking for visual representations in any two-dimensional media of the idea of open space and cycling in Jersey City. There is plenty of current news around local cycling and open space, from the introduction of bike lanes and the bike share system, Citi Bike, to the continued highrise boom and the recent threat of opening Liberty State Park to development. Artists are encouraged to think broadly and historically as well.

Art can be in any format, as long as we can scan it or photograph it. Any electronic file submission should be at least 300 dpi at 100% and should be uploaded to Dropbox and shared with chris@bikejc.org.

More information about the Ward Tour and past posters can be found on our website ( bikejc.org ) and via our Facebook page. The key concepts to visualize are cycling as local transit and open space. Additional inspiration can be found in the six wards, diverse neighborhoods, local points of interest, bicycling motifs, or the tour map. **(See some samples from past years below!)**

Some previous posters have also incorporated references to the anniversary number of each tour; this year is number 7.

Our volunteers will hang the posters all over the city during May to promote the Tour, which will be held June 5. We may also incorporate the poster art into accompanying promotional media, such as small palm cards.

We at Bike JC are all excited to see your submissions!

!["previous ward tour posters"](/files/wardtourposters.jpg)
`

export default function Home() { return <Page path={"/news/articles/design-bike-jcs-7th-annual-ward-tour-poster"} md={md} /> }
