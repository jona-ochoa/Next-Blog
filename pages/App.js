import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const SliderData = [
  {
    id: "1",
    title: "Software development",
    description:
      " Create complex enterprise software, ensure reliable software integration, modernise your legacy system.",
    alt: "slider1",
    src: "/images/Group 16.png",
  },
  {
    id: "2",
    title: "UX/UI Desing",
    description:
      "Build the product you need on time with an experienced team that uses a clear and effective design process.",
    alt: "slider2",
    src: "/images/Group 13.png",
  },
  {
    id: "3",
    title: "Web Development",
    description: "We offer experience in building a new product",
    alt: "slider3",
    src: "/images/Group 17.png",
  },
  {
    id: "4",
    title: "Mobile App Development",
    description:
      "Create an impactful mobile app that fits your brand and industry within a shorter time frame.",
    alt: "slider4",
    src: "/images/Group 14.png",
  },
 
];

const ExampleSection = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: #345345;
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
  }
`;

const ExampleContent = styled.div`
  width: 300px;
  height: 450px;
  background: #fff;
  border-radius: 18px;
  padding-left: 1rem;
  padding-top: 1rem;
  justify-content: center;
  margin: 1rem;
  display: inline-table;
  cursor: pointer;
  z-index: 2;

  &:hover {
    transition: all 0.3s ease-out;
    filter: drop-shadow(0px 4px 29px rgba(0, 0, 0, 0.25));
  }

  @media only screen and (max-width: 1024px) {
    width: 280px;
  }

  h1 {
    font-size: clamp (1rem, 8vw, 8rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
    color: #025893;
    width: 221px;
  }

  p {
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    color: #025893;
    max-width: 250px;
    @media only screen and (max-width: 1024px) {
      max-width: 220px;
      margin-bottom: auto;
    }
  }
`;

const Arrow = styled(IoMdArrowRoundForward)``;

const SliderButton = styled.div`
  position: absolute;
  right: -20px;
  display: flex;
  z-index: 10;

  @media only screen and (max-width: 660px) {
    right: -15px;
  }
`;
const SliderButtonLeft = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  z-index: 10;
  @media only screen and (max-width: 1024px) {
    left: 0px;
  }
`;

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #025893;
  background: #edfdf6;
  cursor: pointer;
  border-radius: 30px;
  align-items: center;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  @media only screen and (max-width: 660px) {
    width: 20px;
    height: 20px;
  }
`;

const PrevArrow = styled(IoIosArrowBack)`
  ${arrowButtons}
`;

const NextArrow = styled(IoIosArrowForward)`
  ${arrowButtons}
`;

const App = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
      <ExampleSection>
        <ExampleWrapper>
          {SliderData.map((slide,index, id) => {
            return (
              <ExampleSlide key={slide.id}>
                {index === current && (
                  <ExampleSlider>
                    <ExampleContent>
                      <Image
                        src={slide.src}
                        width="100"
                        height="100"
                        objectFit="cover"
                        alt={slide.alt}
                      />
                      <h1>{slide.title}</h1>
                      <p>{slide.description}</p>
                    </ExampleContent>
                  </ExampleSlider>
                )}
              </ExampleSlide>
            );
          })}
          <SliderButton>
            <NextArrow onClick={nextSlide} />
          </SliderButton>
          <SliderButtonLeft>
            <PrevArrow onClick={prevSlide} />
          </SliderButtonLeft>
        </ExampleWrapper>
      </ExampleSection>
    </>
  );
};

export default App;

// import Image from "next/dist/client/image";
// import Slider from "react-slick";
// import { Component } from "react";
// import {
//   ProjectContainer,
//   Heading,
//   Card,
//   Subtitle,
//   Topline,
// } from "../components/elements/project.elements";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "black" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "flex", background: "black" }}
//       onClick={onClick}
//     />
//   );
// }

// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       nextArrow: <SampleNextArrow />,
//       prevArrow: <SamplePrevArrow />,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 4,
//             slidesToScroll: 2,
//             infinite: true,
//             dots: true,
//           },
//         },
//         {
//           breakpoint: 760,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//           },
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//           },
//         },
//       ],
//     };
//     return (
//       <>
//         <ProjectContainer>
//           <Heading>What we can do four you...</Heading>
//           <div>
//           <Slider {...settings} layout="responsive">
//             <div>
//               <Card>
//                 <Image
//                   src="/images/box2.png"
//                   alt="box-images"
//                   width={100}
//                   height={100}
//                   objectFit="cover"
//                 />
//                 <Subtitle>Software development</Subtitle>
//                 <Topline>
//                   Create complex enterprise software, ensure reliable software
//                   integration, modernise your legacy system.
//                 </Topline>
//               </Card>
//             </div>
//             <div>
//               <Card>
//                 <Image
//                   src="/images/box3.png"
//                   alt="box-images"
//                   width={100}
//                   height={100}
//                   objectFit="cover"
//                 />
//                 <Subtitle>UX/UI Desing</Subtitle>
//                 <Topline>
//                   Build the product you
//                   <br />
//                   need on time with an experienced team that uses a clear and
//                   effective design process.
//                 </Topline>
//               </Card>
//             </div>
//             <div>
//               <Card>
//                 <Image
//                   src="/images/box4.png"
//                   alt="box-images"
//                   width={100}
//                   height={100}
//                   objectFit="cover"
//                 />
//                 <Subtitle>
//                   Web <br />
//                   development
//                 </Subtitle>
//                 <Topline>We offer experience in building a new product</Topline>
//               </Card>
//             </div>
//             <div>
//               <Card>
//                 <Image
//                   src="/images/box3.png"
//                   alt="box-images"
//                   width={100}
//                   height={100}
//                   objectFit="cover"
//                 />
//                 <Subtitle>Mobile App Development</Subtitle>
//                 <Topline>
//                   Create an impactful mobile app that fits your brand and
//                   industry within a shorter time frame.
//                 </Topline>
//               </Card>
//             </div>
//             <div>
//               <Card>
//                 <Image
//                   src="/images/box2.png"
//                   alt="box-images"
//                   width={100}
//                   height={100}
//                   objectFit="cover"
//                 />
//                 <Subtitle>Software development</Subtitle>
//                 <Topline>
//                   Create complex enterprise software, ensure reliable software
//                   integration, modernise your legacy system.
//                 </Topline>
//               </Card>
//             </div>
//             <div>
//               <Card>
//                 <Image
//                   src="/images/box4.png"
//                   alt="box-images"
//                   width={100}
//                   height={100}
//                   objectFit="cover"
//                 />
//                 <Subtitle>UX/UI Desing</Subtitle>
//                 <Topline>
//                   Build the product you
//                   <br />
//                   need on time with an experienced team that uses a clear and
//                   effective design process.
//                 </Topline>
//               </Card>
//             </div>
//             <div>
//               <Card>
//                 <Image
//                   src="/images/box2.png"
//                   alt="box-images"
//                   width={100}
//                   height={100}
//                   objectFit="cover"
//                 />
//                 <Subtitle>
//                   Web <br />
//                   development
//                 </Subtitle>
//                 <Topline>We offer experience in building a new product</Topline>
//               </Card>
//             </div>
//             <div>
//               <Card>
//                 <Image
//                   src="/images/box3.png"
//                   alt="box-images"
//                   width={100}
//                   height={100}
//                   objectFit="cover"
//                 />
//                 <Subtitle>Mobile App Development</Subtitle>
//                 <Topline>
//                   Create an impactful mobile app that fits your brand and
//                   industry within a shorter time frame.
//                 </Topline>
//               </Card>
//             </div>
//           </Slider>
//           </div>
//         </ProjectContainer>
//       </>
//     );
//   }
// }