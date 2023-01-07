import React from 'react';
import './FilterMenu.css'
import { AiOutlineDown } from "react-icons/ai";

interface sidebar {
    filter:boolean,
    setFilter: any
  }
  

const FilterMenu = ({filter, setFilter}:sidebar) => {
    return (
        <div className="menuIcon2 menuIcon1Stle" onClick={() => setFilter(!filter)}>
            <p className="menuIcon1-p"> {filter===true? <span>CLOSE</span>: <span>MENU</span>} <AiOutlineDown className={`${filter===true? 'menuIcon1arrow-false': 'menuIcon1arrow'}`} /></p>
         </div>
    );
};

export default FilterMenu;