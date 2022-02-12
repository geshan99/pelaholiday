import React from 'react';
import { Image } from 'react-bootstrap';
import './RoundImage.css';

function RoundImage({ imageURL }) {
  return <img src={imageURL} alt="" className="roundImage-image  mx-auto" />;
}

export default RoundImage;
