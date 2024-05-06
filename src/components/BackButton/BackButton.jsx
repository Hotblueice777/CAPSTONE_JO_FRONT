
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../BackButton/BackButton.scss';

function BackButton() {
    const navigate = useNavigate();

    return (
        <div className="backbutton_button-container">  
            <button className="backbutton__button" onClick={() => navigate(-1)}>
                <p className="backbutton__button-text">Back</p>
            </button>
        </div>
    );
}

export default BackButton;
