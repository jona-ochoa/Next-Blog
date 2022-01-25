
import Image from "next/dist/client/image";
import Slider from "react-slick";
import { Component } from "react";
import {
  ProjectContainer,
  Heading,
  Card,
  Subtitle,
  Topline,
} from "../components/project.element";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "black" }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <ProjectContainer>
          <Heading>What we can do four you...</Heading>
          <div>
          <Slider {...settings} layout="responsive">
            <div>
              <Card>
                <Image
                  src="/images/Group 17.png"
                  alt="box-images"
                  width={100}
                  height={100}
                  objectFit="cover"
                />
                <Subtitle>Software development</Subtitle>
                <Topline>
                  Create complex enterprise software, ensure reliable software
                  integration, modernise your legacy system.
                </Topline>
              </Card>
            </div>
            <div>
              <Card>
                <Image
                  src="/images/Group 16.png"
                  alt="box-images"
                  width={100}
                  height={100}
                  objectFit="cover"
                />
                <Subtitle>UX/UI Desing</Subtitle>
                <Topline>
                  Build the product you
                  <br />
                  need on time with an experienced team that uses a clear and
                  effective design process.
                </Topline>
              </Card>
            </div>
            <div>
              <Card>
                <Image
                  src="/images/Group 13.png"
                  alt="box-images"
                  width={100}
                  height={100}
                  objectFit="cover"
                />
                <Subtitle>
                  Web <br />
                  development
                </Subtitle>
                <Topline>We offer experience in building a new product</Topline>
              </Card>
            </div>
            <div>
              <Card>
                <Image
                  src="/images/Group 16.png"
                  alt="box-images"
                  width={100}
                  height={100}
                  objectFit="cover"
                />
                <Subtitle>Mobile App Development</Subtitle>
                <Topline>
                  Create an impactful mobile app that fits your brand and
                  industry within a shorter time frame.
                </Topline>
              </Card>
            </div>
            <div>
              <Card>
                <Image
                  src="/images/Group 18.png"
                  alt="box-images"
                  width={100}
                  height={100}
                  objectFit="cover"
                />
                <Subtitle>Software development</Subtitle>
                <Topline>
                  Create complex enterprise software, ensure reliable software
                  integration, modernise your legacy system.
                </Topline>
              </Card>
            </div>
            <div>
              <Card>
                <Image
                  src="/images/box4.png"
                  alt="box-images"
                  width={100}
                  height={100}
                  objectFit="cover"
                />
                <Subtitle>UX/UI Desing</Subtitle>
                <Topline>
                  Build the product you
                  <br />
                  need on time with an experienced team that uses a clear and
                  effective design process.
                </Topline>
              </Card>
            </div>
            <div>
              <Card>
                <Image
                  src="/images/Group 18.png"
                  alt="box-images"
                  width={100}
                  height={100}
                  objectFit="cover"
                />
                <Subtitle>
                  Web <br />
                  development
                </Subtitle>
                <Topline>We offer experience in building a new product</Topline>
              </Card>
            </div>
            <div>
              <Card>
                <Image
                  src="/images/Group 16.png"
                  alt="box-images"
                  width={100}
                  height={100}
                  objectFit="cover"
                />
                <Subtitle>Mobile App Development</Subtitle>
                <Topline>
                  Create an impactful mobile app that fits your brand and
                  industry within a shorter time frame.
                </Topline>
              </Card>
            </div>
          </Slider>
          </div>
        </ProjectContainer>
      </>
    );
  }
}