// ---------5:32PM----------------------------------

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation,useNavigate } from 'react-router-dom';
import "../InputExpensePage/InputExpensePage.scss";
import BudgetStatus from "../../components/BudgetStatus/BudgetStatus";
import InputExpense from "../../components/InputExpense/InputExpense";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

function InputExpensePage() {
    const [expenseData, setExpenseData] = useState({
        amount: '',
        category: '',
        userName: ''
    });

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const id = params.get('id');
        if (id) {
            fetchExpenseById(id);
        }
    }, [location]);

    const fetchExpenseById = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/expenses/${id}`);
            const { amount, category, userName } = response.data;
            setExpenseData({ amount, category, userName });
        } catch (error) {
            console.error('Failed to fetch expense:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExpenseData(prev => ({
            ...prev,
            [name]: value
        }));
    };

// --------------------6:40PM  new modify----------------------------------------

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const params = new URLSearchParams(location.search);
        const id = params.get('id');

        const payload = {
            user_name: expenseData.userName, 
            category: expenseData.category,
            amount: parseFloat(expenseData.amount)
        };

        try {
            if (id) {
                await axios.put(`http://localhost:8080/expenses/${id}`, payload);
                alert('Expense updated successfully!');
            } else {
                await axios.post('http://localhost:8080/expenses', payload);
                alert('Expense submitted successfully!');
            }
            navigate('/statement'); // Redirect to the statement page
        } catch (error) {
            console.error('Failed to submit expense:', error);
            alert('Failed to submit expense. Please try again.');
        }
    };

/*-----------------------6:39PM----------------------------------------
    const handleFormSubmit = async () => {
        const params = new URLSearchParams(location.search);
        const id = params.get('id'); 
    
        const payload = {
            user_name: expenseData.userName, 
            category: expenseData.category,
            amount: parseFloat(expenseData.amount) 
        };
    
        try {
            let response;
            if (id) {
                response = await axios.put(`http://localhost:8080/expenses/${id}`, payload);
                alert('Expense updated successfully!');
            } else {
                response = await axios.post('http://localhost:8080/expenses', payload);
                alert('Expense submitted successfully!');
            }
            setExpenseData({ amount: '', category: '', userName: '' });
        } catch (error) {
            console.error('Failed to submit expense:', error);
            alert('Failed to submit expense. Please try again.');
        }
    };
    */
    
    return (
            <div className="expensepage">
            <div className="expensepage__container">
                <div className="expensepage__mainarea">
                <BudgetStatus />
                <InputExpense 
                     expenseData={expenseData} 
                     onInputChange={handleInputChange} 
                />
                 <SubmitButton onClick={handleFormSubmit} />
                 </div>
            </div>
        </div>
    );
}

export default InputExpensePage;






/*---------2024/05/06/5:30PM-----an other way useparams, but time limited, leave it to step 2 -------

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; 
import "../InputExpensePage/InputExpensePage.scss";
import BudgetStatus from "../../components/BudgetStatus/BudgetStatus";
import InputExpense from "../../components/InputExpense/InputExpense";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

function InputExpensePage() {
    const [expenseData, setExpenseData] = useState({
        amount: '',
        category: '',
        userName: ''
    });

    const { id } = useParams(); 

    useEffect(() => {
        if (id) {
            fetchExpenseById(id);
        }
    }, [id]); 

    const fetchExpenseById = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/expenses/${id}`);
            const { amount, category, user_name } = response.data;
            setExpenseData({ amount, category, userName: user_name });
        } catch (error) {
            console.error('Failed to fetch expense:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExpenseData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault(); 
        const payload = {
            user_name: expenseData.userName,
            category: expenseData.category,
            amount: parseFloat(expenseData.amount)
        };
    
        try {
            let response;
            if (id) {
                response = await axios.put(`http://localhost:8080/expenses/${id}`, payload);
                alert('Expense updated successfully!');
            } else {
                response = await axios.post('http://localhost:8080/expenses', payload);
                alert('Expense submitted successfully!');
            }
            setExpenseData({ amount: '', category: '', userName: '' }); 
        } catch (error) {
            console.error('Failed to submit expense:', error);
            alert('Failed to submit expense. Please try again.');
        }
    };
    
    return (
        <div className="expensepage">
            <BudgetStatus />
            <InputExpense 
                expenseData={expenseData} 
                onInputChange={handleInputChange}
            />
            <SubmitButton onClick={handleFormSubmit} />
        </div>
    );
}

export default InputExpensePage;

*/






















