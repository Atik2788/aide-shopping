import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import "./MenuIcon.css";

interface sidebar {
  sidebar:any,
  setSidebar: any
}

const MenuIcon = ({sidebar, setSidebar}:sidebar) => {
  return (
      <div className="menuIcon1 menuIcon1Stle" onClick={() => setSidebar(!sidebar)}>
        <p className="menuIcon1-p"> {sidebar===true? <span>CLOSE</span>: <span>MENU</span>} <AiOutlineDown className={`${sidebar===true? 'menuIcon1arrow-false': 'menuIcon1arrow'}`} /></p>
      </div>
  );
};

export default MenuIcon;
