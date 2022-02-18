import React from 'react';
import { Image } from 'react-bootstrap';
import polhena from '../assets/MainPage/WhereToGo/polhena.jpg';
import { Container, Row } from 'react-bootstrap';
import InfoButtons from './InfoButtons';

function WhereToGoUpper() {
  return (
    <Container
      fluid
      className="m-0 p-0 text-center"
      style={{ position: 'relative' }}
    >
      <Image
        src={polhena}
        style={{
          height: '100vh',
          width: '100%',
          objectFit: 'cover',
        }}
        className="mx-auto d-block "
      />
      <Container
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          color: 'white',
          transform: 'translateX(-50%)',
          fontSize: '65px',
        }}
      >
        Where to go
      </Container>
      <Row
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          // backgroundColor: 'black',
          width: '70%',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <InfoButtons title="Home" color="#DCEB25" />
        <InfoButtons title="Holiday Packages" color="#DCEB25" />
        <InfoButtons title="What to do" color="#DCEB25" />
      </Row>
    </Container>
  );
}

export default WhereToGoUpper;
