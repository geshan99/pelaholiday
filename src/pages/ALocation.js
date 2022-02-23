import React from 'react';
import WhereToGoUpper from '../components/WhereToGoUpper';
import sigiriya from '../assets/Home Page/Where to go/sigiriya.jpg';
import Footer from '../components/Footer';
import ALocationMiddle from '../components/ALocationMiddle';

function ALocation() {
  return (
    <div>
      <WhereToGoUpper backPhoto={sigiriya} title={'Sigiriya'} />
      <ALocationMiddle />
      <Footer />
    </div>
  );
}

export default ALocation;
