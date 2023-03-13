// import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import logo from './logo.png'
import profile from './sugarboy.png'
import apiClient from '../../spotify';
import "./sidebar.css"




export default function Sidebar() {

  const [userName, setUserName] = useState('Seyi Peters')
  useEffect(() => {
    apiClient.get("me").then(response => {
      setUserName(response.data.display_name)
    });
},[]);
  
  const [image, setImage] = useState(profile)

  useEffect(() => {
      apiClient.get("me").then(response => {
        setImage(response.data.images[0].url)
      });
  },[]);

    const logout = () => {
      window.localStorage.removeItem("token");
      window.location.reload();
    }
  return (

    <div className='sidebar-container'>
      <img className='logo' src = {logo} alt = ""/>

      <div className='nav-links'>
        <div className='nav-link'><i className="fa-solid fa-house"></i> Home</div>
        <div className='nav-link'><i className="fa-solid fa-arrow-trend-up"></i> Trends</div>
        <div className='nav-link'><i className="fa-solid fa-square-rss"></i> Feed</div>
      </div>
      
      <small>Discover</small>
      <div className='nav-links'>
        <div className='nav-link'><i className="fa-solid fa-file"></i> New and Notable</div>
        <div className='nav-link'><i className="fa-solid fa-calendar-days"></i> Release Calendar</div>
        <div className='nav-link'><i className="fa-solid fa-clapperboard"></i> Events</div>
      </div>
      
      <small>Your Collection</small>
      <div className='nav-links'>
        <div className='nav-link'><i className="fa-solid fa-heart"></i> Favorite Songs</div>
        <div className='nav-link'><i className="fa-solid fa-music"></i> Artist</div>
        <div className='nav-link'><i className="fa-solid fa-clapperboard"></i> Album</div>
      </div>

      <div className='profile'>
        <img className='pic' src = {image} alt = "" />
        <p className='name'>{userName}</p>
        <button onClick={logout}><i className="fa-solid fa-right-to-bracket"></i></button>
      </div>
    </div>

      
  )
}
