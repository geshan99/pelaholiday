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
      <Row className=" justify-content-md-center ">
        <Col
          className="d-flex titleContainer justify-content-md-center col-2 "
          style={{ backgroundColor: color }}
        >
          {title}
        </Col>
      </Row>
      <Row className="row-auto">
        <Col lg={4}>
          <RoundImage imageURL={image1} />
        </Col>
        <Col lg={4}>
          <RoundImage imageURL={image2} />
        </Col>
        <Col lg={4}>
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
