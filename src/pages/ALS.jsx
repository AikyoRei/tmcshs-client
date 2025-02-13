import { Link } from "react-router-dom"

const ALS = () => {
    return (
      <body>
        <div className="humssrow">
          <div className="alsHead">
            <b>Alternative Learning System</b>
          </div>
          <div className="stemIntro">
            <a>The Alternative Learning System (ALS) is a parallel learning system in the Philippines that provides a practical option to the existing formal instruction. It is designed for individuals who do not have or cannot access formal education in schools. The ALS includes both non-formal and informal sources of knowledge and skills and is aimed at providing out-of-school children, youth, and adults with basic education.</a>
          </div>
          <table id="ALStable">
            <tr>
              <th>Academic</th>
              <th>TVL</th>
            </tr>
            <tr>
              <td>HUMSS</td>
              <td>HOME Economics (Caregiving)</td>
            </tr>
          </table>
        </div>
        <div className="alsRequirements">
          <b id='stemRequireHead'>REQUIREMENTS</b>
          <div className="stemRequireRow">
            <a>1. AF5 - Permanent Record (Original)</a>
            <a>2. ALS Certificate (Photocopy)</a>
            <a>3. Birth Certificate (PSA/LCR) - Photocopy</a>
          </div>
        </div>
        <div className="alsbuttonsec">
          <div className="enrollbuttonsec">
          <Link to="/enrollment" id="enrolllink">
                <b id="lezgoEnroll" className="track-enroll">ENROLL NOW!</b>
          </Link>
          </div>
        </div>
      </body>
    )
  }
  
  export default ALS