import React from 'react'
import './main.css'

export default function Trending() {
  return (
    <div>
      <div className='title'>
      <h3>Trending</h3>
      <p>More</p>
      </div>
      
    <div className='banner'>
        <div>
            <p>Artist</p>
            <h2>On Top<br />Of The World</h2>
        </div>
        <div className='lower'>
            <div className='buttons'>
                <button className='play-btn'>PLAY</button>
                <button className='follow-btn'>FOLLOW</button>
            </div>
            <div className='lower-title'>
                <p className='num'>216k<br/><span className='listeners'>Monthly Listeners</span></p>
            </div>
        </div>
          
    </div>
    </div>
  )
}
