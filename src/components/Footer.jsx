import React from 'react'
import catty from '../assets/catty.jpg';

const Footer = () => {
  return (
    <div class="footer-player">
          <div className='player-content'>
            <img src={catty} alt="CattyBoard Small Logo" />
            <div className="Sname">
            <span>If It Ain't Love</span>
            <span>Catson Derulo</span>
            <section className='footer_icon'>
            <i className="la la-step-backward"></i>
          <i className="la la-play"></i>
          <i className="la la-step-forward"></i>
          <i className="la la-undo-alt"></i>
          <i className="la la-random"></i>
            </section>
            
            </div>
            
          </div>
        </div>
  )
}
export default Footer;
