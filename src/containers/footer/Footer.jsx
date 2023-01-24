import React from 'react'
import './footer.css'
import Frame from "../../Assets/Frame.png"

const Footer = () => {
  return (
    <div className="gpt3___footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className='gradient_text'>Be among the headliners for the future</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={Frame}/>
          <p>"Technology is the campfire around which we tell our stories." - Laurie Anderson</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>bello.bakeem@gmail.com</p>
          <p>647-687-9039</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>Copyright Bello Inc. All rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
