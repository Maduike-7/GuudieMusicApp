import React, { useState, useEffect } from 'react'
import APIKit from '../../spotify'
import './main.css'


export default function Playlist() {

  const [playlists, setPlaylists] = useState(null)

  useEffect(() => {
   APIKit.get('me/playlists').then(function(response) {
    setPlaylists(response.data.items);
  });
}, []);
    
  return (
    <div>
      <div className='playlist'>
        {/* <h3>{playlists.name}</h3> */}
        {/* {playlists?.map((playlist) => 
          <div>{playlist.name}</div>
        )} */}
      </div>






      {/* <div className='title'>
      <h3>Playlist</h3>
      <p>See all</p>
      </div>
      <div className='table>'>
        <table>
            <thead>
                <th>#</th>
                <th>Name</th>
                <th>Artist</th>
                <th>Time</th>
                <th>Album</th>
            </thead>
            <tbody>

            </tbody>
        </table>
      </div> */}
    </div>
  )
}
