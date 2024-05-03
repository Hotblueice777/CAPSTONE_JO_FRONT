import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import "../Statement/Statement.scss";

function Statement() {

    return(

        <div>
            <div>
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
                               <td>{expense.name}</td>
                               <td>{expense.category}</td>
                               <td>${expense.amount.toFixed(2)}</td>
                               <td>{expense.date}</td>
                            </tr>
                         ))}
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default Statement