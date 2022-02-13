import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import beachBackground from '../assets/beach.jpg';
import MainPageRawInfoComp from './MainPageRawInfoComp';
import daladaMaligawa from '../assets/MainPage/WhereToGo/dalada maligawa.jpg';
import polhena from '../assets/MainPage/WhereToGo/polhena.jpg';
import sigiriya from '../assets/MainPage/WhereToGo/sigiriya.jpg';
import surfing from '../assets/MainPage/WhatToDo/weligama surfing.jpg';
import yaala from '../assets/MainPage/WhatToDo/yaala.jpg';
import hike from '../assets/MainPage/WhatToDo/hike.jpg';
import beachPack from '../assets/MainPage/HolidayPackages/beach package.jpg';
import junglePack from '../assets/MainPage/HolidayPackages/jungle package.jpg';
import dolphinPack from '../assets/MainPage/HolidayPackages/dolphin package.jpg';
import checkCircle from '../assets/checkCircle.svg';
import beach from '../assets/beach.jpg';
import './BackgroundComp.css';
function BackgroundComp() {
  return (
    <Container
      fluid
      className="-bg-img bg-purple bg-blend-multiply containerBackGroundImage"
      // style={{
      //   background: `url(${beach}) no-repeat center `,
      //   backgroundSize: 'cover',
      // }}
    >
      {/* <img className="bg" src={beach} alt="" /> */}
      <Row>
        <MainPageRawInfoComp
          title="Where to go"
          color="#5ac3ff"
          image1={daladaMaligawa}
          image2={polhena}
          image3={sigiriya}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
        />
      </Row>
      <Row>
        <MainPageRawInfoComp
          title="What to do"
          color="#5ac3ff"
          image1={surfing}
          image2={yaala}
          image3={hike}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
        />
      </Row>
      <Row>
        <MainPageRawInfoComp
          title="Holiday packages"
          color="#5ac3ff"
          image1={beachPack}
          image2={junglePack}
          image3={dolphinPack}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
        />
      </Row>
      <Row className="justify-content-center">
        <Col
          className="d-flex titleContainer justify-content-center col-4 col-sm-4 col-md-3 col-lg-2 p-1 my-4 "
          style={{ backgroundColor: '#7affaf' }}
        >
          Plan your holiday
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col
          className="d-flex titleContainer justify-content-center col-5 col-sm-5 col-md-4 col-lg-3 p-1 my-4 text-white "
          style={{ backgroundColor: '#5ac3ff' }}
        >
          Why choose us
        </Col>
      </Row>
      <Row>
        <Col fluid>
          <Row className="justify-content-center">
            <img src={checkCircle} alt="" class="filter-green" />
            Happy Clients
          </Row>
          <Row className="justify-content-center">
            <img src={checkCircle} alt="" />
            Amazing Tours
          </Row>
        </Col>
        <Col>
          <Row className="justify-content-center">
            <img src={checkCircle} alt="" />
            Tailor Mode
          </Row>
          <Row className="justify-content-center">
            <img src={checkCircle} alt="" />
            Local Experts
          </Row>
          <Row className="justify-content-center">
            <img src={checkCircle} alt="" />
            24/7 Service
          </Row>
        </Col>
        <Col>
          <Row className="justify-content-center">
            <img src={checkCircle} alt="" />
            Easy Booking
          </Row>
          <Row className="justify-content-center">
            <img src={checkCircle} alt="" />
            Competitive Price Flexible
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default BackgroundComp;
