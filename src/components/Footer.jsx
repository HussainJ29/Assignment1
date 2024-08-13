import React from 'react'
import catty from '../assets/catty.jpg';

const Footer = () => {
  return (
    <div class="footer-player">
          <div className='player-content'>
            <img src={catty} alt="CattyBoard Small Logo" />
            <span>If It Ain't Love</span><br />
            <span className='sp01'>Catson Derulo</span>
          </div>
        </div>
  )
}
export default Footer;
