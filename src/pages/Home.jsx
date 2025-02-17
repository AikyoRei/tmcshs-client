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
              <Link to="/enrollment">
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
            <b>Trece Martires City Senior High School (TMCSHS) is the only public stand-alone educational institution that provides senior high school education in Trece Martires City. It aspires its students to uphold excellence, relevance, and service in fostering their education.</b>
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
          <b id="introchild">Our school offers a quality education from:</b>
          <div className="rows">
            <div className="columns">
              <b id="tracks1">Academic Track</b>
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
            <div className="columns2">
              <Link id="strandlink" to="/tvl">
              <b id="tracks" className="track-row">Technical, Vocational, and Livelihood Track</b>
              </Link>
            </div>
            <div className="columns2">
              <Link id="strandlink" to="/als">
              <b id="tracks" className="track-row">Alternative Learning System</b> 
              </Link>
            </div>
          </div>
          </div>
      </div>

    </body>
  )
}


export default Home