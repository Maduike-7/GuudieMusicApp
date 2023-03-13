import React, {useEffect, useState} from 'react';
import "./home.css"
import Sidebar from "../../components/sidebar";
import RightSidebar from "../../components/right-sidebar";
import Main from "../../components/main/main";
import Login from "../../screens/auth/login";
import { setClientToken } from '../../spotify';
// import { setToken } from '../../spotify';




export default function Home() {
  // const [searchKey, setSearchKey] = useState('')


  const [token, setToken] = useState("")
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash){
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem ("token", _token);
      setToken(_token);
      setClientToken (_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  },[]);

  return (!token) ? (
      <Login /> ) :  
      <div className="main-body">
      <Sidebar />
      <Main />
      <RightSidebar />
     </div>
  
}
