
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
            <a id="comlabDesc">It is located at the 2nd Floor of Kaalaman building. For subjects that needs hands-on software activities such as Empowerment Technologies and Media and Information Literacy, students use this computer laboratory. Tablets provided by DepEd are also available for those who are in need of a gadget for studies.</a>
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
          <a id="scilabDesc">It is located at the 1st Floor of Pag-ibig building. For science subjects that needs hands-on experimental activities, students use this science laboratory. Laboratoy equipments are also available such as microscopes, flasks, etc.</a>
        </div>
      </div>
      <div className="tvlColumn">
        <div className="tvlRow">
          <div className="comlabColumn">
            <h2 id="TVLroom">BREAD & PASTRY ROOM</h2>
            <a id="tvlDesc">For TVL students who has Cookery, Food and Beverages Services, and Bread and Pastry Production subjects, this room is provided to learn and hone their skills through an actual kitchen setting.</a>
          </div>
          <div className="comlabColumn">
            <h2 id="TVLroom2">CAREGIVING ROOM</h2>
            <a id="tvlDesc2">This area is provided for TVL students who are studying for Home Economics. Caregiving, a specialized subject in TVL Track, is also included for ALS who will choose this track.</a>
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
          <img id="scilabPic" src="LIBRARY.png" alt="Library"/>
        </div>
        <div className="scilabColumn">
          <h2 id="library">LIBRARY</h2>
          <a id="scilabDesc">It is located at the 1st Floor of Katarungan building. Students are allowed to stay and borrow books here in the library. Even for their research, existing studies are available as their reliable source of information.</a>
        </div>
      </div>
      <div className="courtBG">
        <div className="scilabColumn">
          <h2 id="court">COVERED COURT</h2>
          <a id="courtDesc">Rain or Shine, games will still continue. TMCSHS has its court covered in order for the students to use whenever they want. Basketball rings and volleyball net are available as this school proudly presents the sports team who uses this court for trainings.</a>
        </div>
        <div>
          <img id="scilabPic" src="COURTred.png" alt="Court"/>
        </div>
      </div>
      <div className="scilabBG">
        <div>
          <img id="scilabPic" src="CANTEEN.png" alt="Canteen"/>
        </div>
        <div className="scilabColumn">
          <h2 id="canteen">CANTEEN</h2>
          <a id="scilabDesc">Healthy yet delicious food and drinks are available here at the canteen. It also offers snacks in an affordable price for their customers.</a>
        </div>
      </div>
      <div className="courtBG">
        <div className="scilabColumn">
          <h2 id="clinic">CLINIC</h2>
          <a id="courtDesc">In case of emergency, students are brought to the clinic. Whenever they feel sick or need medicine, this place, together with the medicines and equipments, is available for them. Aside from that, it is also the location for medical examination of students.</a>
        </div>
        <div>
          <img id="scilabPic" src="CLINICred.png" alt="Clinic"/>
        </div>
      </div>
    </body>
  )
}

export default Faculty