import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NewProducts from "../Components/NewProducts";
import { Image } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footers from "./Footer";

export default function NewinShopAll() {
  const [data, setdata] = useState([]);
  async function fetchData() {
    try {
      let res = await fetch(
        `https://639b295bd5141501974d54b3.mockapi.io/Todo`
      );
      let data = await res.json();
      setdata(data);
      console.log(data);
    } catch (err) {
      console.log("err");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  //////////////////////////////////////////
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

const product=data.map((el)=>{
    return <NewProducts {...el} el={el}/>
})

  return (
    <>
      <Carousel responsive={responsive}>
        {product}
      </Carousel>
      <hr />
      
<Box margin="auto" width="90%">
    <Heading marginBottom="20px">More ideas and inspiration</Heading>

<Grid

templateRows="repeat(3,1fr)"
templateColumns="repeat(3, 1fr)"
gap={4}
>
<GridItem rowSpan={1} colSpan={1} bg="tomato"><Image src="https://www.ikea.com/ext/ingkadam/m/a7532e55cad502b/original/PH182846.jpg?f=s" /></GridItem>
<GridItem rowSpan={1} colSpan={1} bg="tomato"><Image src="https://www.ikea.com/ext/ingkadam/m/22395f29ca2fdb77/original/PH182851.jpg?f=s"/></GridItem>
<GridItem rowSpan={1} colSpan={1} bg="tomato"><Image src="https://www.ikea.com/ext/ingkadam/m/2f0d4d05d0de4324/original/PH166966-crop002.jpg?f=s"/></GridItem>
<GridItem rowSpan={1} colSpan={1} bg="tomato"><Image src="https://www.ikea.com/ext/ingkadam/m/5895a9c8d2d6c135/original/PH164897-crop001.jpg?f=s"/></GridItem>
<GridItem rowSpan={1} colSpan={1} bg="tomato"><Image src="https://www.ikea.com/ext/ingkadam/m/7ee41ebd0d8683be/original/PH166339-crop001.jpg?f=s"/></GridItem>
<GridItem rowSpan={1} colSpan={1} bg="tomato"><Image src="https://www.ikea.com/ext/ingkadam/m/9be9468b75d4c89/original/PH182077-crop001.jpg?f=s"/></GridItem>
<GridItem rowSpan={1} colSpan={1} bg="tomato"><Image src="https://www.ikea.com/ext/ingkadam/m/21238b08f8ba3b52/original/PH168028-crop001.jpg?f=s"/></GridItem>
<GridItem rowSpan={1} colSpan={1} bg="tomato"><Image src="https://www.ikea.com/ext/ingkadam/m/1852a0e0ad76152f/original/PH179305-crop001.jpg?f=s"/></GridItem>
<GridItem rowSpan={1} colSpan={1} bg="tomato"><Image src="https://www.ikea.com/ext/ingkadam/m/1972481600074d5b/original/PH183287.jpg?f=s"/></GridItem>


</Grid>
</Box>

    <Footers/>
    </>
  );
}
