import React from 'react'
import wizkid from './wizkid.png'
import ayra from './ayra.png'
import oxlade from './oxlade.png'
import burna from './burna.png'
import ayrastarr from './ayrastarr.png'
import "./right-sidebar.css"


export default function RightSidebar() {
  return (
    <div className='right-sidebar-container'>
      <h3>Shortcuts</h3>

      <div className='short-links'>
        <div className='short'>
        <div className='short-link'><i className="fa-regular fa-snowflake"></i>Chill Hits</div>
        <div className='short-link'><i className="fa-solid fa-star"></i>Hip Hop</div>
        </div>  
        <div className='short'>
        <div className='short-link'><i className="fa-solid fa-guitar"></i>Acoustic</div>
        <div className='short-link'><i className="fa-solid fa-music"></i>Indie Pop</div>
        </div>  
        <div className='short'>
        <div className='short-link'><i className="fa-solid fa-music"></i>Piano Blues</div>
        <div className='short-link'><i className="fa-solid fa-drum"></i>Jazz</div>
        </div>  
      </div>
      <h3>Fav Artist</h3>

      <div className='artist'>
        <div><img className='pics' src={wizkid} alt='' /></div>
        <div className='artist-details'>
        <p className='artist-name'>Wizkid<br /><span className='subscribers'>200M subscribers</span></p>
        
        </div>
        <i className="fa-solid fa-ellipsis"></i>
      </div>
      <div className='artist'>
        <div><img className='pics' src={ayra} alt='' /></div>
        <div className='artist-details'>
        <p className='artist-name'>Ayra Starr<br /><span className='subscribers'>20M subscribers</span></p>
        
        </div>
        <i className="fa-solid fa-ellipsis"></i>
      </div>
      <div className='artist'>
        <div><img className='pics' src={oxlade} alt='' /></div>
        <div className='artist-details'>
        <p className='artist-name'>Oxlade<br /><span className='subscribers'>50M subscribers</span></p>
        
        </div>
        <i className="fa-solid fa-ellipsis"></i>
      </div>
      <div className='artist'>
        <div><img className='pics' src={burna} alt='' /></div>
        <div className='artist-details'>
        <p className='artist-name'>Burna Boy<br /><span className='subscribers'>196M subscribers</span></p>
        
        </div>
        <i className="fa-solid fa-ellipsis"></i>
      </div>

        <div className='artist-box'>
            <img className='box-img' src={ayrastarr} alt='' />
            <div className='box-details'>
                <div>
                    <h4 className='box-name'>Ayra Starr<br /><span className='box-song'>Sability</span></h4>
                    {/* <p className='box-song'>Sability</p> */}
                </div>
                <i className="fa-regular fa-square-plus"></i>
            </div>
        </div>




    </div>

  )
}
