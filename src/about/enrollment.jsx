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
              <b>Here are the steps for admission of incoming TMCSHS Students:</b>
              
              <img id="enrollna" src="enrollmentprocess.png" alt="enrollment process"/>

              <div className="backgroundlang">
                <h2>Registration and Log In</h2>
                <div className="indentbro">
                  <a>1. Click the &quot;Register&quot; button on the top-right of the TMCSHS Website.</a>
                  <a>2. Fill in the needed information such as Student Number (LRN), Full Name, Username, and Password.</a>
                  <a>3. Create the account.</a>
                  <a>4. Log in the registered account (&quot;log in&quot; button also on the top-right of the website).</a>
                </div>
                <h2>Google Form BEEF</h2>
                <div className="indentbro">
                  <a>1. Click the &quot;Google Form BEEF&quot; button after logging in.</a>
                  <a>2. Fill up the Basic Education Enrollment Form (BEEF) or ALS Modified Enrollment Form via Google Form.</a>
                  <a>3. Google Form BEEF Verification: The assigned teacher will verify if the learner has accomplished the BEEF through Google Form.</a>
                  <a>4. The submitted grades will be evaluated by an assigned teacher.</a>
                </div>             
                <h2>Online Reading Assessment</h2>
                <div className="indentbro">
                  <a>1. Once the assign teacher has verified the learner&apos;s accomplished BEEF, the link for Online Reading Assessment will appear.</a>
                  <a>2. Click the &quot;Online Reading Assessment&quot; button.</a>
                  <a>3. Take the Online Reading Assessment.</a>
                  <a>4. Reading Assessment Verification: The assigned teacher will verify if the learner has accomplished the online reading assessment.</a>
                </div>             
                <h2>On-site Requirements Submission</h2>
                <div className="indentbro">
                  <div id="facebookkasi">
                    <a>1. The schedule for the on-site submission of requirements will be announced through the </a>
                    <a id="fbpagelink" href="https://www.facebook.com/tmcshs">TMCSHS Facebook Page</a>
                    <a>.</a>
                  </div>
                  <a>2. Submit all the requirements and forms in a brown envelope.</a>
                  <a>3. On-site Requirements Submission Verification: The assigned teacher will verify if the learner has submitted all the requirements.</a>
                </div>             
                <h2>News and Announcements</h2>
                <div className="indentbro">
                  <a>1. If there are issues regarding the enrollment process or requirements, the TMCSHS will send an e-mail to the learner.</a>
                  <div id="facebookkasi">
                    <a>2. Once all the steps are accomplished, wait for the announcement in the </a>
                    <a id="fbpagelink" href="https://www.facebook.com/tmcshs">TMCSHS Facebook Page </a>
                    <a>to be informed of the learner&apos;s assigned section.</a>
                  </div>
                  <a>3. For any inquiries or concerns, contact TMCSHS through e-mail or Facebook page, or look for the school registrar.</a>
                </div>             
              </div>

              <b>* You can monitor the verification of the forms and requirements by logging in the Enrollment Portal.</b>

              <Link to="/signup" id="enrolllink">
                <b id="lezgoEnroll" className="track-enroll">ENROLL NOW!</b>
              </Link>
              
            </div>
          </div>
        </div>
      </body>
      
    )
  }
  
  export default Enroll