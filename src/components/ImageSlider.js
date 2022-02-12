import { Carousel, Image } from 'react-bootstrap';
import ninearch from '../assets/MainPage/MovingPhotos/ninearch.jpg';
import safari from '../assets/MainPage/MovingPhotos/Safari.jpg';
import whale from '../assets/MainPage/MovingPhotos/whale watching.jpg';
import stilt from '../assets/MainPage/MovingPhotos/Stilt fishing.jpg';
import pinnawala from '../assets/MainPage/MovingPhotos/pinnawala.jpg';
import anuradhapura from '../assets/MainPage/MovingPhotos/anuradhapura.jpg';
import './ImageSlider.css';

function ImageSlider() {
  return (
    <div>
      <Carousel
        controls={true}
        nextLabel={''}
        prevLabel={''}
        className="carouselComp"
      >
        <Carousel.Item>
          <Image src={ninearch} className="w-100  "></Image>
          <Carousel.Caption>
            <h5 className="carousel-topic">Nine Arch</h5>
            <p className="carousel-des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tincidunt eget nullam non nisi est.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={safari} className="w-100 "></Image>
          <Carousel.Caption>
            <h5 className="carousel-topic">Safari</h5>
            <p className="carousel-des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tincidunt eget nullam non nisi est.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={whale} className="w-100 "></Image>
          <Carousel.Caption>
            <h5 className="carousel-topic">Whale watching</h5>
            <p className="carousel-des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tincidunt eget nullam non nisi est.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={stilt} className="w-100 "></Image>
          <Carousel.Caption>
            <h5 className="carousel-topic">Stilt fishing</h5>
            <p className="carousel-des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tincidunt eget nullam non nisi est.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={pinnawala} className="w-100 "></Image>
          <Carousel.Caption>
            <h5 className="carousel-topic">Pinnawala</h5>
            <p className="carousel-des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tincidunt eget nullam non nisi est.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={anuradhapura} className="w-100 "></Image>
          <Carousel.Caption>
            <h5 className="carousel-topic">Anuradhapura</h5>
            <p className="carousel-des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tincidunt eget nullam non nisi est.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImageSlider;
