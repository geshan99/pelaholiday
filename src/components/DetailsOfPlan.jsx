import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DetailsOfPlanCSS from './DetailsOfPlan.module.css';

function DetailsOfPlan() {
  return (
    <Container
      fluid
      className={`px-5 py-4 ${DetailsOfPlanCSS.detailsOfPlanBox} font-3`}
    >
      <Row className="my-3 mx-4 font-3">Details Of Plan</Row>
      <Row className="m-0 font-3">
        <ul className="mx-0 px-0">
          <li className="d-flex">
            <Col className="col-auto px-4">Day 01</Col>
            <section>
              <div>Lorem ipsum dolor sit amet</div>
              <ul style={{ listStyle: 'circle' }}>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              </ul>
            </section>
          </li>
          <li className="d-flex">
            <Col className="col-auto px-4">Day 02</Col>
            <section>
              <div>Lorem ipsum dolor sit amet</div>
              <ul style={{ listStyle: 'circle' }}>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              </ul>
            </section>
          </li>
          <li className="d-flex">
            <Col className="col-auto px-4">Day 03</Col>
            <section>
              <div>Lorem ipsum dolor sit amet</div>
              <ul style={{ listStyle: 'circle' }}>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              </ul>
            </section>
          </li>
          <li className="d-flex">
            <Col className="col-auto px-4">Day 04</Col>
            <section>
              <div>Lorem ipsum dolor sit amet</div>
              <ul style={{ listStyle: 'circle' }}>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              </ul>
            </section>
          </li>
        </ul>
      </Row>
    </Container>
  );
}

export default DetailsOfPlan;
