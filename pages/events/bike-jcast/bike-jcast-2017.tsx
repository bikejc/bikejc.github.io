import { Page } from "../../../src/page";

const md = `
Friday, Oct. 13, we’ll hold a Very Special Light-up Night Ride ending at the opening party for the annual city-wide celebration of the arts, the Jersey City Art &amp; Studio Tour.

About the official JCAST party: The Kick-Off will be from 7:00PM - 9:00 PM held at the JCAST 2017 Kick-off Night Event at the Mack Cali Atrium, 210 Hudson Street, Jersey City, NJ (near Exchange Place).

On Saturday, Oct. 14th and Sunday, Oct. 15th join Bike JC's **"Bike To The Art"** bicycle rides for the Jersey City Art Studio Tour JCAST!

### BikeJC JCAST Bike Tour Routes

**ALL RIDES DEPART AND RETURN TO GROVE ST. PATH PLAZA!!!**

#### Friday 10/13 Light UP ride to Opening Night Party

**Saturday 12noon - 3pm Downtown Ride**
- Art House 300 Coles St.
- Hamilton House 255 Brunswick
- Merseles Studio 339 Newark Ave.
- Drawing Rooms 180 Grand St
- The Oakman 160 1st St.)

**Saturday 3pm - 6pm Greenville, Bergen/Lafayette**
- Project Greenville 128 Winfield Ave
- Ocean Green Gallery 744 Ocean Ave
- Pacific Flea Gallery
- 149 Pacific Ave
- The Artisits of 111 First Street
- 395 Halladay St. #2
- Deep Space Gallery 2nd Fl THE HIVE JC
- 77 Cornelison Ave

**Sunday 12noon - 3pm Heights Ride**
- Jim Fischer's Art Studio
- 530 Liberty Ave
- The Statuary 53 Congress St.
- 107 Bowers Gallery and Art Space 107 Bowers St.
- Pershing Field Community Center
- 201 Central Ave. (enter from Summit Ave) - Musicians Building
- 130 Central Ave
- Prime Gallery
- 351 Palisade Ave
- Madill Studiio
- 58 Laidlaw Ave

**Sunday 3pm - 6pm WEST / MCGINLEY Sq. / JSQ**
- Independent Art World Gallery
- 715 Newark Ave (John Ruddy &amp; Lillian Khan)
- The Triangle Building - 2800 JFK Blvd, 1st Floor (37 artists)
- El Cocotero
- 749 Bergen Ave (Multiple Venezuelan artists)
- Jersey City Bicycle Co
- 687 Montgomery St (Chris De Los Angeles’ bike shop, work by our friend Daniel “Kodaq” Morteh &amp; 2 others, quick stop)
- Shua Space - 340 Summit Ave (5 artists in small but cool space)
- Dineen/Hull gallery @ HCCC
- 71 Sip Ave (Kayt Hester, 1 other exhibit, closing party till 8)

**ALL RIDES DEPART AND RETURN TO GROVE ST. PATH PLAZA!!!**
`

export default function Home() { return <Page path={"/events/bike-jcast/bike-jcast-2017"} md={md} /> }
