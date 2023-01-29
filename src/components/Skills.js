import React, { Component } from 'react'
import SkillCard from './SkillCard'
import SkillsCss from '../assets/css/SkillsCss.css'
import mountbg from '../assets/videos/MountView.mp4'

class Skills extends Component {
    constructor(props){
        super(props)
        this.state = {
            txt: 'Scroll over the Expertise.'
        }
    }
    
    changeText = (props) => {
        this.setState({
            txt:props
        })
    }

    render() {
        this.html='Since 2020 '
        this.css='Since 2020 . '
        this.php='Since 2020 . '
    return (
        <React.Fragment>
        <video autoPlay muted loop id="myVideo">
          <source src={mountbg} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div class="wrapper_skills">
          <div class="skillsDisplay">
            {this.state.txt}
          </div>
          <center>
          <div class="skillScroll" id="style-4">
            <div class="skillItem" onMouseEnter={() => this.changeText(this.html)}>html</div>
            <div class="skillItem" onMouseEnter={() => this.changeText(this.css)}>css</div>
            <div class="skillItem" onMouseEnter={() => this.changeText(this.php)}>php</div>
            <div class="skillItem" onMouseEnter={() => this.changeText(this.html)}>html</div>
            <div class="skillItem" onMouseEnter={() => this.changeText(this.css)}>css</div>
            <div class="skillItem" onMouseEnter={() => this.changeText(this.php)}>php</div>
            <div class="skillItem" onMouseEnter={() => this.changeText(this.html)}>html</div>
            <div class="skillItem" onMouseEnter={() => this.changeText(this.css)}>css</div>
            <div class="skillItem" onMouseEnter={() => this.changeText(this.php)}>php</div>
          </div>
          </center>
        </div>
      </React.Fragment>
    )
  }
}

export default Skills