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
            <a>The Humanities and Social Sciences strand delves into the realms of liberal arts, equipping students with the ability to contemplate, articulate, and engage with a wide array of humanistic and societal issues. Students enrolled in this strand participate in classes tailored to sharpen their cognitive faculties, enhance interpersonal aptitude, introduce them to cultural and linguistic variety, and foster multidisciplinary critical thinking.</a>
          </div>
        <div className="stemCpath">
            <img id='cPath' src="Cpath.png" alt="Career Paths"/>
            <img id='cPathText' src="HUMSScPath.png" alt="Career Paths Examples"/>
        </div>
        </div>

        <div className="humssSubjects">
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
                <td>Philippine Politics and Governance</td>
                <td>Introduction to World Religions and Belief System</td>
              </tr>
              <tr>
                <td>Discipline, and Ideas in the Social Sciences</td>
                <td>Discipline, and Ideas in the Applied Social Sciences</td>
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
                <td>Malikhaing Pagsulat</td>
                <td>Community Engagement, Solidarity, and Citizenship</td>
              </tr>
              <tr>
                <td>Creative Nonfiction</td>
                <td>Trends, Networks, and Critical Thinking in the 21st Century</td>
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
  
  export default Humss