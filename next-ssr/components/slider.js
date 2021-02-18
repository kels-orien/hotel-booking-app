import React, { Component } from "react";
import Slider from "react-slick";




export default class ImageSlider extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className="responsive-slider sph-slider slick-initialized slick-slider">
        <Slider {...settings}>
          {this.props.images.map(function(image) {
            return (   
                <img src ={image} key={image}/>
            );
          })}
        </Slider>
      </div>
    );
  }
}