import Slider from "react-slick";
import React from "react";

import Image from "next/dist/client/image";
 

export default function Card({title}) {

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <Image src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <Image src={RightArrow} alt="nextArrow" {...props} />
  );
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    };
    return (
     <div className="card__container">
   <h1>{title}</h1>
 <Slider {...settings} className="card__container--inner">
          {((item, index) => {
            return (
              <div
              className="card__container--inner--card"
              key={index}>
                

                <Image src={item.url} alt="hero_Image" />
              
                <div className="card__container--inner--card--date_time">
                  <Image src="../public/favicon.ico" alt="time" />
                  <p>Develop Software</p>

                  <Image src="/public/favicon.ico" alt="location" style={{marginLeft:10}}/>
                  <p>Emerald App</p>
                </div>

                <h2>Responsive Desing</h2>
              </div>
            );
          })}
        </Slider>
     </div>
       
    );
  }