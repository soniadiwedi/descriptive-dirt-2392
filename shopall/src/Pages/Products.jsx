import { Box, Grid, GridItem ,Heading,Image,Text,Link} from '@chakra-ui/react'

import {Link as lanvlink} from "react-router-dom"
import Footers from './Footer'

export default function Products() {

    return <>
    <Box margin="auto" width="90%" marginTop="50px"  marginBottom="50px" >  
    <Heading>Rooms's</Heading>

<Grid templateColumns='repeat(4, 1fr)'   gap={6}>
   
  <GridItem > <Link to="/products/bedroome" as={lanvlink}> <Image src="https://www.ikea.com/images/a-blue-blakullen-bed-with-corner-headboard-in-a-bright-room--a96b30df3a5d0fc6aacc7ac66604dc61.jpg?f=xxxs"/> <Text>Bedroom</Text></Link></GridItem>
  
  <GridItem > <Image src='https://www.ikea.com/images/a-light-living-room-centred-around-a-jaettebo-three-and-a-ha-d80334e03b4e4094d0e02846c7de2e85.jpg?f=xxxs'/><Text>Living room</Text> </GridItem>

  <GridItem > <Image src='https://www.ikea.com/images/a-bedroom-with-a-kura-reversible-bed-and-another-bed-paralle-2e66ab0bad65e50092be14cf43bc687b.jpg?f=xxxs' /><Text>children's room</Text></GridItem>
  
  <GridItem ><Image src="https://www.ikea.com/images/a-colourful-room-with-a-workspace-centred-around-a-white-tro-2623e9c04d7e384b20c6f291ca946779.jpg?f=xxxs"/><Text>Home office</Text></GridItem>
  
  <GridItem ><Image src="https://www.ikea.com/images/a-metod-kitchen-in-white-with-stairs-to-the-side-and-a-landi-29ded8d41b2bdc456bd69c0a1e313869.jpg?f=xxxs"/><Text>Kitchen</Text></GridItem>
  
  <GridItem ><Image src="https://www.ikea.com/images/a-light-kitchen-with-aelvsta-rattan-seat-and-black-frame-cha-b3d791d36d2c081be8302c8a4793dd1e.jpg?f=xxxs"/><Text>Dining room</Text></GridItem>
  
  <GridItem ><Image src='https://www.ikea.com/images/a-hemnes-mirror-cabinet-in-white-with-bathroom-items-on-the--a59784ae57d8595cc51ea2e5216023b3.jpg?f=xxxs' /><Text>Bathroom</Text></GridItem>
  
  <GridItem ><Image src='https://www.ikea.com/images/a-lush-outdoor-space-with-a-dark-grey-viholmen-dining-furnit-a95542e7baeb5dd2b77e4a9e6e17d7e8.jpg?f=xxxs' /><Text>Outdoor</Text></GridItem>
</Grid>
</Box>  

<hr />

<Box margin="auto" width="90%" marginTop="50px"marginBottom="50px" >
<Heading>Furniture's</Heading>
<Grid templateColumns='repeat(4, 1fr)'   gap={6}>
<GridItem> <Image src='https://www.ikea.com/global/assets/navigation/images/gaming-chairs-47067.jpeg?imwidth=400'/> <Text>Gaming Furniture</Text> </GridItem>
<GridItem> <Image src='https://www.ikea.com/global/assets/navigation/images/modular-sofas-16238.jpeg?imwidth=400'/> <Text>Sofa</Text> </GridItem>
<GridItem> <Image src='https://www.ikea.com/global/assets/navigation/images/outdoor-sofa-sets-21960.jpeg?imwidth=500'/> <Text>Furniture sets</Text> </GridItem>
<GridItem> <Image src='https://www.ikea.com/global/assets/navigation/images/storage-shelves-units-10397.jpeg?imwidth=500'/> <Text>Bookcases & shelving units</Text> </GridItem>
<GridItem> <Image src='https://www.ikea.com/in/en/navigation/images/tv-benches-10810.jpeg?imwidth=500'/> <Text>TV & media furniture</Text> </GridItem>
<GridItem> <Image src='https://www.ikea.com/global/assets/navigation/images/outdoor-seating-700350.jpeg?imwidth=400'/> <Text>Outdoor furniture</Text> </GridItem>
<GridItem> <Image src='https://www.ikea.com/global/assets/navigation/images/toy-storage-20474.jpeg?imwidth=500'/> <Text>Nursery furniture</Text> </GridItem>
<GridItem> <Image src='https://www.ikea.com/global/assets/navigation/images/cafe-chairs-19144.jpeg?imwidth=500'/> <Text>Café furniture</Text> </GridItem>
<GridItem> <Image src='https://www.ikea.com/in/en/navigation/images/childrens-furniture-18767.jpeg?imwidth=300'/> <Text>Children's furniture</Text> </GridItem>
<GridItem> <Image src='https://www.ikea.com/global/assets/navigation/images/wardrobes-19053.jpeg?imwidth=300'/> <Text>Wordrobes</Text> </GridItem>
<GridItem> <Image src='https://www.ikea.com/global/assets/navigation/images/armchairs-chaise-longues-fu006.jpeg?imwidth=300'/> <Text>Chairs</Text> </GridItem>
<GridItem> <Image src='https://www.ikea.com/global/assets/navigation/images/bar-furniture-16244.jpeg?imwidth=300'/> <Text>Bar furniture</Text> </GridItem>
</Grid>
</Box>
<hr />



<Box margin="auto" width="90%" marginTop="50px" marginBottom="50px">
<Heading>Smart air purifiers & filters</Heading>
<Grid templateColumns='repeat(4, 1fr)'   gap={6}>
    <GridItem><Image src='https://www.ikea.com/global/assets/navigation/images/smart-air-purifiers-56472.jpeg?imwidth=400'/><Text>Smart Air purifire's</Text></GridItem>
    <GridItem><Image src='https://www.ikea.com/global/assets/navigation/images/smart-air-purifiers-56472.jpeg?imwidth=400'/><Text>Smart Lighting</Text></GridItem>
    <GridItem><Image src='https://www.ikea.com/global/assets/navigation/images/smart-air-purifiers-56472.jpeg?imwidth=400'/><Text>Smart system and controls</Text></GridItem>
    <GridItem><Image src='https://www.ikea.com/global/assets/navigation/images/wi-fi-speakers-46194.jpeg?imwidth=400'/><Text>Wifi speakers</Text></GridItem>
</Grid>




</Box>


<Footers/>
</>
   
   
};
