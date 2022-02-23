import React from 'react';
import './RoundImgLayer.css';
import { Container, Row } from 'react-bootstrap';
import { FcNext } from 'react-icons/fc';

function RoundImgLayer({ img, description, type }) {
  if (description.length > 40) {
    description = description.slice(0, 40) + '...';
    console.log('working');
  }
  console.log(img);
  if (type === 'type1') {
    return (
      <Container className="containerRoundImg" fluid>
        <Container className="layer-1" fluid>
          <Container
            style={{
              width: '15vw',
              height: '15vw',
              borderRadius: '100%',
              top: '-20%',
              left: '50%',
              position: 'relative',
              backgroundImage: `url("${img}")`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              border: '3px solid #01ff48',
            }}
            fluid
          ></Container>
          <Row></Row>
          <Container className="header-content-1" fluid>
            {description}
            <FcNext style={{ fontSize: '70px' }} />
          </Container>
        </Container>
      </Container>
    );
  } else if (type === 'type2') {
    return (
      <Container className="containerRoundImg" fluid>
        <Container className="layer-2" fluid>
          <Container
            style={{
              width: '15vw',
              height: '15vw',
              borderRadius: '100%',
              top: '40%',
              left: '-50%',
              position: 'relative',
              backgroundImage: `url("${img}")`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              border: '3px solid #01ff48',
            }}
            fluid
          ></Container>
          <Row></Row>
          <Container className="header-content-2" fluid>
            {description}
            <FcNext style={{ fontSize: '70px' }} />
          </Container>
        </Container>
      </Container>
    );
  }
}

export default RoundImgLayer;