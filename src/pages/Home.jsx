import { Link } from "react-router-dom"

const Home = () => {
  return (
    <body>
      <div className="home">
        <div id="wclawins">
          <h1>Welcome,</h1>
          <h1 id="lawin">Lawins!</h1>
          <img src="lawin.png" alt="LAWIN"/>
        </div>
        <table id="homechoices">
          <tr>
            <td id="td2">
              <Link to="/register">
                <b className="choice track-column">Enroll Now!</b>
              </Link>
            </td>
          </tr>
          <tr>
            <td id="td2">
              <a href="#strand" id='scroll'>
                <b className="choice track-column">Tracks & Strands</b>
              </a>
            </td>
          </tr>
          <tr>
            <td id="td2">
              <a href="#introLink" id="scroll">
                <b className="choice track-column">TMCSHS Tales</b>
              </a>
            </td>
          </tr>
        </table>
      </div>
      <div className="introduction">
          <div id="introLink">
            <b>TMCSHS is a stand-alone senior high school chu chu Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestiae, laboriosam optio deserunt cum esse dolorum accusantium commodi! Modi id amet dolores, veritatis fugiat esse aliquam nesciunt corrupti reprehenderit impedit.</b>
            <Link id="introToAboutMe" to="/tmcshs">
              <b className="track-row">- Learn More -</b>
            </Link>
          </div>
          <img id='sphoto' src="school.png" alt="TMCSHS"/>
      </div>

      <div className="strands">
          <img id='sphoto' src="strandslogo.png" alt="Strands Logo"/>
          <div className="strands2">
          <h2 id="strand">TRACK & STRANDS</h2>
          <b>Our school offers a quality education from:</b>
          <div className="columns">
            <div className="rows">
              <b id="tracks">Academic Track</b>
              <div className="rows">
                <Link id="strandlink" to="/stem">
                    <b className="track-row">STEM</b>
                </Link>
                <Link id="strandlink" to="/abm">
                  <b className="track-row">ABM</b>
                </Link>
                <Link id="strandlink" to="/humss">
                  <b className="track-row">HUMSS</b>
                </Link>
              </div>
            </div>
            <div className="rows">
              <b id="tracks">TVL Track</b>
              <div className="rows">
                <Link id="strandlink" to="/bread">
                  <b className="track-row">Bread & Pastry</b>
                </Link>
                <Link id="strandlink" to="/care">
                  <b className="track-row">Caregiving & Wellness</b>
                </Link>
              </div>
            </div>
          </div>
          </div>
      </div>

    </body>
  )
}


export default Home