import React from 'react';
import WhereToGoUpper from '../components/WhereToGoUpper';
import surfboard from '../assets/A Page/surfboardScene.jpg';
import Footer from '../components/Footer';
import APackageMiddle from '../components/APackageMiddle';

function APackage() {
  return (
    <div>
      <WhereToGoUpper backPhoto={surfboard} title={'Sigiriya'} />
      <APackageMiddle location="Sigiriya" />
      <Footer />
    </div>
  );
}

export default APackage;
