import React from 'react';
import { Container } from 'react-bootstrap';
import './WhereToGoMiddle.css';
import polhena from '../assets/Home Page/Where to go/polhena.jpg';
import sigiriya from '../assets/Home Page/Where to go/sigiriya.jpg';
import dalada from '../assets/Home Page/Where to go/dalada maligawa.jpg';
import RoundImage from './RoundImage';
import MainPageRawInfoComp from './MainPageRawInfoComp';
import WhereToGoInfoComp from './WhereToGoInfoComp';

function WhereToGoMiddle() {
  return (
    <Container
      fluid
      className="-bg-img bg-purple bg-blend-multiply whereToGoBackGroundImage py-5 d-absolute"
    >
      <WhereToGoInfoComp image1={polhena} image2={sigiriya} image3={dalada} />
      <WhereToGoInfoComp image1={polhena} image2={sigiriya} image3={dalada} />
      <WhereToGoInfoComp image1={polhena} image2={sigiriya} image3={dalada} />
    </Container>
  );
}

export default WhereToGoMiddle;
