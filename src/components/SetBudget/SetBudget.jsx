import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../SetBudget/SetBudget.scss";
import moneyicon from "../../assets/icons/money.jpg";


function SetBudget() {
    return (
        <div className="setbudget">
            <div className="setbudget__container">
                <div className="setbudget__top-container">
                    <p className="setbudget__label">
                       Set your monthly budget here
                    </p>
                    <div className="setbudget__input-container">
                        <input className="setbudget__input" type="text" placeholder="input here"/>  
                           <img className="setbudget__input-icon" src={moneyicon} alt="money icon"/> 
                         {/* {budget} */}
                    </div>
                </div>
                <div className="setbudget__button-container">
                    <button className="setbudget__button">
                       <p className="setbudget__button-text">submit</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SetBudget;



/*
<div classname="setbudget">
<div classname="setbudget__container">
    <div classname="setbudget">
    <p>
        Your current budget in {month}
    </p>
    <h2>
      $ {budget}
    </h2>
</div>

<div classname="setbudget__container">





</div>
</div>
</div>
*/