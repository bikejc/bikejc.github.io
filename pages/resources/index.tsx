import {Page} from "../../src/page";

const md = `
Here are some things we thought you might find useful, from maps to rules of the road and links to other relevant web sites.

If you know of other items we should stash here, [please let us know](/contact-us) — especially if you can help create new resources for us riders!
`

export default function Home() { return <Page path={"/resources"} md={md} /> }
