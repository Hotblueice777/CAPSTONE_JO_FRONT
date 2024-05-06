import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../Header/Header.scss";
import sitelogo from "../../assets/logo/sitelogo.jpg";
import financialstatus from "../../assets/images/financialstatus.jpg";
import statement from "../../assets/images/statement.jpg";

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo-container">
                    <Link to="/">
                       <img className="header__logo" src={sitelogo} alt="Navigate to homepage" />
                    </Link>
                </div>

                <div className="header__button-container">
                    <NavLink to="/financial-status" className="header__financialstatus-container">
                       <img className="header__financialstatus" src={financialstatus} alt="financialStatus" />
                    </NavLink>
                    <NavLink to="/statement" className="header__statement-container">
                       <img className="header__statement" src={statement} alt="statement" />
                    </NavLink>
                </div>
            </div> 


        </header>
    );
}

export default Header;
