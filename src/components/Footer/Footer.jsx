import React from 'react'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'






import './Footer.css'
const Footer = () => {
  return (
    <div className='Footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
         <img src={instagram_icon} alt="" />
          <img src={twitter_icon} alt="" />
           <img src={youtube_icon} alt="" />

      </div>
      <ul>
  <li>Audio Description</li>
  <li>Help center</li>
  <li>Gift cards</li>
  <li>Media center</li>
  <li>Inverstor Relation</li>
  <li>Jobs</li>
  <li>Terms of Use</li>
  <li> Privacy</li>
  <li>Legal Notices</li>
  <li>Cookie Prefrences </li>
  <li>Corporate Information</li>
  <li>Contact us</li>
</ul>
<p className='copyright-text'>&copy 1997-2023 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
