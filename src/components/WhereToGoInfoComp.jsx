import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import RoundImage from './RoundImage';

function WhereToGoInfoComp({ image1, image2, image3, description }) {
  const text1 =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sequi deserunt recusandae hic ut a et voluptatem neque nulla debitis!';

  return (
    <Container fluid>
      <Row className="my-5">
        <Col className="my-2">
          <RoundImage imageURL={image1} layer={'flex'} textIn={text1} />
        </Col>
        <Col className="my-2">
          <RoundImage imageURL={image2} layer={'flex'} textIn={text1} />
        </Col>
        <Col className="my-2">
          <RoundImage imageURL={image3} layer={'flex'} textIn={text1} />
        </Col>
      </Row>
      <Row>
        <Col className="text-center">{description}</Col>
      </Row>
    </Container>
  );
}

export default WhereToGoInfoComp;
