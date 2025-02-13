import { Link } from 'react-router-dom'
import schoolLogo from '/logo.png'
import { useContext, useState } from 'react'
import { AuthContext } from '../AuthProvider'

function NavBar() {
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isAcadOpen, setIsAcadOpen] = useState(false)

  const openAbout = () => {
    setIsAboutOpen(!isAboutOpen)
    setIsAcadOpen(false)
  }

  const openAcad = () => {
    setIsAcadOpen(!isAcadOpen)
    setIsAboutOpen(false)
  }

  const { isTokenValid, setIsTokenValid } = useContext(AuthContext);
  const handleLogout = () => {
    localStorage.setItem("token", "")
    localStorage.setItem("userId", "")
    window.location.href = "/login"
    setIsTokenValid(false)
    console.log(isTokenValid)
  }

  return (
    <>
      <div className="headmain">
        <div className='head'>
          <img id='slogo' src={schoolLogo} alt="TMCSHS"/>
          <h1>TRECE MARTIRES CITY SENIOR HIGH SCHOOL</h1>
        </div>
        <div className='head2'>
          {
            !isTokenValid && <>
              <Link id='headbarlink' to={"/signup"}>
                <b id='loginpo' className='track-row'>Register</b>
              </Link>
              <Link id='headbarlink' to={"/login"}>
                <b id='loginpo' className='track-row'>Log In</b>
              </Link>
            </>
          } {
            isTokenValid && <>
              <Link id='headbarlink' to={"/login"} onClick={handleLogout}>
                <b id='loginpo' className='track-row'>Log Out</b>
              </Link>
            </>
          }
          <Link id='headbarlink' to={isTokenValid? "enrollment-process" : "/enrollment"}>
            <b id='loginpo' className='track-row'>Enroll</b>
          </Link>
        </div>
      </div>

      <div className="navbar">
        <Link id='navbarlink' to={"/"}>
            <b className='nav-button track-row'>HOME</b>
        </Link>

        <b style={{ position: 'relative' }}>
          <div className='nav-button track-row'  onClick={openAbout}>ABOUT</div>
          <div className='dropdown' style={{ display: isAboutOpen ? 'flex' : 'none'}}>
            <Link id='dd-link' to={"/tmcshs"}>
              <b className='dd-button track-row'>About TMCSHS</b>
            </Link>
            <Link id='dd-link' to={"/enrollment"}>
              <b className='dd-button track-row'>Enrollment</b>
            </Link>
          </div>
        </b>

        <b style={{ position: 'relative' }}>
          <div className='nav-button track-row'  onClick={openAcad}>ACADEMIC TRACK</div>
          <div className='dropdown' style={{ display: isAcadOpen ? 'flex' : 'none'}}>
          <Link id='dd-link' to={"/stem"}>
            <b className='dd-button track-row'>STEM</b>
          </Link>
          <Link id='dd-link' to={"/abm"}>
            <b className='dd-button track-row'>ABM</b>
          </Link>
          <Link id='dd-link' to={"/humss"}>
            <b className='dd-button track-row'>HUMSS</b>
          </Link>
          </div>
        </b>

        <Link id='navbarlink' to={"/tvl"}>
          <b className='nav-button track-row'>TVL TRACK</b>
        </Link>

        <Link id='navbarlink' to={"/als"}>
          <b className='nav-button track-row'>ALS</b>
        </Link>

        <Link id='navbarlink' to={"/faculty"}>
            <b className='nav-button track-row'>FACULTY AND STAFF</b>
        </Link>
      </div>

      
    </>
  )
}

export default NavBar
