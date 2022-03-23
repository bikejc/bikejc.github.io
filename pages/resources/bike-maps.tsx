import { Page } from "../../src/page";

    export default function Home() {
        return (
            <Page path={"/resources/bike-maps"}>
                <p>
             More bike maps coming soon!
             <br/>
             <br/>
             <a href="https://www.google.com/maps/d/viewer?mid=zi9MadNOXaOk.ko62Z0yGN3E4&amp;ie=UTF8&amp;oe=UTF8&amp;msa=0" target="_blank">
              Proposed Hoboken and Jersey City official bike routes
             </a>
             <br/>
             <a href="http://www.cityofjerseycity.com/uploadedFiles/City_Government/Department_of_Housing,_Economic_Development_and_Commerce/Jersey%20City%20Bikeway%20System%20Plan%20Amended.pdf" target="_blank">
              Jersey City's Proposed Bikeway System with Major Destinations
             </a>
             (pdf)
             <br/>
             <a href="https://www.google.com/maps/@40.7197746,-74.0737662,13.75z/data=!5m1!1e3" target="_blank">
              Google Maps with Crowd Sourced Lane Infill
             </a>
             (Google)
            </p>
            </Page>
        )
    }
    