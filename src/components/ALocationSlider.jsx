import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import ninearch from '../assets/Home Page/Moving Photos/Ella.jpg';
import safari from '../assets/Home Page/Moving Photos/Safari.jpg';
import whale from '../assets/Home Page/Moving Photos/whale watching.jpg';
import stilt from '../assets/Home Page/Moving Photos/Stilt fishing.jpg';
import pinnawala from '../assets/Home Page/Moving Photos/pinnawala.jpg';
import anuradhapura from '../assets/Home Page/Moving Photos/anuradhapura.jpg';
import ALocationSliderCSS from './ALocationSlider.module.css';

function ALocationSlider() {
  return (
    <Carousel
      controls={true}
      nextLabel={''}
      prevLabel={''}
      className={
        Object.keys(ALocationSliderCSS)[0] +
        ' ' +
        ALocationSliderCSS.aLocationPageSlider
      }
    >
      <Carousel.Item>
        <Image src={ninearch} className="w-100  "></Image>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={safari} className="w-100 "></Image>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={whale} className="w-100 "></Image>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={stilt} className="w-100 "></Image>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={pinnawala} className="w-100 "></Image>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={anuradhapura} className="w-100 "></Image>
      </Carousel.Item>
    </Carousel>
  );
}

export default ALocationSlider;
