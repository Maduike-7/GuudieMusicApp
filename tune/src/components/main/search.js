import React from 'react'
import axios from 'axios'

// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import './main.css'

export default function Search() {

  const CLIENT_ID = '3b6f5190c4d240628247ebaf818038cf'
  const CLIENT_SECRET = '3c489f19ce5d4162ba30695550340ae7'

  const [searchInput, setSearchInput] = useState('')
  const token = window.localStorage.getItem("token")
  


  // useEffect(() => {
  //   var authParameters = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     },
  //     body: 'grant_type = client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
  //   }
  //   fetch('https://accounts.spotify.com/api/token' , authParameters)
  //   .then(result => result.json())
  //   .then(data => setAccessToken(data.access_token))
  // }, [])




  const search = async (e) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: searchInput,
        type: "track"
      }
    })
    console.log(data)
  }
  return (
    <div className='search-pane'>
      <div className='arrows'>
        <i className='fas fa-arrow-left'></i>
        <i className='fas fa-arrow-right'></i>
      </div>
      <div className='search-container'>
        <i className='fas fa-search'></i>
        <form className='form-bar' onSubmit={search}>
        <input  onChange={event => setSearchInput(event.target.value)} type='text' className='searchbar' placeholder='Search artist, albums and tracks...' />
        <button type='submit' className='btn' onClick={search}>Search</button>
        </form> 
      </div>
      
      
    </div>
  )
}
