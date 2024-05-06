import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../BudgetStatus/BudgetStatus.scss";

function BudgetStatus() {
    const [budget, setBudget] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBudget = async () => {
            try {
                const response = await axios.get('http://localhost:8080/budget'); 
                setBudget(response.data.budget);
                setLoading(false);
            } catch (err) {
                setError('Unable to fetch budget');
                setLoading(false);
            }
        };

        fetchBudget();
    }, []);

    const handleBudgetClick = () => {
        navigate('/budget');
    };

    const renderContent = () => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>{error}</p>;
        if (budget === null) return <p>No budget set for this month.</p>;
        
        const monthNames = ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"];
        const currentMonth = new Date().getMonth();
        
        return (
            <div className="BudgetStatus__top-container">
                <div className="BudgetStatus__label-container">
                    <p className="BudgetStatus__label">Your current budget in {monthNames[currentMonth]}:</p>
                </div>
                <div className="BudgetStatus__budget-container" onClick={handleBudgetClick} style={{ cursor: 'pointer' }}>
                    <h2 className="BudgetStatus__budget"> ${budget.toFixed(2)} </h2>
                </div>
            </div>
        );
    };

    return renderContent();
}

export default BudgetStatus;


/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../BudgetStatus/BudgetStatus.scss";

function BudgetStatus() {
    const [budget, setBudget] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBudget = async () => {
            try {
                const response = await axios.get('http://localhost:8080/budget'); 
                setBudget(response.data.budget);
                setLoading(false);
            } catch (err) {
                setError('Unable to fetch budget');
                setLoading(false);
            }
        };

        fetchBudget();
    }, []);

    const renderContent = () => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>{error}</p>;
        if (budget === null) return <p>No budget set for this month.</p>;
        
        const monthNames = ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"];
        const currentMonth = new Date().getMonth();
        
        return (
            <div className="BudgetStatus__top-container">
                <div className="BudgetStatus__label-container">
                    <p className="BudgetStatus__label">Your current budget in {monthNames[currentMonth]}:</p>
                </div>
                <div className="BudgetStatus__budget-container">
                    <h2 className="BudgetStatus__budget"> ${budget.toFixed(2)} </h2>
                </div>
            </div>
        );
    };

    return renderContent();
}

export default BudgetStatus;
*/




/*
function BudgetStatus(){

    return(
        <div className="BudgetStatus__top-container">
            <div className="BudgetStatus__label-container">
                <p className="iBudgetStatus__label">Your current budget in {month}</p>
            </div>

            <div className="BudgetStatus__budget-container">
                <h2 className="BudgetStatus__budget"> $ {budget} </h2>
            </div>
        </div>
    );
}

export default BudgetStatus
*/