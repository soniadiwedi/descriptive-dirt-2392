import React, { Component } from "react";
import Slider from "react-slick";
import { Image,Heading } from "@chakra-ui/react";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class MultipleItems extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,

      };
      return (
        <div style={{paddingTop:"20px", margin:"auto",width:"94%",}}>
            <Heading fontSize={"25"} pt={"10"} pb={"30"}>Top furniture Categories </Heading>
          <Slider {...settings} >
            <div>
              <Image pr={2} src="https://www.ikea.com/images/sofa-and-armchairs-8c6cd2d72c5b7ffa6c50de384c9a74c8.jpg?f=xxs"></Image>
            </div>
            <div>
             <Image pr={2} src="https://www.ikea.com/images/ec/6d/ec6d3a24e13d4e6bf9af8461ac082044.jpg?f=xxs"></Image>
            </div>
            <div>
             <Image pr={2} src="https://www.ikea.com/images/beds-c444b5a3ed3563bf37b741a0d8ce6c97.jpg?f=xxs"></Image>
            </div>
            <div>
             <Image pr={2}  src="https://www.ikea.com/images/75/9f/759fc4bd0f1a2c7af564ccde5755e5fd.jpg?f=xxs"></Image>
            </div>
            <div>
              <Image pr={2} src="https://www.ikea.com/images/fb/98/fb98ddb584696abe4e696bc7993408e6.jpg?f=xxs"></Image>
            </div>
            <div>
            <Image pr={2} src="https://www.ikea.com/images/d7/4e/d74e72bbf58f2fea3c75f8478e943c07.jpg?f=xxs"></Image>
            </div>
            <div>
             <Image pr={2}  src="https://www.ikea.com/images/67/71/67713b64c75fbe5851c2756c2fa95db0.jpg?f=xxs"></Image>
            </div>
            <div>
              <Image pr={2}   src="https://www.ikea.com/images/59/66/59669cf5cbd26afe97eb35d05022e31a.jpg?f=xxs"></Image>
            </div> 
          </Slider>
        </div>
      );
    }
  }