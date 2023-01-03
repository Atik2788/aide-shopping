import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Header/Navbar';
import Slider1 from './Components/Sliders/Slider1/Slider1';
import GetYour from './Components/GetYour/GetYour';
import ChooseProducts from './Components/Sliders/Slider2/SliderAfterNav';
import HomePagePro from './Components/HomePagePro/HomePagePro';
import SliderAfterNav from './Components/Sliders/Slider2/SliderAfterNav';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Navbar></Navbar>
      <SliderAfterNav></SliderAfterNav>
      {/* <Slider1></Slider1> */}
      <GetYour></GetYour>
      {/* <ChooseProducts></ChooseProducts> */}
      <HomePagePro></HomePagePro>
    </div>
  );
}

export default App;
