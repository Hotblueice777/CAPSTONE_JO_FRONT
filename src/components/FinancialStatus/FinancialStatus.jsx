import React from "react";
import "../FinancialStatus/FinancialStatus.scss";
import smallcart from "../../assets/images/cart_small.jpg";

function FinancialStatus({ month, budget, totalExpense, currentBalance }) {

  const formattedBalance = parseFloat(currentBalance).toFixed(2);
  const formattedtotalExpense = parseFloat(totalExpense).toFixed(2);
  const formattedbudget = parseFloat(budget).toFixed(2);
  
  let statusPrefix = currentBalance >= 0 ? "congratulations" : "warning";
  let statusMessage;

  if (currentBalance > 0) {
    statusMessage = `${statusPrefix} As of now, you still have $${formattedBalance} in savings!`;

  } else if (currentBalance < 0) {
    statusMessage = `${statusPrefix} So far, you've overspent $${Math.abs(formattedBalance)}`;

  } else if (currentBalance = 0) {
    statusMessage = `${statusPrefix} So far, you've just broken even!`;

  }

  return (
    <div className="financialstatus">
        <div className="financialstatus__container">
           <div className="financialstatus__container-up">
               <div className="financialstatus__title-container">
                  <p className="financialstatus__title-label">Current Financial Status in </p>
                  <span className="financialstatus__title-month">{month}</span>
               </div>
               <ul className="financialstatus__list">
                   <li className="financialstatus__item">
                      <p className="financialstatus__text">General budget for this month: <span className="financialstatus__number">${formattedbudget}</span></p>
                   </li>
                   <li className="financialstatus__item">
                      <p className="financialstatus__text">Total expenditure for the month: <span className="financialstatus__number">${formattedtotalExpense}</span></p>
                   </li>
                   <li className="financialstatus__item">
                      <p className="financialstatus__text">Current Balance: <span className="financialstatus__number">${formattedBalance}</span></p>
                   </li>
               </ul>
            </div>

            <div className="financialstatus__container-down">
                <div className="financialstatus__summary-container">
                     <img className="financialstatus__summary-image" src={smallcart} alt="cart image"/>                 

                         <p className="financialstatus__summary-text">
                           <span className="financialstatus__summary-title"> 
                               {statusPrefix.toUpperCase()}!
                           </span>
                           {statusMessage}
                         </p>
                    
                </div>
            </div>
        </div>  
    </div>
  );
}

export default FinancialStatus;
