import BackgroundComp from '../components/BackgroundComp';
import Footer from '../components/Footer';
import WhereToGoMiddle from '../components/WhereToGoMiddle';
import WhereToGoUpper from '../components/WhereToGoUpper';
import polhena from '../assets/Home Page/Where to go/polhena.jpg';

function WhereToGo() {
  return (
    <div>
      <WhereToGoUpper backPhoto={polhena} title="Where to go" />
      <WhereToGoMiddle />
      <Footer />
    </div>
  );
}

export default WhereToGo;
