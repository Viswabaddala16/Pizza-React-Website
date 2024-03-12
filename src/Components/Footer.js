import React from 'react'
import '../Styles/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
  return (
      <div className="footer">
        <div className="media-container">
        <InstagramIcon/> <TwitterIcon/> <FacebookIcon/> <LinkedInIcon/>

        </div>
        <p>&copy : 2021 pedrotechpizza.com</p>
    </div>
  )
}

export default Footer
