import React from 'react';
import { Row, Col } from 'react-bootstrap';
import beachPackImg from '../assets/Home Page/Holiday packages/beach package.jpg';
import dolphinPackImg from '../assets/Home Page/Holiday packages/dolphin package.jpg';
import junglePackImg from '../assets/Home Page/Holiday packages/jungle package.jpg';
import RoundImgLayer from './RoundImgLayer';
import hiking from '../assets/What to do/Photos for circles/Hiking.jpg';
import kitesurfing from '../assets/What to do/Photos for circles/kite surfing.jpg';
import safari from '../assets/What to do/Photos for circles/safari.jpg';
import scubadiving from '../assets/What to do/Photos for circles/Scuba diving.jpg';
import stiltfishing from '../assets/What to do/Photos for circles/Stilt fishing.jpg';
import surfing from '../assets/What to do/Photos for circles/surfing.jpg';
import whalewatching from '../assets/What to do/Photos for circles/whale watching.jpg';
import watersports from '../assets/What to do/Photos for circles/water sports.jpg';
import waterrafting from '../assets/What to do/Photos for circles/water rafting.jpg';

import { useNavigate } from 'react-router-dom';

function TileComponentLayer({ type }) {
  const navigate = useNavigate();
  const description1 =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate enim tempora consectetur? Reiciendis nesciunt, esse ex assumenda natus repudiandae.';

  return type === 'type1' ? (
    <div>
      <Row>
        <Col>
          <RoundImgLayer
            img={beachPackImg}
            description={description1}
            type={type}
            link="packages/beachPackage"
          />
        </Col>
        <Col>
          <RoundImgLayer
            img={dolphinPackImg}
            description={description1}
            type={type}
            link="packages/dolphinPackage"
          />
        </Col>
        <Col>
          <RoundImgLayer
            img={junglePackImg}
            description={description1}
            type={type}
            link="packages/junglePackage"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <RoundImgLayer
            img={beachPackImg}
            description={description1}
            type={type}
            link="packages/beachPackage"
          />
        </Col>
        <Col>
          <RoundImgLayer
            img={dolphinPackImg}
            description={description1}
            type={type}
            link="packages/dolphinPackage"
          />
        </Col>
        <Col>
          <RoundImgLayer
            img={junglePackImg}
            description={description1}
            type={type}
            link="packages/junglePackage"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <RoundImgLayer
            img={beachPackImg}
            description={description1}
            type={type}
            link="packages/beachPackage"
          />
        </Col>
        <Col>
          <RoundImgLayer
            img={dolphinPackImg}
            description={description1}
            type={type}
            link="packages/dolphinPackage"
          />
        </Col>
        <Col>
          <RoundImgLayer
            img={junglePackImg}
            description={description1}
            type={type}
            link="packages/junglePackage"
          />
        </Col>
      </Row>
    </div>
  ) : type === 'type2' ? (
    <div>
      <Row>
        <Col>
          <RoundImgLayer
            img={beachPackImg}
            description={description1}
            type={type}
            link="packages/beachPackage"
          />
        </Col>
        <Col>
          <RoundImgLayer
            img={dolphinPackImg}
            description={description1}
            type={type}
            link="packages/dolphinPackage"
          />
        </Col>
        <Col>
          <RoundImgLayer
            img={junglePackImg}
            description={description1}
            type={type}
            link="packages/junglePackage"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <RoundImgLayer
            img={beachPackImg}
            description={description1}
            type={type}
            link="packages/beachPackage"
          />
        </Col>
        <Col>
          <RoundImgLayer
            img={dolphinPackImg}
            description={description1}
            type={type}
            link="packages/dolphinPackage"
          />
        </Col>
        <Col>
          <RoundImgLayer
            img={junglePackImg}
            description={description1}
            type={type}
            link="packages/junglePackage"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <RoundImgLayer
            img={beachPackImg}
            description={description1}
            type={type}
            link="packages/beachPackage"
          />
        </Col>
        <Col>
          <RoundImgLayer
            img={dolphinPackImg}
            description={description1}
            type={type}
            link="packages/dolphinPackage"
          />
        </Col>
        <Col>
          <RoundImgLayer
            img={junglePackImg}
            description={description1}
            type={type}
            link="packages/junglePackage"
          />
        </Col>
      </Row>
    </div>
  ) : type === 'type3' ? (
    <div>
      <Row>
        <Col>
          <RoundImgLayer img={hiking} description={description1} type={type} />
        </Col>
        <Col>
          <RoundImgLayer
            img={kitesurfing}
            description={description1}
            type={type}
          />
        </Col>
        <Col>
          <RoundImgLayer img={safari} description={description1} type={type} />
        </Col>
      </Row>
      <Row>
        <Col>
          <RoundImgLayer
            img={scubadiving}
            description={description1}
            type={type}
          />
        </Col>
        <Col>
          <RoundImgLayer
            img={stiltfishing}
            description={description1}
            type={type}
          />
        </Col>
        <Col>
          <RoundImgLayer img={surfing} description={description1} type={type} />
        </Col>
      </Row>
      <Row>
        <Col>
          <RoundImgLayer
            img={waterrafting}
            description={description1}
            type={type}
          />
        </Col>
        <Col>
          <RoundImgLayer
            img={watersports}
            description={description1}
            type={type}
          />
        </Col>
        <Col>
          <RoundImgLayer
            img={whalewatching}
            description={description1}
            type={type}
          />
        </Col>
      </Row>
    </div>
  ) : (
    <></>
  );
}

export default TileComponentLayer;
