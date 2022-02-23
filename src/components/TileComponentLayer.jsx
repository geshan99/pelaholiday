import React from 'react';
import { Row, Col } from 'react-bootstrap';
import polhena from '../assets/Home Page/Where to go/polhena.jpg';
import sigiriya from '../assets/Home Page/Where to go/sigiriya.jpg';
import dalada from '../assets/Home Page/Where to go/dalada maligawa.jpg';
import RoundImgLayer from './RoundImgLayer';

function TileComponentLayer({ type }) {
  const description1 =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate enim tempora consectetur? Reiciendis nesciunt, esse ex assumenda natus repudiandae.';

  return (
    <div>
      <Row>
        <Col>
          <RoundImgLayer img={polhena} description={description1} type={type} />
        </Col>
        <Col>
          <RoundImgLayer
            img={sigiriya}
            description={description1}
            type={type}
          />
        </Col>
        <Col>
          <RoundImgLayer img={dalada} description={description1} type={type} />
        </Col>
      </Row>
      <Row>
        <Col>
          <RoundImgLayer img={polhena} description={description1} type={type} />
        </Col>
        <Col>
          <RoundImgLayer
            img={sigiriya}
            description={description1}
            type={type}
          />
        </Col>
        <Col>
          <RoundImgLayer img={dalada} description={description1} type={type} />
        </Col>
      </Row>
      <Row>
        <Col>
          <RoundImgLayer img={polhena} description={description1} type={type} />
        </Col>
        <Col>
          <RoundImgLayer
            img={sigiriya}
            description={description1}
            type={type}
          />
        </Col>
        <Col>
          <RoundImgLayer img={dalada} description={description1} type={type} />
        </Col>
      </Row>
    </div>
  );
}

export default TileComponentLayer;
