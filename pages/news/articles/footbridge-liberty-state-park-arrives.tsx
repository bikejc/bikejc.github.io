import { Page } from "../../../src/page";

const md = `
The new ped-bike bridge to Liberty State Park from Jersey Avenue has arrived. City engineers expect it to be fully in place by the end of May and are working feverishly towards Memorial Day.

Now that the bridge is here, workers have to place pilings that descend 90 feet into the mud and muck below the bridge, then place concrete support on top. Last comes the bridge, which is a full 10 feet wide, the same width as the wood planks of the previous bridge. Those planks were not all passable, and only 6 feet of the bridge was actually usable--that is, until it met its end during Hurricane Sandy.

Most of the funding for the replacement bridge comes from FEMA. Advocacy by local residents and groups such as Friends of Liberty State Park, in concert with city planning and engineering, helped get the bridge back quickly, in new and improved shape. The previous wood plank bridge was infamous for its seaward tilt, gaping holes, and the brackish mix of effluents that would bury it after a hard rain.
`

export default function Home() { return <Page path={"/news/articles/footbridge-liberty-state-park-arrives"} md={md} /> }
