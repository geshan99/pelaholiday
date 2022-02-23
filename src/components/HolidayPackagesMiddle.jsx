import React from 'react';
import { Container, Row } from 'react-bootstrap';
import HolidayPackagesMiddleCSS from './HolidayPackagesMiddle.module.css';
import TileComponentLayer from './TileComponentLayer';

function HolidayPackagesMiddle() {
  return (
    <Container
      fluid
      className={HolidayPackagesMiddleCSS.holidayPackagesMiddleBackGroundImage}
    >
      <Row className="text-center d-flex justify-content-center my-5">
        Choose your dream holiday packages in Sri Lanka
      </Row>
      <Row className="text-center d-flex justify-content-center my-3 px-5 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, modi
        eaque! Quos ipsum explicabo repellendus doloribus suscipit labore
        consequuntur incidunt, accusamus consectetur, expedita nobis vitae
        nostrum inventore sit molestias magnam. Praesentium consequuntur
        assumenda excepturi omnis magnam numquam minus, quasi quia nostrum,
        ipsum autem porro fugit eligendi ad dicta a optio! Quibusdam fugiat quo
        beatae aliquam, est cumque esse enim, voluptatem, nulla fugit et
        inventore id? Voluptates ut voluptatibus excepturi qui!
      </Row>
      <TileComponentLayer type="type2" />
    </Container>
  );
}

export default HolidayPackagesMiddle;
