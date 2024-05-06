import React from 'react';
import '../ActionModal/ActionModal.scss';


const ActionModal = ({ expense, onClose, onDelete, onEdit }) => {

    const formattedAmount = Number(expense.amount).toFixed(2);
    const handleEditClick = () => {
        onEdit(); 
        onClose(); 
    };

    return (
        <div className="modal__overlay">
            <div className="modal__content">
                <h4>{expense.user_name} - {expense.category}</h4>
                <p>Amount: ${formattedAmount}</p>
                <p>Date: {new Date(expense.date).toLocaleDateString()}</p>
                <div className="modal__actions">
                    <button onClick={() => onDelete(expense.id)}>Delete</button>
                    <button onClick={handleEditClick}>Edit</button>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default ActionModal;