import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../EditButton/EditButton.scss";


function EditButton(){

    return(
       
        <div className="editbutton_button-container">  
            <button className="editbutton__button">
               <p className="editbutton__button-text">edit</p>
            </button>
        </div>
        );
}

export default EditButton