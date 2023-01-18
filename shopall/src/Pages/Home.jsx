import { Grid, GridItem,Image } from '@chakra-ui/react'
import Carosals from '../Pages/Carosals';
import Carousel from '../Pages/Carosals';
import Footers from './Footer';

export default function Home() {
    return<>
        <Grid
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(4, 1fr)'
            gap={4}
            marginLeft="60px"
            marginRight="50px"
            >
            <GridItem rowSpan={2} colSpan={2} ><Image src={"https://www.ikea.com/images/74/d5/74d5217edf92fc4690c23b44fbd151bc.png?f=xl"} /></GridItem>
            <GridItem rowSpan={1} colSpan={1}  ><Image height={"100%"} src='https://www.ikea.com/ext/ingkadam/m/7cdbfd13536f1864/original/PH183006.jpg?f=xs'/>  </GridItem>              
            <GridItem rowSpan={1} colSpan={1}  ><Image  height={"100%"}  src='https://www.ikea.com/ext/ingkadam/m/6f5c999e57b0899c/original/PH188348-crop001.jpg?f=xs'/></GridItem>
            <GridItem rowSpan={1} colSpan={1}  ><Image  src='https://www.ikea.com/ext/ingkadam/m/6e59dcdff4cb6ebe/original/PH185829-crop001.jpg?f=xs'/></GridItem>
            <GridItem rowSpan={1} colSpan={1}  ><Image src='https://www.ikea.com/ext/ingkadam/m/2cdb8876440d3bfe/original/PH185831-crop001.jpg?f=xs'/></GridItem>
        </Grid>


     
        <Carosals/> 
        {/* <Footers/> */}


        
    </>
};
