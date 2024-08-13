import React from 'react'
import catty from '../assets/catty.jpg';

const Head = () => {
  return (
    <div class="header">
      <img src={catty} alt="CattyBoard Logo" />
      <div class="header-text">
        <h1>CattyBoard Top 100 Single Charts (11.06.36)</h1>
        <p>Unknown Artist</p>
        <p>2016. Charts. 100 songs</p>
        <div className='icon_part'>
          <i className="la la-play">Play</i>
          <i className="la la-plus">Add</i>
          <i className="la la-ellipsis-h">More</i>
        </div>
      </div>
    </div>
  )
}
export default Head;