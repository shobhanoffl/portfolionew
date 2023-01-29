import React, { Component } from 'react'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import Forst from '../assets/images/forestRoad.jpeg';
import WorksCss from '../assets/css/WorksCss.css';
import videobg from '../assets/videos/1723017.mp4'

class Works extends Component {
  constructor(props){
    super(props)
      this.state = {
          title: 'Hover',
          desc:'And find out'
      }
  }

  changeClass = (title,desc) => {
      this.setState({
          title:title,
          desc:desc
      })
  }

  render() {
    this.worksTitle = 'Works'
    this.projTitle = 'Projects'
    this.certTitle = 'Certifications'
    return (
    <React.Fragment>
      <video autoPlay muted loop id="myVideo">
        <source src={videobg} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div class="total_wrapper_works">
        <div class="wrapper_works">
          <div class="wrapper_works_desc">
          <WorkIcon style={{fontSize:'115px'}} /><span class="workText">Works</span></div>
          <div class="wrapper_works_desc">
          <WorkspacesIcon style={{fontSize:'115px'}} /><span class="workText">Projects</span></div>
          <div class="wrapper_works_desc">
          <StarIcon style={{fontSize:'115px'}} /><span class="workText">Certifications</span></div>
        </div>
      </div>
      <div class="getInT">
          get in touch
      </div>
      <div class="worksFooter">
        <center>
      Credits: <a href="https://www.pexels.com/video/waves-rushing-to-shore-2408284/">Video by Ruvim Miksanskiy</a>
        </center>
      </div>
      
    {/* + Add Reviews from Clients */}
    </React.Fragment>
    )
  }
}

export default Works