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
function BackgroundComp() {
  return (
    <Container fluid>
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
    </Container>
  );
}

export default BackgroundComp;
