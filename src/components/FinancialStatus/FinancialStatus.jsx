import React from "react";
import "../FinancialStatus/FinancialStatus.scss";

function FinancialStatus({ month, budget, totalExpense, currentBalance }) {
  let statusMessage;
  if (currentBalance > 0) {
    statusMessage = `As of now, you still have $${currentBalance} in savings!`;
  } else if (currentBalance < 0) {
    statusMessage = `So far, you've overspent $${Math.abs(currentBalance)}`;
  } else {
    statusMessage = "So far, you've just broken even!";
  }

  return (
    <div className="financialstatus__container">
      <div className="financialstatus__title-container">
        <p>Current Financial Status in <span>{month}</span></p>
      </div>
      <ul>
        <li>
          <p>General budget for this month: <span>${budget}</span></p>
        </li>
        <li>
          <p>Total expenditure for the month: <span>${totalExpense}</span></p>
        </li>
        <li>
          <p>Current Balance: <span>${currentBalance}</span></p>
        </li>
        <li>
          <p className={currentBalance >= 0 ? "positive" : "negative"}>
            {statusMessage}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default FinancialStatus;
