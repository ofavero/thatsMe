import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Tracking() {
  return (
    <script>
      const ws = new WebSocket('wss://177.55.98.131:9947');
      console.log(ws);
    </script>
  );
}

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href='https://www.instagram.com/o_faveroo/'><InstagramIcon /></a>
            <a href='https://www.facebook.com/fellipe.vieira.3910/'><FacebookIcon /></a>
            <a href='https://github.com/ofavero'><GithubIcon /></a>
            <a href='https://www.linkedin.com/in/fellipe-vieira-favero-1803a824a'><LinkedInIcon /></a>
        </div>
        <p> &copy; 2022 ofaveroo.com</p>
    </div>

    <Tracking />
  )
}

export default Footer
