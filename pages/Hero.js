import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import { Button } from "../components/Navbar.elements";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import Layout from "../components/Layout";

const SliderData = [
  {
    title: "Luxuri House in Las Vegas, Nevada",
    price: "$8,300,000",
    label: "View Home",
    alt: "House",
    src: "/images/house.jpg",
  },
  {
    title: "Houston, Texas",
    price: "$6,300,000",
    label: "View Home",
    alt: "House",
    src: "/images/house.jpg",
  },
  {
    title: "Luxuri Villa in Bali, Indonesia",
    price: "$6,300,000",
    label: "View Home",
    alt: "House",
    src: "/images/house.jpg",
  },
  {
    title: "Alajuela, Costa Rica",
    price: "$9,300,000",
    label: "View Home",
    alt: "House",
    src: "/images/house.jpg",
  },
];

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1200px;
  /* position: relative; */
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;

  h1 {
    font-size: clamp (1rem, 8vw, 8rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
`;

const Arrow = styled(IoMdArrowRoundForward)`
  ${arrowButtons}
`;

const SliderButton = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  background: #000;
  cursor: pointer;
  border-radius: 50px;
  align-items: center;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #028;
    color: #fff;
    transform: scale(1.05);
  }
`;

const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  // const timeout= useRef(null)

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    // console.log(current)
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    // console.log(current)
  };

  return (
    <Layout>
      <HeroSection>
        <HeroWrapper>
          {SliderData.map((slide, index) => {
            return (
              <HeroSlide key={index}>
                {index === current && (
                  <HeroSlider>
                 
                      <Image
                        src={slide.src}
                      layout="fill"
                      width="100%"
                      height="100%"
                        alt="Jonatan Ochoa"
                      />
             
                    <HeroContent>
                      <h1>{slide.title}</h1>
                      <p>{slide.price}</p>
                      <Button
                        primary="true"
                        css={`
                          max-width: 160px;
                        `}
                      >
                       {slide.label}  <Arrow  />
                      </Button>
                    </HeroContent>
                  </HeroSlider>
                )}
              </HeroSlide>
            );
          })}
          <SliderButton>
            <PrevArrow onClick={prevSlide} />
            <NextArrow onClick={nextSlide} />
          </SliderButton>
        </HeroWrapper>
      </HeroSection>
    </Layout>
  );
};

export default Hero;
