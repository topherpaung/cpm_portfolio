import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/topherpaung" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/christopher-marpaung-1451682b3/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>@2026 <a href="https://topherpaung.github.io/cpm_portfolio/" target="_blank" rel="noreferrer"> Christopher Marpaung</a></p>
    </footer>
  );
}

export default Footer;