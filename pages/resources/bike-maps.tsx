import { Page } from "../../src/page";

const md = `
More bike maps coming soon!

[Proposed Hoboken and Jersey City official bike routes](https://www.google.com/maps/d/viewer?mid=zi9MadNOXaOk.ko62Z0yGN3E4&ie=UTF8&oe=UTF8&msa=0)

[Jersey City's Proposed Bikeway System with Major Destinations](https://www.cityofjerseycity.com/uploadedFiles/City_Government/Department_of_Housing,_Economic_Development_and_Commerce/Jersey%20City%20Bikeway%20System%20Plan%20Amended.pdf) (pdf)

[Google Maps with Crowd Sourced Lane Infill](https://www.google.com/maps/@40.7197746,-74.0737662,13.75z/data=!5m1!1e3) (Google)
`

export default function Home() { return <Page path={"/resources/bike-maps"} md={md} /> }
