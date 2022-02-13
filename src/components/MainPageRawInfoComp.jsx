import React from 'react';
import './MainPageRawInfoComp.css';
import { Container, Row, Col } from 'react-bootstrap';
import RoundImage from './RoundImage';

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
        <Col
          className="d-flex titleContainer justify-content-center col-5 col-sm-5 col-md-4 col-lg-3 p-1 my-4 text-white "
          style={{ backgroundColor: color }}
        >
          {title}
        </Col>
      </Row>
      <Row>
        <Col>
          <RoundImage imageURL={image1} />
        </Col>
        <Col>
          <RoundImage imageURL={image2} />
        </Col>
        <Col>
          <RoundImage imageURL={image3} />
        </Col>
      </Row>
      <Row>
        <Col className="text-center">{description}</Col>
      </Row>
    </Container>
  );
}

export default MainPageRawInfoComp;
