import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AbotUs from './pages/AboutUs';
import Booking from './pages/Booking';
import ContactUs from './pages/ContactUs';
import Pakages from './pages/Pakages';
import WhereToGo from './pages/WhereToGo';
import APackage from './pages/APackage';
import WhatToDo from './components/WhatToDo';
import ALocationOrActivity from './pages/ALocationOrActivity';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/About" element={<AbotUs></AbotUs>}></Route>
        <Route
          path="/packages/:packageName/booking"
          element={<Booking></Booking>}
        ></Route>
        <Route path="/Contact" element={<ContactUs></ContactUs>}></Route>
        <Route path="/packages" element={<Pakages></Pakages>}></Route>
        <Route path="/wheretogo" element={<WhereToGo></WhereToGo>}></Route>
        <Route
          path="/wheretogo/:locationName"
          element={<ALocationOrActivity></ALocationOrActivity>}
        ></Route>
        <Route
          path="/packages/:packageName"
          element={<APackage></APackage>}
        ></Route>
        <Route path="/whattodo" element={<WhatToDo></WhatToDo>}></Route>
        <Route
          path="/whattodo/:locationName"
          element={<ALocationOrActivity></ALocationOrActivity>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
