import React from "react";
import {Link} from "react-router-dom"
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItems";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
        <div>
            <Link to='/'>Home</Link>
            </div>
      <h1 className="menuTitle">Our Doctors</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              Specialist={menuItem.Specialist}
            />
          );
        })}
        &nbsp; <div>
                <p>www.UK Medicare.com<br></br>All Rights Reserved.</p>
               
             </div>
      </div>
    </div>
  );
}

export default Menu;