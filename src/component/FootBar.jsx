

const FootBar = () => {
  return (
    <body className="footer">
        <div className="foothead">
        <h3>Trece Martires City Senior High School</h3>
        </div>
        <div className="footbody">
            <img className='icon1' src="location.png" alt="location"/>
                <article>Barangay Gregorio, Trece Martires City, Cavite, Philippines 4109</article>
        </div>
        <div className="footbody">
            <img className='icon2' src="email.png" alt="email"/>    
                <article>depedcavite.tmcshs@gmail.com</article>
        </div>
        <div className="footbody2">
            <img className='icon3' src="fb.png" alt="fb page"/>
                <a className="track-row" id='footlink' href="https://www.facebook.com/tmcshs">https://www.facebook.com/tmcshs</a>
        </div>
        <div className="footID">School ID: 342292</div>
    </body>
  )
}

export default FootBar