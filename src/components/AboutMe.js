import React from 'react'
import AboutMeCss from '../assets/css/AboutMeCss.css'
import aboutPic from '../assets/images/homeProfile.png'

function AboutMe() {
  return (
    <React.Fragment>
        <div class="wrapper_aboutMe">
            <div class="wrapper_aboutMe2">
              <div class="lineOne">I'm</div>
              <div class="lineTwo">SHOBHAN </div>
              <img src={aboutPic} />
              <span class="lineThreeHead">KUMAR</span>
                <br />    
              <span class="intro"><br />    
                  I do something and many things. 
                  I do something and many things.
                  I do something and many things
                  I do something and many things
                  I do something and many things
              </span>
              <br /><br /><br />
              <div class="btnGrp">
                <button variant="outlined" size="large" class="btnItem2">Let's Design</button>
                <button variant="contained" size="large" class="btnItem1">Let's Build</button>
              </div>
            </div>
        </div>

    </React.Fragment>
  )
}

export default AboutMe