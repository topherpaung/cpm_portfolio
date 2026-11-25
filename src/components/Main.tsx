import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import lightVideo from '../assets/videos/light_vid.mp4';
import darkVideo from '../assets/videos/dark_vid.mp4';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <video className="light-mode-video" autoPlay muted loop playsInline aria-hidden="true">
          <source src={lightVideo} type="video/mp4" />
        </video>
        <video className="dark-mode-video" autoPlay muted loop playsInline aria-hidden="true">
          <source src={darkVideo} type="video/mp4" />
        </video>
        <div className="image-wrapper">
          <img src={require('./profile.png')} alt="Profile" />
        </div>
        <div className="content"> 
          <div className="social_icons">
            <a href="https://github.com/topherpaung" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/christopher-marpaung-1451682b3/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Christopher Parulian Marpaung</h1>
          <h2>Curious about Data Science and Data Analytics</h2>
          <p>I enjoy exploring data, applying statistical and machine learning methods, and communicating findings through clear visualizations. My interests include data cleaning, exploratory analysis, predictive modeling, and turning data into useful insights.</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/topherpaung" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/christopher-marpaung-1451682b3/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
