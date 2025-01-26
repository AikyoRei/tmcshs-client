import { Link } from "react-router-dom"

const Enroll = () => {
    return (
      <body>
        <div id="EnrollHere">
          <div id="Enrollbody">
            <div id="Enrollhead">
              <h1>Enroll at</h1>
              <h1 id="tmcshscolor">TMCSHS</h1>
            </div>
            <div className="welcomebro">
              <b>Thank you for your interest in enrolling here at Trece Martires City Senior High School!</b>
              <a>I am an incoming...</a>
              <table id="overalltable">
                <td id="enrolltable">
                  <a href="#g11STEM"><div className="track-bro" id="tablelink">Grade 11 STEM Student</div></a>
                </td>
                <td id="enrolltable">
                  <a href="#g11AHT"><div className="track-bro" id="tablelink">Grade 11 ABM/HUMSS/TVL Student</div></a>
                </td>
                <td id="enrolltable">
                  <a href="#AdmitALS"><div className="track-bro" id="tablelink">ALS Student</div></a>
                </td>
                <td id="enrolltable">
                  <a href="#g12TRANSFER"><div className="track-bro" id="tablelink">Grade 12 Student (Transferee)</div></a>
                </td>
              </table>

              <b id="g11STEM">Here are the steps for admission of incoming GRADE 11 STEM Students:</b>
              <b id="g11AHT">Here are the steps for admission of incoming GRADE 11 ABM/HUMSS/TVL Students:</b>
              <b id="AdmitALS">Here are the steps for admission of incoming ALS Students:</b>
              <b id="g12TRANSFER">Here are the steps for admission of transferees:</b>

              <Link to="/register" id="enrolllink">
                <b id="lezgoEnroll" className="track-enroll">ENROLL NOW!</b>
              </Link>
              
            </div>
          </div>
        </div>
      </body>
      
    )
  }
  
  export default Enroll