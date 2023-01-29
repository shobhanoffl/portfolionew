import React from 'react'
import NavHomeCss from '../assets/css/NavHomeCss.css'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ArchitectureRoundedIcon from '@mui/icons-material/ArchitectureRounded';
import ComputerRoundedIcon from '@mui/icons-material/ComputerRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';

function NavHome() {
  return (
    <React.Fragment>
      <div class="menu-wrap">
        <div class="menu">
          <span><PersonRoundedIcon /></span>
          <span><ArchitectureRoundedIcon /></span>
          <span><ComputerRoundedIcon /></span>
          <span><EmojiEventsRoundedIcon /></span>
          {/* <span><AutoGraphRoundedIcon /></span> */}
        </div>
      </div>
    </React.Fragment>
  )
}

export default  NavHome