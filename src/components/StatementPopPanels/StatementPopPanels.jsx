import React from 'react';
import "../StatementPopPanels/StatementPopPanels.scss";

function StatementPopPanels({ expense, onDelete, onClose }) {
    return (
        <div className="statement-pop-panels">
            <div className="statement-pop-panels__overlay" onClick={onClose}></div>
            <div className="statement-pop-panels__content">
                <p>{`Modify or delete the record for ${expense.name}?`}</p>
                <button onClick={() => onDelete(expense.id)}>Delete</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default StatementPopPanels;
