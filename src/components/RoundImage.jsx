import React from 'react';
import './RoundImage.css';
import { Container, Col, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { FcNext } from 'react-icons/fc';

function RoundImage({ imageURL, layer, textIn }) {
  if (layer === 'flex' && textIn.length > 40) {
    textIn = textIn.slice(0, 40) + '...';
    console.log('working');
  }
  return (
    <>
      <img
        src={imageURL}
        alt=""
        className="roundImage-image  mx-auto rounded-circle d-block "
        style={{ backgroundColor: 'black', zIndex: 1, position: 'relative' }}
      ></img>
      {console.log(layer)}

      <Container
        style={{
          backgroundColor: 'white',
          borderRadius: '7vw 4vw 7vw 0',
          width: '17vw',
          height: '17vw',
          display: `${layer}`,
          flexDirection: 'row',
          // position: 'absolute',
          // top: '35%',
          // left: '15%',
          zIndex: 0,
          margin: '-13vw 0 0 0',
          verticalAlign: 'bottom',
        }}
      >
        <Row>
          <Row
            style={{
              alignSelf: 'flex-end',
              // width: '0.7vw',
              // backgroundColor: 'blue',
              wordWrap: 'break-word',
              width: '17vw',
            }}
          >
            <Col className="mx-2">{textIn}</Col>
            <Col style={{ fontSize: '40px' }} lg={3} md={3}>
              <FcNext />
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
}

export default RoundImage;
