import "./Navbar.css";
import logo from "../../assets/logo.png";
import loca from "../../assets/Vector.png";
import person from "../../assets/Ellipse.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { VscBell } from "react-icons/vsc";

const Navbar = () => {
  return (
    <div className="navbar">
      
      <div className="nav-logo">
      <img  src={logo} alt="" />
        <p className="margin-bottom-zero">aide</p>
      </div>

      <div className="nav-location">
        <p className="nav-deli margin-bottom-zero">Delivery to:</p>
        <p className="nav-loca-img margin-bottom-zero">
            <img src={loca} alt="" />
             Current Location
             <span className="nav-loca-address">Mirpur 1 Bus Stand, Dhaka <span><RiArrowDownSLine /></span></span>
        </p>
      </div>


      <div className="nav-info">
        <span className="nav-info-icon nav-info-icon-bell"><BiSearch/></span>
        <div>
            <span className="nav-info-icon "><VscBell/></span>
            <span className="nav-info-icon-red"></span>
        </div>

        <div className="nav-info-personal">
            <img className="nav-infoImg" src={person} alt="" />
            <div className="nav-information-name">
                <p className="">Pikachu</p>
                <p className="nav-information-name-online">online</p>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
