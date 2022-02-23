import React from 'react';
import './MainPageRawInfoComp.css';
import { Container, Row, Col } from 'react-bootstrap';
import InfoButtons from './InfoButtons';
import RoundImg from './RoundImg';

function MainPageRawInfoComp({
  title,
  color,
  image1,
  image2,
  image3,
  description,
}) {
  return (
    <Container fluid>
      <Row className=" justify-content-center ">
        <InfoButtons title={title} textColor="white" />
      </Row>
      <Row>
        <Col>
          <RoundImg img={image1} />
        </Col>
        <Col>
          <RoundImg img={image2} />
        </Col>
        <Col>
          <RoundImg img={image3} />
        </Col>
      </Row>
      <Row>
        <Col className="text-center">{description}</Col>
      </Row>
    </Container>
  );
}

export default MainPageRawInfoComp;
