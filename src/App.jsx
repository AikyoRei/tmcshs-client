import TMCSHS from './about/tmcshs';
import Enroll from './about/enrollment';
import Abm from './academic/abm';
import Humss from './academic/humss';
import Stem from './academic/stem';
import Bread from './tvl/bread';
import Care from './tvl/caregiving';
import './App.css'
import './_css/pages.css'
import './_css/strands.css'
import NavBar from './component/NavBar';
import FootBar from './component/FootBar';
import Faculty from './pages/Faculty';
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/tmcshs" element={<TMCSHS />} />
          <Route path="/enrollment" element={<Enroll />} />
          <Route path="/abm" element={<Abm />} />
          <Route path="/humss" element={<Humss />} />
          <Route path="/stem" element={<Stem />} />
          <Route path="/bread" element={<Bread />} />
          <Route path="/care" element={<Care />} />
        </Routes>
        <FootBar />
      </BrowserRouter>
    </>
  )
}

export default App
