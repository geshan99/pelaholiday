import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import APackageMiddleCSS from './APackageMiddle.module.css';
import BookNowComp from './BookNowComp';
import BriefPlanComp from './BriefPlanComp';
import DetailsOfPlan from './DetailsOfPlan';
import ForAnyQComp from './ForAnyQComp';
import IncludeExclude from './IncludeExclude';

function APackageMiddle({ location }) {
  return (
    <Container
      fluid
      className={`bg-blend-multiply px-0 py-4 ${APackageMiddleCSS.aPackageMiddleBackGroundImage}`}
    >
      <Container fluid className="d-flex">
        <Container fluid className="d-flex flex-column">
          <Container>
            <BriefPlanComp location={location} />
          </Container>
          <Container>
            <IncludeExclude location={location} />
          </Container>
        </Container>
        <Container fluid className="d-flex flex-column">
          <Container>
            <BookNowComp location={location} />
          </Container>
          <Container>
            <ForAnyQComp location={location} />
          </Container>
        </Container>
      </Container>
      <Container fluid className="d-flex flex-column">
        <Container>
          <DetailsOfPlan location={location} />
        </Container>
      </Container>
      <Row className="d-flex justify-content-center m-4">
        <Button variant="primary">Book this package</Button>
      </Row>
    </Container>
  );
}

export default APackageMiddle;
