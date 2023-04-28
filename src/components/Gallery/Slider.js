import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { data } from './data';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const CustomPrevArrow = (props) => (
  <button {...props}>
    <AiOutlineArrowLeft style={{ color: 'red' }} />
  </button>
);

const CustomNextArrow = (props) => (
  <button {...props}>
    <AiOutlineArrowRight />
  </button>
);

const GallerySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  return (
    <Slider {...settings}>
      {data.map((data, index) => (
        <div key={index}>
          <img src={data.src} alt={`Slide ${index}`} style={{ margin: '0 auto' }} />
        </div>
      ))}
    </Slider>
  );
};

export default GallerySlider;
