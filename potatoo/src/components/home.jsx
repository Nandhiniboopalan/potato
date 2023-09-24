import REACT from "react";
import "./home.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../images/profile.jpg";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../sidenav/sidebar";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import heart from "../images/heart.png";
import post from "../images/post.png";
import explore from "../images/explore.png";
import email from "../images/email.png";
import IconMenu from "./iconmenu";
function Home() {
  

  return (
    <>
      <div className="home">
        <input
          className="home_search_bar"
          type="search"
          placeholder="Search"
        ></input>
        <h1>Potato</h1>
        <img src={profile}></img>
      </div>
    <Sidebar/>
      
    </>
  );
}
export default Home;
