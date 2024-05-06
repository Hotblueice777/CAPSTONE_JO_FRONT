import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../StatementTable/StatementTable.scss";
import ActionModal from '../ActionModal/ActionModal';

function StatementTable() {
    const [expenses, setExpenses] = useState([]);
    const [selectedExpense, setSelectedExpense] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchExpenses();
    }, []);

    const fetchExpenses = async () => {
        try {
            const response = await axios.get('http://localhost:8080/expenses'); 
            const sortedExpenses = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
            const filteredExpenses = filterLast40Days(sortedExpenses);
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

    const formatAmount = (amount) => {
        const num = Number(amount);
        return num.toFixed(2);
    };


    // For a single line can be clicked, and out of the edit and delete panel

    const handleRowClick = (expense) => {
        setSelectedExpense(expense);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/expenses/${id}`);
            setExpenses(expenses.filter(exp => exp.id !== id));
            setShowModal(false);
        } catch (error) {
            console.error("Failed to delete expense:", error);
        }
    };

    const handleEdit = () => {
        window.location.href = `/input-expense?id=${selectedExpense.id}`; 
        setShowModal(false);
    };
// ------------------------------------------------------------------------------

    return (
        <div className="statement">
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
                        <tr className="statement__row" key={expense.id} onClick={() => handleRowClick(expense)}>
                            <td>{expense.user_name}</td>
                            <td>{expense.category}</td>
                            <td>${formatAmount(expense.amount)}</td>
                            <td>{new Date(expense.date).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showModal && (
                <ActionModal 
                    expense={selectedExpense}
                    onClose={() => setShowModal(false)}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            )}
        </div>
    );
}

export default StatementTable;
