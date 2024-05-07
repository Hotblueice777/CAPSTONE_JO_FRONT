import React, { useState } from "react";
import axios from "axios";
import "../SetBudgetPage/SetBudgetPage.scss";
import SetBudget from "../../components/SetBudget/SetBudget";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import BackButton from "../../components/BackButton/BackButton";
import { useNavigate, useLocation } from 'react-router-dom';

function SetBudgetPage() {
    const [budget, setBudget] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSaveBudget = async () => {
        try {
            await axios.put('http://localhost:8080/budget', { budget });
            alert('Budget updated successfully!');

            if (location.state && location.state.from) {
                navigate(location.state.from);
            } else {
                navigate('/'); 
            }
        } catch (error) {
            console.error('Failed to save budget:', error);
            alert('Failed to save budget.');
        }
    };

    return (
        <div className="setbudget">
          <div className="setbudget__container">
            <div className="setbudget__main">
               <SetBudget budget={budget} onBudgetChange={setBudget} />
                 {/* onSubmit={handleSaveBudget}  */}
                  <div className="setbudget__btn">
                    <SubmitButton onClick={handleSaveBudget} />
                    <BackButton />
                 </div>
            </div>
          </div>
        </div>
    );
}

export default SetBudgetPage;


