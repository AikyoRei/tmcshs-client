import TMCSHS from './about/tmcshs';
import Enroll from './about/enrollment';
import Abm from './academic/abm';
import Humss from './academic/humss';
import Stem from './academic/stem';
import TVL from './pages/TVL';
import './App.css'
import './_css/pages.css'
import './_css/strands.css'
import './_css/enroll.css'
import './_css/enrollpage.css'
import './_css/signup.css'
import './_css/students.css'
import './_css/als.css'
import './_css/about.css'
import NavBar from './component/NavBar';
import FootBar from './component/FootBar';
import Faculty from './pages/Faculty';
import ALS from './pages/ALS';
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import StudentsPage from './pages/Students';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { AuthContext } from './AuthProvider';
import { useContext } from 'react';
import EnrollmentProcess from './pages/EnrollmentProcess';

function AppRouter() {
  const { isTokenValid, isStaff } = useContext(AuthContext);

  return (
    <>
      {
        isTokenValid === undefined 
          ? <>Loading...</> 
          : <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/als" element={<ALS />} />
              <Route path="/tmcshs" element={<TMCSHS />} />
              <Route path="/enrollment" element={<Enroll />} />
              <Route path="/abm" element={<Abm />} />
              <Route path="/humss" element={<Humss />} />
              <Route path="/stem" element={<Stem />} />
              <Route path="/tvl" element={<TVL />} />
              <Route path="/register" element={<Register />} />
              {
                isTokenValid && isStaff &&
                <Route path="/students" element={<StudentsPage />} />
              }
              {
                !isTokenValid &&
                <Route path="/signup" element={<Signup />} />
              }
              {
                isTokenValid && !isStaff &&
                <Route path="/enrollment-process" element={<EnrollmentProcess />} />
              }
              <Route path="/login" element={<Login />} />
            </Routes>
            <FootBar />
          </BrowserRouter>

      }

    </>
  )
}

export default AppRouter
