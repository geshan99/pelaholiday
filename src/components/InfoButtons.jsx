import React from 'react';
import { Col } from 'react-bootstrap';

function infoButtons({ color, title, textColor }) {
  return (
    <Col
      className={`d-flex titleContainer justify-content-center col-5 col-sm-5 col-md-4 col-lg-3 p-1 my-4 text-${textColor} `}
      style={{ backgroundColor: color }}
    >
      {title}
    </Col>
  );
}

export default infoButtons;
