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
        slidesToScroll: 3,
      };
      return (
        <div style={{paddingTop:"20px", margin:"auto",width:"94%",}}>
            <Heading fontSize={"25"} pt={"10"} pb={"30"}>Categories for better storage and organisation</Heading>
          <Slider {...settings} >
            <div>
              <Image pr={2} src="https://www.ikea.com/images/66/a7/66a7ad4f93664a50fa386f545860a313.jpg?f=xxs"></Image>
            </div>
            <div>
             <Image pr={2} src="https://www.ikea.com/images/50/e9/50e95854f19088058cc930d33913e285.jpg?f=xxs"></Image>
            </div>
            <div>
             <Image pr={2} src="https://www.ikea.com/images/7d/6b/7d6b63203c8e2ddaa5da559889004299.jpg?f=xxs"></Image>
            </div>
            <div>
             <Image pr={2}  src="https://www.ikea.com/images/29/e2/29e200bea35809affce65080b33e8632.jpg?f=xxs"></Image>
            </div>
            <div>
              <Image pr={2} src="https://www.ikea.com/images/c7/85/c7853e88497ae33a463af264e2638233.jpg?f=xxs"></Image>
            </div>
            <div>
            <Image pr={2} src="https://www.ikea.com/images/12/7b/127b63b070df8db01ae9b26bf9eb2a8f.jpg?f=xxs"></Image>
            </div>
            <div>
             <Image pr={2}  src="https://www.ikea.com/images/4e/a9/4ea92836239c90b4ca8c40409a639cc8.jpg?f=xxs"></Image>
            </div>
            <div>
              <Image pr={2}   src="https://www.ikea.com/images/8c/13/8c13033770991ef467371a52fbf56c3c.jpg?f=xxs"></Image>
            </div> 
          </Slider>
        </div>
      );
    }
  }