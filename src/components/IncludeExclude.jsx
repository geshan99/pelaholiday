import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import IncludeExcludeCSS from './IncludeExclude.module.css';

function IncludeExclude() {
  return (
    <Container
      fluid
      className={`m-3 p-3 ${IncludeExcludeCSS.IncludeExcludeBox} font-3`}
    >
      <Row className="m-0 d-flex flex-column">
        <Row className="m-0">Includes</Row>
        <Row className="mx-5">Lorem ipsum dolor sit amet.</Row>
        <Row className="mx-5">Lorem ipsum dolor sit amet.</Row>
      </Row>
      <Row className="m-0 d-flex flex-column">
        <Row className="m-0">Excludes</Row>
        <Row className="mx-5">Lorem ipsum dolor sit amet.</Row>
        <Row className="mx-5">Lorem ipsum dolor sit amet.</Row>
      </Row>
    </Container>
  );
}

export default IncludeExclude;
