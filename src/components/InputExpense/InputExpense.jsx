import React, { useState } from 'react';
import axios from 'axios';
import "../InputExpense/InputExpense.scss";
// import moneyicongry from "../../assets/icons/money_gry.jpg";


function InputExpense({ expenseData, onInputChange }) {
    return (
        <div className="inputexpense">
            <div className="inputexpense__container">
                <div className="inputexpense__container-mainarea"> 

                    <div className="inputexpense__bottom-container" >

                        <div className="inputexpense__input-container">
                             <label className="inputexpense__select-label">Input expenses:</label>
                             <input 
                                className="inputexpense__input" 
                                type="text" 
                                placeholder="Input expenses" 
                                value={expenseData.amount} 
                                onChange={onInputChange} 
                                name="amount"
                             />
                             {/* <img className="inputexpense__input-icon" src={moneyicongry} alt="money_icon"/>  */}
                        </div>

                        <div>
                            <label className="inputexpense__select-label">Choose a category:</label>
                            <select 
                                className="inputexpense__select" 
                                value={expenseData.category} 
                                onChange={onInputChange}
                                name="category"
                            >
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
                            <label className="inputexpense__select-label">Input your name:</label>
                            <input 
                                className="inputexpense__input" 
                                type="text" 
                                placeholder="Input your name"
                                value={expenseData.userName} 
                                onChange={onInputChange} 
                                name="userName"
                            />  
                        </div>
                    </div>
                </div>

            </div>
        </div> 
    );
}

export default InputExpense;


