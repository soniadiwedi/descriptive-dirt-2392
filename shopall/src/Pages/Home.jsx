import { Grid, GridItem, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NewProducts from "../Components/NewProducts";
import Carosals from "../Pages/Carosals";
import ImageCarausel from "../Pages/ImageCarausel";
import Footers from "./Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function Home() {
  const [data, setdata] = useState([]);
  async function fetchData() {
    try {
      let res = await fetch(
        `https://639b295bd5141501974d54b3.mockapi.io/bedrooms`
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

  const product = data.map((el) => {
    return <NewProducts {...el} />;
  });

  return (
    <>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
        marginLeft="60px"
        marginRight="50px"
      >
        <GridItem rowSpan={2} colSpan={2}>
          <Image
            src={
              "https://www.ikea.com/images/74/d5/74d5217edf92fc4690c23b44fbd151bc.png?f=xl"
            }
          />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Image
            height={"100%"}
            src="https://www.ikea.com/ext/ingkadam/m/7cdbfd13536f1864/original/PH183006.jpg?f=xs"
          />{" "}
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Image
            height={"100%"}
            src="https://www.ikea.com/ext/ingkadam/m/6f5c999e57b0899c/original/PH188348-crop001.jpg?f=xs"
          />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Image src="https://www.ikea.com/ext/ingkadam/m/6e59dcdff4cb6ebe/original/PH185829-crop001.jpg?f=xs" />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Image src="https://www.ikea.com/ext/ingkadam/m/2cdb8876440d3bfe/original/PH185831-crop001.jpg?f=xs" />
        </GridItem>
      </Grid>

      <Carosals />
      <ImageCarausel />

      <Carousel responsive={responsive}>{product}</Carousel>

      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
        marginLeft="60px"
        marginRight="50px"
        marginTop="60px"
      >
        <GridItem rowSpan={2} colSpan={2}>
          <Image
            src={
              "https://www.ikea.com/ext/ingkadam/m/799f68cc5de0ac6b/original/PH189240.jpg?f=xl"
            }
          />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Image
            height={"100%"}
            src="https://www.ikea.com/ext/ingkadam/m/6efbc36541036f65/original/PH189222.jpg?f=xs"
          />{" "}
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Image
            height={"100%"}
            src="https://www.ikea.com/ext/ingkadam/m/6f5c999e57b0899c/original/PH188348-crop001.jpg?f=xs"
          />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Image src="https://www.ikea.com/ext/ingkadam/m/329772020dd61646/original/PH189251.jpg?f=xs" />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Image src="https://www.ikea.com/ext/ingkadam/m/943c2a55da77e47/original/PH189365.jpg?f=xs" />
        </GridItem>
      </Grid>

      <Footers />
    </>
  );
}
