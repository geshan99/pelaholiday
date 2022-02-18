import React from 'react';
import { Container } from 'react-bootstrap';
import './BackgroundComp.css';
import polhena from '../assets/MainPage/WhereToGo/polhena.jpg';
import sigiriya from '../assets/MainPage/WhereToGo/sigiriya.jpg';
import dalada from '../assets/MainPage/WhereToGo/dalada maligawa.jpg';
import RoundImage from './RoundImage';
import MainPageRawInfoComp from './MainPageRawInfoComp';
import WhereToGoInfoComp from './WhereToGoInfoComp';

function WhereToGoMiddle() {
  return (
    <Container
      fluid
      className="-bg-img bg-purple bg-blend-multiply containerBackGroundImage py-5 d-absolute"
    >
      <WhereToGoInfoComp image1={polhena} image2={sigiriya} image3={dalada} />
      <WhereToGoInfoComp image1={polhena} image2={sigiriya} image3={dalada} />
      <WhereToGoInfoComp image1={polhena} image2={sigiriya} image3={dalada} />
    </Container>
  );
}

export default WhereToGoMiddle;
