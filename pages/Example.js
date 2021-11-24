import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import { Button } from "../components/Navbar.elements";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import Link from 'next/link';

const SliderData = [
  {
    title: "Curso de JAVASCRIP",
    price: "$8,300,00",
    label: "View Home",
    alt: "House",
    src: "/images/Group 16.png",
  },
  {
    title: "Curso de PHP",
    price: "$6,300,00",
    label: "View Home",
    alt: "House",
    src: "/images/Group 13.png",
  },
  {
    title: "Curso de REACT JS",
    price: "$6,300,00",
    label: "View Home",
    alt: "House",
    src: "/images/Group 17.png",
  },
  {
    title: "Curso de HTML",
    price: "$9,300,00",
    label: "View Home",
    alt: "House",
    src: "/images/Group 14.png",
  },
];

const ExampleSection = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const ExampleWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const ExampleSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const ExampleSlider = styled.div`
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

const ExampleContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #000;

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

const Arrow = styled(IoMdArrowRoundForward)``;

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
    background: #ff6961;
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

const Example = ({ slides }) => {
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
    <>
      <ExampleSection>
        <ExampleWrapper>
          {SliderData.map((slide, index) => {
            return (
              <ExampleSlide key={index}>
                {index === current && (
                  <ExampleSlider>
                    <Image
                      src={slide.src}
                      layout="fill"
                      width="100%"
                      height="100%"
                      alt="Jonatan Ochoa"
                    />

                    <ExampleContent>
                      <h1>{slide.title}</h1>
                      <p>{slide.price}</p>
                      <Link href="/" passHref>
                        <Button
                          primary="true"
                          css={`
                            max-width: 160px;
                          `}
                        >
                          {slide.label} <Arrow />
                        </Button>
                      </Link>
                    </ExampleContent>
                  </ExampleSlider>
                )}
              </ExampleSlide>
            );
          })}
          <SliderButton>
            <PrevArrow onClick={prevSlide} />
            <NextArrow onClick={nextSlide} />
          </SliderButton>
        </ExampleWrapper>
      </ExampleSection>
    </>
  );
};

export default Example;
