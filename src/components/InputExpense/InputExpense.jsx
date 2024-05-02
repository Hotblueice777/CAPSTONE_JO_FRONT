import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import "../InputExpense/InputExpense.scss";
import moneyicongry from "../../assets/icons/money_gry.jpg";


function InputExpense() {

        const [value, setValue] = useState(''); 
    
        const handleChange = (event) => {
            setValue(event.target.value); 
        }

    return (
        <div className="inputexpense">
            <div className="inputexpense__container">
                <div className="inputexpense__container-mainarea"> 
                    <div className="inputexpense__top-container">
                        <p className="inputexpense__label">
                            Your current budget in April
                        </p>
                        <h2>$ 6000</h2>
                    </div>

                    <div className="inputexpense__bottom-container" >
                        <div className="inputexpense__input-container">
                             <input className="inputexpense__input" type="text" placeholder="input here"/>  
                                 <img className="inputexpense__input-icon" src={moneyicongry} alt="money_icon"/> 
                        </div>
                        <div>
                            <label className="inputexpense__select-label">Choose an option:</label>
                            <select className="inputexpense__select" value={value} onChange={handleChange}>
                                <option value="">Select...</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="food">Food</option>
                                <option value="transportation">Transportation</option>
                                <option value="housing">Housing</option>
                                <option value="education">Education</option>
                                <option value="travel">Travel</option>
                                <option value="insurance">Insurance</option>
                                <option value="internet">Internet</option>
                                <option value="socializing">Socializing</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        <div className="inputexpense__input-container">
                            <input className="inputexpense__input" type="text" placeholder="input your name"/>  
                        </div>
                    </div>
                </div>

                <div className="inputexpense__button-container">
                    <button className="inputexpense__button">
                       <p className="inputexpense__button-text">submit</p>
                    </button>
                </div>
            </div>
          </div> 
    );
}

export default InputExpense;
