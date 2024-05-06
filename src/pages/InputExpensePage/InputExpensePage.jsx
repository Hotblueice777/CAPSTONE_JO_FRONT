import { useEffect, useState } from "react";
import axios from "axios";
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

    // Fetch budget data when the component mounts
    useEffect(() => {
        // Fetch the budget and update local state (not shown)
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExpenseData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFormSubmit = async () => {
        try {
            // API call to submit the form data
            const response = await axios.post('http://localhost:8080/expenses', expenseData);
            alert('Expense submitted successfully!');
            // Optionally, reset the form or handle navigation
            setExpenseData({ amount: '', category: '', userName: '' });
        } catch (error) {
            console.error('Failed to submit expense:', error);
            alert('Failed to submit expense. Please try again.');
        }
    };

    return (
        <div>
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



/*
function InputExpensePage() {
      

    return(

        <div>
            <BudgetStatus/>
            <InputExpense/>
            <SubmitButton onClick={handleFormSubmit} />
        </div>
    );
}

export default InputExpensePage;
*/









