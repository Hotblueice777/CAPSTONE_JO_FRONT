import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../Header/Header.scss";
import ImageWithTooltip from '../ImageWithTooltip/ImageWithTooltip';
import sitelogo from "../../assets/logo/sitelogo.jpg";
import financialstatus from "../../assets/images/financialstatus.jpg";
import statement from "../../assets/images/statement.jpg";
import statementActive from "../../assets/images/statement-active.jpg"
import financialstatusActive from "../../assets/images/financialstatus-active.jpg"

function Header() {

    const [financialStatusSrc, setFinancialStatusSrc] = useState(financialstatus);
    const [statementSrc, setStatementSrc] = useState(statement);
    
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo-container">
                    <Link to="/">
                       <ImageWithTooltip className="header__logo" src={sitelogo} alt="Navigate to homepage" tooltipText="Click here to enter the Input expenditure page"/>
                    </Link>
                </div>

                <div className="header__button-container">
                    <NavLink to="/financial-status" 
                    className="header__financialstatus-container"
                    activeClassName="header__financialstatus-active"
                    onMouseOver={() => setFinancialStatusSrc(financialstatusActive)}
                    onMouseOut={() => setFinancialStatusSrc(financialstatus)}
                    >
                       <ImageWithTooltip 
                       className="header__financialstatus" 
                       src={financialStatusSrc} 
                       alt="financialStatus" 
                       tooltipText="Click here to view and edit your spending history."/>
                    </NavLink>
                    <NavLink 
                       to="/statement" 
                       className="header__statement-container"
                       activeClassName="header__statement-active"
                       onMouseOver={() => setStatementSrc(statementActive)}
                       onMouseOut={() => setStatementSrc(statement)}
                       >
                       <ImageWithTooltip 
                       className="header__statement" 
                       src={statementSrc} 
                       alt="statement" 
                       tooltipText="Click here for monthly balance report."/>
                    </NavLink>
                </div>
            </div> 


        </header>
    );
}

export default Header;
