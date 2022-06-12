import React from "react";
import Logo from "../../../src/assets/Images/Logo/BrainFlix-logo.svg";
import AvatarImg from "../../../src/assets/Images/Mohan-muruge.jpg";
import SearchIcon from "../../../src/assets/Images/Icons/search.svg";
import UploadIcon from "../../../src/assets/Images/Icons/upload.svg";
import "./Header.scss";
import Upload from "../../../src/assets/Images/Icons/upload.svg";
import { NavLink } from "react-router-dom";




function Header() {
    return (
    <header className="header">
        <div className="header__search">
        <div className="header__image-container">
            <img className="header__image" alt="" src={Logo} />
        </div>
            <div className="header__search-container">
                <div className="header__search--style">
                    <img className="header__search-icon" alt="Header Search Icon" src={SearchIcon}/>
                <input className="header__search-bar" placeholder="Search"> 
                </input>
                </div>
                <img className="header__avatar" alt="Avatar" src={AvatarImg}/>
            </div>
            <div className="header__button-container">
            
                <img className="header__button-image" alt="" src={UploadIcon}/>
                <NavLink to="/upload"> 
                <button className="header__button">
                <img className="header__upload-icon" src={Upload} alt="views"/>
                    Upload</button>
                </NavLink>
            
            </div>
        </div>
    </header>
    );
}

export default Header;