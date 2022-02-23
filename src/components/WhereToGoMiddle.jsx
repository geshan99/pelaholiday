import React from 'react';
import { Container } from 'react-bootstrap';
import './WhereToGoMiddle.css';
import TileComponentLayer from './TileComponentLayer';

function WhereToGoMiddle() {
  return (
    <Container
      fluid
      className=" bg-blend-multiply whereToGoBackGroundImage py-5 d-absolute"
    >
      <TileComponentLayer type="type1" />
    </Container>
  );
}

export default WhereToGoMiddle;
