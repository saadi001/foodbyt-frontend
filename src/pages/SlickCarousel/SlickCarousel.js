import React, { Component } from "react";
import Slider from "react-slick";
import './SlickCarousel.css'
import img from '../../Asset/Image/Food1.png'

export default class SlickCarousel extends Component {
     render() {
          const settings = {
               dots: true,
               infinite: true,
               speed: 2000,
               autoplay: false,
               rows: 1,
               slidesToShow: 1,
               slidesToScroll: 1,
               pauseOnHover: true
          };
          return (
               <div>
                    <h2> Single Item</h2>
                    <Slider {...settings}>
                         <div className="border mr-3">
                              <h1>1</h1>
                         </div>                         
                         <div className="border mr-3">
                              <h1>1</h1>
                         </div>                         
                         <div className="border mr-3">
                              <h1>1</h1>
                         </div>                         
                         <div className="border mr-3">
                              <h1>1</h1>
                         </div>                         
                         <div className="border mr-3">
                              <h1>1</h1>
                         </div>                         
                         <div className="border mr-3">
                              <h1>1</h1>
                         </div>                         
                         <div className="border mr-3">
                              <h1>1</h1>
                         </div>                      
                         
                        
                    </Slider>
               </div>
          );
     }
}