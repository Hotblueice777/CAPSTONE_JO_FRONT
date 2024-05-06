import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../DeletButton/DeletButton.scss";


function DeletButton(){

    return(
       
        <div className="deletbutton_button-container">  
            <button className="deletbutton__button">
               <p className="deletbutton__button-text">delet</p>
            </button>
        </div>
        );
}

export default DeletButton