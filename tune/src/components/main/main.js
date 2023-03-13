import React from 'react'
import Search from './search'
import Trending from './trending'
import Playbar from './playbar'
import Results from './results'
import './main.css'



export default function Main() {
  return (
    <div>
      <Search />
      <Trending />
      <Results />
      <Playbar />
    </div>
  )
}
