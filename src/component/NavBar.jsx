import { Link } from 'react-router-dom'
import schoolLogo from '/logo.png'
import { useState } from 'react'

function NavBar() {
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isAcadOpen, setIsAcadOpen] = useState(false)
  const [isTVLOpen, setIsTVLOpen] = useState(false)

  const openAbout = () => {
    setIsAboutOpen(!isAboutOpen)
    setIsAcadOpen(false)
    setIsTVLOpen(false)
  }
  const openAcad = () => {
    setIsAcadOpen(!isAcadOpen)
    setIsAboutOpen(false)
    setIsTVLOpen(false)
  }

  const openTVL = () => {
    setIsTVLOpen(!isTVLOpen)
    setIsAboutOpen(false)
    setIsAcadOpen(false)
  }

  return (
    <>
      <div className="head">
        <img id='slogo' src={schoolLogo} alt="TMCSHS"/>
        <h1>TRECE MARTIRES CITY SENIOR HIGH SCHOOL</h1>
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
        <b style={{ position: 'relative' }}>
          <div className='nav-button track-row'  onClick={openTVL}>TVL TRACK</div>
          <div className='dropdown' style={{ display: isTVLOpen ? 'flex' : 'none'}}>
          <Link id='dd-link' to={"/bread"}>
            <b className='dd-button track-row'>Bread & Pastry</b>
          </Link>
          <Link id='dd-link' to={"/care"}>
            <b className='dd-button track-row'>Caregiving & Wellness</b>
          </Link>
            </div>
          </b>
        <Link id='navbarlink' to={"/faculty"}>
            <b className='nav-button track-row'>FACULTY AND STAFF</b>
        </Link>
      </div>

      
    </>
  )
}

export default NavBar
