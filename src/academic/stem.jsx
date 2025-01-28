import { Link } from "react-router-dom"

const Stem = () => {
    return (
      <body>
        <div className="stemrow">
          <div className="stemHead">
            <b>STEM</b>
            <img id='stemlogo' src="STEM.png" alt="STEM Logo"/>
          </div>
          <div className="stemIntro">
            <b>The Science, Technology, Engineering, and Mathematics strand provides students with practical experiences and theoretical knowledge to develop problem-solving skills and analytical thinking. In this strand, students are prepared for careers in fields such as engineering, medicine, information technology, and scientific research, adapting them to our technology-driven world.</b>
          </div>
        <div className="stemCpath">
            <img id='cPath' src="Cpath.png" alt="Career Paths"/>
            <img id='cPathText' src="CpathText.png" alt="Career Paths Examples"/>
        </div>
        </div>
        <div className="stemRequirements">
          <b id='stemRequireHead'>REQUIREMENTS</b>
          <div className="stemRequireRow">
            <b>For Incoming Grade 11 Students</b>
            <b>1. Final grade in Mathematics and Science no lower than 85</b>
            <b>2. General Average no lower than 83</b>
          </div>
        </div>
        <div className="stemSubjects">
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
                <td>Earth Science</td>
                <td>Disaster Risk Reduction and Readiness</td>
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
                <td>Pre-Calculus</td>
                <td>Basic Calculus</td>
              </tr>
              <tr>
                <td>General Biology 1</td>
                <td>General Biology 2</td>
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
                <td>General Physics 1</td>
                <td>General Physics 2</td>
              </tr>
              <tr>
                <td>General Chemistry 1</td>
                <td>General Chemistry 2</td>
              </tr>
              <tr>
                <td></td>
                <td>Work Immersion</td>
              </tr>
            </table>
          <div className="enrollbuttonsec">
          <Link to="/register" id="enrolllink">
                  <b id="lezgoEnroll" className="track-enroll">ENROLL NOW!</b>
                </Link>
          </div>
        </div>
      </body>
    )
  }
  
  export default Stem