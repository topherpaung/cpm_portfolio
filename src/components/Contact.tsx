import React from 'react';
import '../assets/styles/Contact.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Contact() {

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <div className="contact-social-icons" aria-label="Social media links">
            <a href="https://github.com/topherpaung" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/christopher-marpaung-1451682b3/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="https://www.instagram.com/chrstphrmrpng/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
