import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={require('./profile.png')} alt="Profile" />
        </div>
        <div className="content"> 
          <div className="social_icons">
            <a href="https://github.com/topherpaung" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/christopher-marpaung-1451682b3/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Christopher Parulian Marpaung</h1>
          <h2>IT Business Analyst | Data Analyst | Data Scientist | Web Developer</h2>
          <p>I enjoy transforming business problems into technical solutions through data analysis, process modeling, and software development. My interests include Business Analysis, Artificial Intelligence, Data Analytics, and Full Stack Development.</p>

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