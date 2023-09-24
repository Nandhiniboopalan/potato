import REACT from "react";
import "./home.css";



import Sidebar from "../sidenav/sidebar";

import Rightsidebar from "../sidenav/rightsidebar";
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
     
      </div>
      <Sidebar />
      <Rightsidebar />
    </>
  );
}
export default Home;
