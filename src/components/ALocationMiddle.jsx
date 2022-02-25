import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ALocationSlider from './ALocationSlider';
import LocationComp from './LocationComp';
import ALocationMiddleCSS from './ALocationMiddle.module.css';

function ALocationMiddle() {
  return (
    <Container
      fluid
      className={`bg-blend-multiply px-0 ${ALocationMiddleCSS.whereToGoBackGroundImage}`}
    >
      <ALocationSlider />
      <Row className="font-3 text-center py-5 m-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non temporibus
        nihil perspiciatis autem tempore placeat suscipit expedita consequatur
        eligendi, rerum dolores similique commodi culpa fuga molestias provident
        quod repudiandae? Ullam tempore, deleniti nihil, distinctio quisquam
        doloribus mollitia aut totam blanditiis culpa natus, eligendi quod hic.
        Officia animi veniam laudantium accusantium.
      </Row>
      <Row className="d-flex justify-content-around py-5 mx-0">
        <Col className="col-auto">
          <LocationComp height="25vw" width="25vw" />
        </Col>
        <Col
          className="border rounded-top rounded-bottom font-4 col-auto p-5"
          style={{ height: '200px', width: 'auto' }}
        >
          <Row className="text-left text-white">For any question</Row>
          <Row className="text-left text-white py-1">Email</Row>
          <Row className="text-left text-white">Telephone</Row>
          <Row className="text-left text-white my-1">Whatsapp</Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ALocationMiddle;
