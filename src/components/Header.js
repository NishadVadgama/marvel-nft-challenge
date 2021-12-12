import React from "react";
import { FaSearch, FaRegMoon } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./Header.scss";

const Header = () => {
    return (
        <div className="header">
            <div className="logoContainer">
                <img src={logo} className="marvelLogo" alt="Marvel" />
            </div>

            <div className="searchBar">
                <div className="searchIconContainer">
                    <span className="searchIcon">
                        <FaSearch />
                    </span>
                    <input className="searchInput" placeholder="Collection, ?" />
                </div>
            </div>

            <div className="headerItems">
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>

            <div className="headerActions">
                <div className="themeSwitchBox">
                    <span className="themeSwitchBoxIcon">
                        <FaRegMoon />
                    </span>
                </div>
            </div>

            <div className='loginButton'>Get In!</div>
        </div>
    );
};

export default Header;
