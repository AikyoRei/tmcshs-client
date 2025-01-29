import { Link } from "react-router-dom"

const Humss = () => {
    return (
      <body>
        <div className="humssrow">
          <div className="stemHead">
            <b>HUMSS</b>
            <img id='stemlogo' src="HUMSS.png" alt="HUMSS Logo"/>
          </div>
          <div className="stemIntro">
            <b>The Humanities and Social Sciences strand delves into the realms of liberal arts, equipping students with the ability to contemplate, articulate, and engage with a wide array of humanistic and societal issues. Students enrolled in this strand participate in classes tailored to sharpen their cognitive faculties, enhance interpersonal aptitude, introduce them to cultural and linguistic variety, and foster multidisciplinary critical thinking.</b>
          </div>
        <div className="stemCpath">
            <img id='cPath' src="Cpath.png" alt="Career Paths"/>
            <img id='cPathText' src="HUMSScPath.png" alt="Career Paths Examples"/>
        </div>
        </div>
        <div className="humssRequirements">
          <b id='stemRequireHead'>REQUIREMENTS</b>
          <div className="stemRequireRow">
            <b>1. </b>
            <b>2. </b>
          </div>
        </div>
        <div className="humssSubjects">
          <h1 id='stemSub'>GRADE 11 SUBJECTS</h1>
            <table id="STEMtable">
              <tr>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </table>
          <h1 id='stemSub'>GRADE 12 SUBJECTS</h1>
            <table id="STEMtable">
              <tr>
                <th>1st Semester</th>
                <th>2nd Semester</th>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </table>
          <div className="enrollbuttonsec">
          <Link to="/enrollment" id="enrolllink">
            <b id="lezgoEnroll" className="track-enroll">ENROLL NOW!</b>
          </Link>
          </div>
        </div>
      </body>
    )
  }
  
  export default Humss