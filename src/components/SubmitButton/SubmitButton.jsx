import React from "react";
import "../SubmitButton/SubmitButton.scss";


function SubmitButton({ onClick, isEdit = false }) {
    return (
        <div className="submitbutton__button-container">
            <button className="submitbutton__button" onClick={onClick}>
                <p className="submitbutton__button-text">{isEdit ? "Update" : "Submit"}</p>
            </button>
        </div>
    );
}

export default SubmitButton;