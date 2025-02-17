
const Faculty = () => {
  return (
    <body>
      <div className="SFbg">
        <div className="SF">
          <h1 id="SFhead1">SCHOOL</h1>
          <h1 id="SFhead2">FACILITIES</h1>
        </div>
        <table className="SFchoices">
          <tr>
            <th id="tdSF">
              <a href="#comlab" className="choiceSF track-SF">Computer Laboratory</a>
            </th>
            <th id="tdSF">
              <a href="#scilab" className="choiceSF track-SF">Science Laboratory</a>
            </th>
            <th id="tdSF">
              <a href="#TVLroom" className="choiceSF track-SF">Bread & Pastry Room</a>
            </th>
            <th id="tdSF">
              <a href="#TVLroom2" className="choiceSF track-SF">Caregiving Room</a>
            </th>
          </tr>
          <tr>
            <th id="tdSF">
              <a href="#library" className="choiceSF track-SF">Library</a>
            </th>
            <th id="tdSF">
              <a href="#court" className="choiceSF track-SF">Covered Court</a>
            </th>
            <th id="tdSF">
              <a href="#canteen" className="choiceSF track-SF">Canteen</a>
            </th>
            <th id="tdSF">
              <a href="#clinic" className="choiceSF track-SF">Clinic</a>
            </th>
          </tr>
        </table>
        <div className="comlabRow">
          <div className="comlabColumn">
            <h2 id="comlab">COMPUTER LABORATORY</h2>
            <a id="comlabDesc">It is located at the 2nd Floor of Kaalaman building. For subjects that needs hands-on software activities such as Empowerment Technologies and Media and Information Literacy, students use this computer laboratory.</a>
          </div>
          <img id="comlabPic" src="COMLABframe.png" alt="ComLab"/>
        </div>
      </div>
      <div className="scilabBG">
        <div>
          <img id="scilabPic" src="SCILABframe.png" alt="SciLab"/>
        </div>
        <div className="scilabColumn">
          <h2 id="scilab">SCIENCE LABORATORY</h2>
          <a id="scilabDesc">It is located at the 1st Floor of Pag-ibig building. For science subjects that needs hands-on experimental activities, students use this science laboratory.</a>
        </div>
      </div>
      <div className="tvlColumn">
        <div className="tvlRow">
          <div className="comlabColumn">
            <h2 id="TVLroom">BREAD & PASTRY ROOM</h2>
            <a id="tvlDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ea molestiae voluptate aliquid totam iure autem distinctio expedita rerum! Maiores aspernatur iusto aliquam qui nobis laborum provident minus eos voluptas!</a>
          </div>
          <div className="comlabColumn">
            <h2 id="TVLroom2">CAREGIVING ROOM</h2>
            <a id="tvlDesc2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit expedita earum in nihil culpa perferendis voluptatem natus corrupti, magni facere sed magnam nemo eos quae quisquam dolor quia, labore aperiam.
            </a>
          </div>
        </div>
        <div>
          <div className="tvlPics">
            <img id="tvlPic" src="BPpic.png" alt="bread and pastry"/>
            <img id="tvlPic2" src="CGpic.png" alt="caregiving"/>
          </div>
        </div>
      </div>
      <div className="scilabBG">
        <div>
          <img id="scilabPic" src="SCILABframe.png" alt="SciLab"/>
        </div>
        <div className="scilabColumn">
          <h2 id="library">LIBRARY</h2>
          <a id="scilabDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel esse soluta excepturi ut, nihil nisi reiciendis voluptatem itaque dicta expedita deserunt repudiandae explicabo dolorem a, vitae cum. Culpa, quas ipsum?</a>
        </div>
      </div>
      <div className="scilabBG">
        <div>
          <img id="scilabPic" src="SCILABframe.png" alt="SciLab"/>
        </div>
        <div className="scilabColumn">
          <h2 id="court">COVERED COURT</h2>
          <a id="scilabDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel esse soluta excepturi ut, nihil nisi reiciendis voluptatem itaque dicta expedita deserunt repudiandae explicabo dolorem a, vitae cum. Culpa, quas ipsum?</a>
        </div>
      </div>
      <div className="scilabBG">
        <div>
          <img id="scilabPic" src="SCILABframe.png" alt="SciLab"/>
        </div>
        <div className="scilabColumn">
          <h2 id="canteen">CANTEEN</h2>
          <a id="scilabDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel esse soluta excepturi ut, nihil nisi reiciendis voluptatem itaque dicta expedita deserunt repudiandae explicabo dolorem a, vitae cum. Culpa, quas ipsum?</a>
        </div>
      </div>
      <div className="scilabBG">
        <div>
          <img id="scilabPic" src="SCILABframe.png" alt="SciLab"/>
        </div>
        <div className="scilabColumn">
          <h2 id="clinic">CLINIC</h2>
          <a id="scilabDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel esse soluta excepturi ut, nihil nisi reiciendis voluptatem itaque dicta expedita deserunt repudiandae explicabo dolorem a, vitae cum. Culpa, quas ipsum?</a>
        </div>
      </div>
    </body>
  )
}

export default Faculty