import React from 'react';
import { AiOutlineDown } from "react-icons/ai";
import './CategoryMenu.css';

interface sidebar {
    categorySec:boolean,
    setCategorySec: any
  }
  

const CategoryMenu = ({categorySec, setCategorySec}:sidebar) => {
    return (
        <div className="menuIcon2 menuIcon1Stle" onClick={() => setCategorySec(!categorySec)}>
            <p className="menuIcon1-p"> {categorySec===true? <span>CLOSE</span>: <span>MENU</span>} <AiOutlineDown className={`${categorySec===true? 'menuIcon1arrow-false': 'menuIcon1arrow'}`} /></p>
         </div>
    );
};

export default CategoryMenu;