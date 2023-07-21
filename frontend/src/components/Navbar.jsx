import React, { useState } from "react";
// import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
// import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
     
     
      <div className="rightSide">
       
        <Link to="/"> Home </Link>
        <Link to="/About"> about </Link>
        <Link to="/Contact"> Contact </Link>
        <Link to="/Service"> Service </Link>
        <Link to="/menu"> Specialists</Link>
        <button onClick={toggleNavbar}>
          {/* <ReorderIcon /> */}
        </button>
      </div>
    </div>
  );
}

export default Navbar;