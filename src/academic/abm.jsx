import { Link } from "react-router-dom"

const Abm = () => {
    return (
      <body>
        <div className="abmrow">
          <div className="stemHead">
            <b>ABM</b>
            <img id='stemlogo' src="ABM.png" alt="ABM Logo"/>
          </div>
          <div className="stemIntro">
            <b>The Accountancy, Business, and Management Strand serves as a gateway to pursuing college degrees in business-related fields. It covers fundamental principles of financial management, accounting, and corporate operations. The courses within this strand are designed to impart essential skills necessary for success in future careers and entrepreneurial ventures.</b>
          </div>
        <div className="stemCpath">
            <img id='cPath' src="Cpath.png" alt="Career Paths"/>
            <img id='cPathText' src="ABMcPath.png" alt="Career Paths Examples"/>
        </div>
        </div>
        <div className="abmRequirements">
          <b id='stemRequireHead'>REQUIREMENTS</b>
          <div className="stemRequireRow">
            <b>1. </b>
            <b>2. </b>
          </div>
        </div>
        <div className="abmSubjects">
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
  
  export default Abm