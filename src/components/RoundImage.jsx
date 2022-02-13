import React from 'react';
import './RoundImage.css';

function RoundImage({ imageURL }) {
  return (
    <img
      src={imageURL}
      alt=""
      className="roundImage-image  mx-auto rounded-circle d-block "
    />
  );
}

export default RoundImage;
