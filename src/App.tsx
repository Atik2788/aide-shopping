import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Header/Navbar';
import GetYour from './Components/GetYour/GetYour';
import HomePagePro from './Components/HomePagePro/HomePagePro';
import SliderAfterNav from './Components/Sliders/Slider2/SliderAfterNav';
import MenuIcon from './Components/MenuSidebar/MenuIcon/MenuIcon';

import logo from '../src/assets/logo.png'

import { FiBarChart } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";
import Slider1 from './Components/Sliders/Slider1/Slider1';
import Slider3 from './Components/Sliders/Slider3/Slider3';
import SliderNew from './Components/NewSlide/Slider';
import Category from './Components/MenuSidebar/Mennu-ceta/Category/Category';
import CategoryMenu from './Components/MenuSidebar/Mennu-ceta/Category/CategoryMenu';
import Filter from './Components/MenuSidebar/Mennu-ceta/Filter/Filter';
import FilterMenu from './Components/MenuSidebar/Mennu-ceta/Filter/FilterMenu';

function App() {

  const [sidebar, setSidebar] = useState(false)
  const [categorySec, setCategorySec] = useState(false)
  const [filter, setFilter] = useState(false)

  console.log(categorySec)

  const handleCategory = () => {
    setCategorySec(true)
    setFilter(false)
  }

  const handleFilter = () => {
    setFilter(true)
    setCategorySec(false)
  }



  return (

    <div className="main">


    <div className='first-main'>

        <div className={`firstDiv ${sidebar===true? 'w-100px': 'w-0'}`}>

          <div className={`sidebar-category-click ${sidebar===true? 'sidebar-fixed-show': 'sidebar-fixed'}`}>
                  <div className='slider-logo'>
                    <img src={logo} alt="" />
                  </div>

                  <div className={`side-category ${categorySec=== true && 'side-category-click'}`}  onClick={handleCategory}>
                      <div>
                        <p className={`sidebar-category-icon ${categorySec=== true && 'sidebar-category-icon-click'}`}><FiBarChart className='' /></p>
                        <p className={`slider-category-p ${categorySec=== true && 'slider-category-p-click'}`}>Category</p>
                      </div>
                  </div>

                  <div className={`side-category ${filter=== true && 'side-category-click'}`} onClick={handleFilter}>
                    <p className={`sidebar-filter-icon ${filter=== true && 'sidebar-filter-icon-click'}`}><FaFilter className='' /></p>
                    <p className={`slider-category-p ${filter=== true && 'slider-category-p-click'}`}>Filter</p>
                  </div>
          </div>

      </div>

    </div>


   
      <div className='secondMain'>

          <div className={`sidebar-category-click2 ${categorySec === true? 'sidebar-category-sec-show': 'sidebar-category-sec'}`}>
              <div className=''>              
                  <Category></Category>  
                  <div className=''>
                     <CategoryMenu setCategorySec={setCategorySec} categorySec={categorySec}></CategoryMenu>   
                  </div>     
              </div>
          </div>

          <div className={`sidebar-category-click2 ${filter === true? 'sidebar-category-sec-show': 'sidebar-category-sec'}`}>
              <div className=''>              
                  <Filter></Filter> 
                  <div className=''>
                     <FilterMenu setFilter={setFilter} filter={filter}></FilterMenu>   
                  </div>     
              </div>
          </div>


          
          <div>
            <MenuIcon setSidebar={setSidebar} sidebar={sidebar}></MenuIcon>
            <Header></Header>
            <Navbar></Navbar>
            <SliderAfterNav></SliderAfterNav>

            <GetYour></GetYour>
            <HomePagePro></HomePagePro>
            <SliderNew></SliderNew>
          </div>

        </div>
    </div>
  );
}

export default App;
