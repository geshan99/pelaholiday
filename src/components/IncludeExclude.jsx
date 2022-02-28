import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import IncludeExcludeCSS from './IncludeExclude.module.css';
import inExDataJSON from '../Data/InExData.data';

function IncludeExclude() {
  return (
    <Container
      fluid
      className={`m-3 p-3 ${IncludeExcludeCSS.IncludeExcludeBox} font-3`}
    >
      <Row className="m-0 d-flex flex-column">
        <Row className="m-0">Includes</Row>
        {inExDataJSON.include.map((singleInData) => {
          return <Row className="mx-5">{singleInData}</Row>;
        })}
      </Row>
      <Row className="m-0 d-flex flex-column">
        <Row className="m-0">Excludes</Row>
        {inExDataJSON.exclude.map((singleExData) => {
          return <Row className="mx-5">{singleExData}</Row>;
        })}
      </Row>
    </Container>
  );
}

export default IncludeExclude;
