import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../StatementTable/StatementTable.scss";

function StatementTable() {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        fetchExpenses();
    }, []);

    const fetchExpenses = async () => {
        try {
            const response = await axios.get('http://localhost:8080/expenses'); 
            const filteredExpenses = filterLast40Days(response.data);
            setExpenses(filteredExpenses);
        } catch (error) {
            console.error("Failed to fetch expenses:", error);
        }
    };

    const filterLast40Days = (expenses) => {
        const fortyDaysAgo = new Date();
        fortyDaysAgo.setDate(fortyDaysAgo.getDate() - 40);
        return expenses.filter(expense => new Date(expense.date) >= fortyDaysAgo);
    };

    return (
        <div className="statement-table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map(expense => (
                        <tr key={expense.id}>
                            <td>{expense.user_name}</td>
                            <td>{expense.category}</td>
                            <td>${expense.amount.toFixed(2)}</td>
                            <td>{new Date(expense.date).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StatementTable;
