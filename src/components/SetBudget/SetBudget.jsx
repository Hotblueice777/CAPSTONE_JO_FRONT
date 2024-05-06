import React, { useState } from 'react';
import "./SetBudget.scss";
import moneyicon from "../../assets/icons/money.jpg";

function SetBudget({ budget, onBudgetChange, onSubmit }) {
    return (
        <div className="setbudget">
            <div className="setbudget__container">
                <div className="setbudget__top-container">
                    <p className="setbudget__label">
                       Set your monthly budget here:
                    </p>
                    <div className="setbudget__input-container">
                        <input 
                            className="setbudget__input" 
                            type="number" 
                            placeholder="Enter your budget" 
                            value={budget}
                            onChange={(e) => onBudgetChange(e.target.value)}
                        />  
                        <img className="setbudget__input-icon" src={moneyicon} alt="money icon"/> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SetBudget;
