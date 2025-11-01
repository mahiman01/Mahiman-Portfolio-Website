import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import '../assets/styles/Footer.scss'

function Contact() {
  return (
    <footer id="contact">
      <div>
        <h1>Contact Me</h1>
        <p>Feel free to reach out for collaborations or just a friendly chat</p>
        <ul className="socials">
          <li><a href="mailto:mahimandave2003@gmail.com"><EmailIcon/></a></li>
          <li><a href="tel:+919653680393"><PhoneIcon/></a></li>
          <li><a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noreferrer"><GitHubIcon/></a></li>
        </ul>
        <p className="contact-info">mahimandave2003@gmail.com | +91 96536 80393</p>
      </div>
      <p className="copyright">© 2025 Mahiman Dave. All rights reserved.</p>
    </footer>
  );
}

export default Contact;