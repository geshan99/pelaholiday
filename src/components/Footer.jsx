import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { IoLocationSharp, IoMailSharp, IoLogoFacebook } from 'react-icons/io5';
import {
  IoMdCall,
  IoLogoWhatsapp,
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io';
import LocationComp from './LocationComp';
function Footer() {
  return (
    <Container fluid style={{ backgroundColor: 'black', color: 'white' }}>
      <Row className="p-2">
        <Col lg={2} className="py-2">
          <Row>
            <Col>
              <h4>PELA Holiday</h4>
              <IoLocationSharp />
              36/1
              <br />
              <Col>
                Nugegoda Road
                <br />
                Pepiliyana
                <br />
                Sri Lanka
                <br />
              </Col>
              <IoMdCall />
              +94 70 441 1511
              <br />
              <IoMailSharp />
              info@pelaholidays.lk
            </Col>
          </Row>
          <Row>
            <Col className="my-2">
              <LocationComp height="12vw" width="12vw" />
            </Col>
          </Row>
        </Col>
        <Col className="my-auto align-content-center justify-content-center text-center">
          <Container
            // className="h-75 w-75"
            className="my-auto justify-content-center align-content-center text-center"
            style={{
              backgroundColor: 'white',
              height: '23vw',
              width: '23vw',
            }}
          ></Container>
        </Col>
        <Col lg={2}>
          <Col className="py-2">
            <Row>
              <a href="/" style={{ color: 'white' }}>
                Home
              </a>
            </Row>
            <Row>
              <a href="/wheretogo" style={{ color: 'white' }}>
                Where to go
              </a>
            </Row>
            <Row>
              <a href="/wheretogo" style={{ color: 'white' }}>
                What to do
              </a>
            </Row>
            <Row>
              <a href="/packages" style={{ color: 'white' }}>
                Holiday Packages
              </a>
            </Row>
            <Row>
              <a href="/packages" style={{ color: 'white' }}>
                Plan your holiday
              </a>
            </Row>
            <Row>
              <a href="/about" style={{ color: 'white' }}>
                About us
              </a>
            </Row>
            <Row>
              <a href="/contact" style={{ color: 'white' }}>
                Contact us
              </a>
            </Row>
          </Col>
          <Row>
            <IoLogoFacebook
              style={{ color: '#2044FF', fontSize: '35px' }}
              className="m-1"
            />
            <IoLogoInstagram
              style={{ color: '#C84E93', fontSize: '35px' }}
              className="m-1"
            />
            <IoLogoLinkedin
              style={{ color: '#0077B5', fontSize: '35px' }}
              className="m-1"
            />
            <IoLogoWhatsapp
              style={{ color: '#64B161', fontSize: '35px' }}
              className="m-1"
            />
          </Row>
          <Col
            fluid
            style={{
              height: '40px',
              position: 'fixed',
              bottom: '0',
              left: '100px',
            }}
          >
            {/* <Col fluid className="align-self-end" style={{ fontSize: '10px' }}> */}
            {/* 2022PELAHolidays */}
            {/* </Col> */}
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
