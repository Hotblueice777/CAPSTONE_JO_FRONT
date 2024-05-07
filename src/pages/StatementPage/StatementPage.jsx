import React from 'react';
import BudgetStatus from '../../components/BudgetStatus/BudgetStatus';
import StatementTable from '../../components/StatementTable/StatementTable';
import BackButton from '../../components/BackButton/BackButton';
import "../StatementPage/StatementPage.scss";


function StatementPage() {
    return (
        <div className='statementpage'> 
           <div className='statementpage__container'>
           <div className='statementpage__main'>

               <BudgetStatus />
               <StatementTable />
               <BackButton />
            </div>

           </div>
        </div>
    );
}

export default StatementPage;







/*import { useEffect, useState } from "react";
import axios from "axios";
import "../StatementPage/StatementPage.scss";
import BudgetStatus from "../../components/BudgetStatus/BudgetStatus";
import StatementTable from "../../components/StatementTable/StatementTable";
import BackButton from "../../components/BackButton/BackButton";
import StatementPopPanels from "../../components/StatementPopPanels/StatementPopPanels";

function StatementPage() {
    const [expenses, setExpenses] = useState([]);
    const [selectedExpense, setSelectedExpense] = useState(null);

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const response = await axios.get('http://localhost:8080/expenses/recent');
                setExpenses(response.data);
            } catch (error) {
                console.error('Failed to fetch expenses:', error);
            }
        };

        fetchExpenses();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/expenses/${id}`);
            setExpenses(expenses.filter(expense => expense.id !== id));
            setSelectedExpense(null); 
        } catch (error) {
            console.error('Failed to delete expense:', error);
        }
    };

    const handleSelectExpense = (expense) => {
        setSelectedExpense(expense);
    };

    const handleClose = () => {
        setSelectedExpense(null);
    };

    return (
        <div>
            <BudgetStatus />
            <StatementTable expenses={expenses} onSelectExpense={handleSelectExpense} />
            {selectedExpense && (
                <StatementPopPanels
                    expense={selectedExpense}
                    onDelete={() => handleDelete(selectedExpense.id)}
                    onClose={handleClose}
                />
            )}
            <BackButton />
        </div>
    );
}

export default StatementPage;
*/
