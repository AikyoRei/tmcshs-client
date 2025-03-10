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
            <a>The Accountancy, Business, and Management Strand serves as a gateway to pursuing college degrees in business-related fields. It covers fundamental principles of financial management, accounting, and corporate operations. The courses within this strand are designed to impart essential skills necessary for success in future careers and entrepreneurial ventures.</a>
          </div>
        <div className="stemCpath">
            <img id='cPath' src="Cpath.png" alt="Career Paths"/>
            <img id='cPathText' src="ABMcPath.png" alt="Career Paths Examples"/>
        </div>
        </div>

        <div className="abmSubjects">
          <h1 id='stemSub'>GRADE 11 SUBJECTS</h1>
            <table id="STEMtable">
              <tr>
                <th>1st Semester</th>
                <th>2nd Semester</th>
              </tr>
              <tr>
                <td>Oral Communication in Context</td>
                <td>Reading and Writing Skills</td>
              </tr>
              <tr>
                <td>Komunikasyon at Pananaliksik sa Wika at Kulturang Pilipino</td>
                <td>Pagbasa at Pagsusuri ng Iba&apos;t Ibang Teksto Tungo sa Pananaliksik</td>
              </tr>
              <tr>
                <td>21st Century Literature from the Philippines and the World</td>
                <td>Understanding Culture, Society and Politics</td>
              </tr>
              <tr>
                <td>General Mathematics</td>
                <td>Statistics and Probability</td>
              </tr>
              <tr>
                <td>Earth and Life Science</td>
                <td>Physical Science</td>
              </tr>
              <tr>
                <td>Physical Education and Health 1</td>
                <td>Physical Education and Health 2</td>
              </tr>
              <tr>
                <td>Media and Information Literacy</td>
                <td>Practical Research 1</td>
              </tr>
              <tr>
                <td>Business Mathematics</td>
                <td>Principles of Marketing</td>
              </tr>
              <tr>
                <td>Organization and Management</td>
                <td>Fundamentals of Accountancy, Business, and Management 1</td>
              </tr>
              <tr>
                <td></td>
                <td>Filipino sa Piling Larang</td>
              </tr>
            </table>
          <h1 id='stemSub'>GRADE 12 SUBJECTS</h1>
            <table id="STEMtable">
              <tr>
                <th>1st Semester</th>
                <th>2nd Semester</th>
              </tr>
              <tr>
                <td>Introduction to the Philosophy of the Human Person</td>
                <td>Contemporary Philippine Arts from the Regions</td>
              </tr>
              <tr>
                <td>Personal Development</td>
                <td>Entrepreneurship</td>
              </tr>
              <tr>
                <td>Physical Education and Health 3</td>
                <td>Physical Education and Health 4</td>
              </tr>
              <tr>
                <td>English for Academic and Professional Purposes</td>
                <td>Inquiries, Investigations, and Immersion</td>
              </tr>
              <tr>
                <td>Practical Research 2</td>
                <td>Empowerment Technologies</td>
              </tr>
              <tr>
                <td>Fundamentals of Accountancy, Business, and Management 2</td>
                <td>Business Ethics and Social Responsibility</td>
              </tr>
              <tr>
                <td>Business Finance</td>
                <td>Applied Economics</td>
              </tr>
              <tr>
                <td></td>
                <td>Work Immersion</td>
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