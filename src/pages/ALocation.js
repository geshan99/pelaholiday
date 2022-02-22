import React from 'react';
import WhereToGoUpper from '../components/WhereToGoUpper';
import sigiriya from '../assets/Home Page/Where to go/sigiriya.jpg';
import Footer from '../components/Footer';
import ALocationSlider from '../components/ALocationSlider';
import WhereToGoUpperMiddle from '../components/WhereToGoUpperMiddle';

function ALocation() {
  return (
    <div>
      <WhereToGoUpper backPhoto={sigiriya} title={'Sigiriya'} />
      <WhereToGoUpperMiddle />
      <Footer />
    </div>
  );
}

export default ALocation;
