import { Link } from "react-router-dom"

const TVL = () => {
    return (
      <body>
        <div className="tvlBG">
          <div className="stemHead">
            <b>TVL</b>
            <img id='stemlogo' src="STEM.png" alt="STEM Logo"/>
          </div>
          <div className="stemIntro">
            <a>The Technical, Vocational, and Livelihood Track offers specialized training and skills development tailored to various industries and professions. Students engage in hands-on learning experiences, acquiring practical skills and knowledge directly applicable to specific trades or vacations. This track equips students with the competencies needed to pursue employment opportunities immediately after graduation or to further their education through technical courses or apprenticeships.</a>
          </div>
        <div className="stemCpath">
            <img id='cPath' src="Cpath.png" alt="Career Paths"/>
            <img id='cPathText' src="CpathText.png" alt="Career Paths Examples"/>
        </div>
        </div>

        <div className="tvlSubjects">
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
                <td>Cookery 1</td>
                <td>Food and Beverages Services 1</td>
              </tr>
              <tr>
                <td>Cookery 2</td>
                <td>Food and Beverages Services 2</td>
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
                <td>Bread and Pastry Production 1</td>
                <td>Bread and Pastry Production 2</td>
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
  
  export default TVL