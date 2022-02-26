import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BookNowCompCSS from './BookNowComp.module.css';

function BookNowComp() {
  return (
    <Container
      fluid
      className={`m-4 px-4 py-1 ${BookNowCompCSS.bookNowBox} font-3`}
    >
      <Row className="m-0 p-0 d-flex justify-content-center">
        <Row
          style={{
            backgroundColor: '#0DC5FF',
            borderRadius: '1.5vw',
            width: '70%',
            color: 'white',
            lineHeight: '2.5vw',
          }}
          className=" d-flex justify-content-center"
        >
          Book Now
        </Row>
      </Row>
      <Row className="m-0 d-flex flex-column">
        <Row className="m-0">
          Tour Details - <span className="mx-4">Lorem ipsum</span>
        </Row>
        <Row className="m-0">
          Tour Code - <span className="mx-4">Lorem ipsum</span>
        </Row>
        <Row className="m-0">
          Package Type - <span className="mx-4">Lorem ipsum</span>
        </Row>
        <Row className="m-0">
          Durations - <span className="mx-4">Lorem ipsum</span>
        </Row>
        <Row className="m-0">
          Locations - <span className="mx-4">Lorem ipsum</span>
        </Row>
        <Row className="m-0">
          Package Capacity - <span className="mx-4">Lorem ipsum</span>
        </Row>
      </Row>
    </Container>
  );
}

export default BookNowComp;
