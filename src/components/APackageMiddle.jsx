import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import APackageMiddleCSS from './APackageMiddle.module.css';
import BookNowComp from './BookNowComp';
import BriefPlanComp from './BriefPlanComp';
import DetailsOfPlan from './DetailsOfPlan';
import ForAnyQComp from './ForAnyQComp';
import IncludeExclude from './IncludeExclude';

function APackageMiddle() {
  return (
    <Container
      fluid
      className={`bg-blend-multiply px-0 py-4 ${APackageMiddleCSS.aPackageMiddleBackGroundImage}`}
    >
      <Container fluid className="d-flex">
        <Container fluid className="d-flex flex-column">
          <Container>
            <BriefPlanComp />
          </Container>
          <Container>
            <IncludeExclude />
          </Container>
        </Container>
        <Container fluid className="d-flex flex-column">
          <Container>
            <BookNowComp />
          </Container>
          <Container>
            <ForAnyQComp />
          </Container>
        </Container>
      </Container>
      <Container fluid className="d-flex flex-column">
        <Container>
          <DetailsOfPlan />
        </Container>
      </Container>
      <Row className="d-flex justify-content-center m-4">
        <Button variant="primary">Book this package</Button>
      </Row>
    </Container>
  );
}

export default APackageMiddle;
