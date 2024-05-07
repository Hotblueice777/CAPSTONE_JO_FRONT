import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FinancialStatus from "../../components/FinancialStatus/FinancialStatus";
import BackButton from "../../components/BackButton/BackButton";
import "../FinancialStatusPage/FinancialStatusPage.scss"; 

function FinancialStatusPage() {
  const [financialData, setFinancialData] = useState({
    month: new Date().toLocaleString('default', { month: 'long' }),
    budget: 0,
    totalExpense: 0,
    currentBalance: 0
  });

  useEffect(() => {
    const fetchFinancialData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/budget/financial-status');
        setFinancialData(prevData => ({
          ...prevData,
          budget: response.data.budget,
          totalExpense: response.data.expenses, 
          currentBalance: response.data.currentBalance
        }));
      } catch (error) {
        console.error('Failed to fetch financial data', error);
      }
    };
    
    fetchFinancialData();
  }, []);

  return (
    <div className='fstatuspage'>
      <div className='fstatuspage__container'>
      <div className='fstatuspage__main'>
      <FinancialStatus {...financialData} />
      <div className='fstatuspage__btn-container'>
      <BackButton className='fstatuspage__btn'/>
      </div>
      </div>
      </div>
    </div>
  );
}

export default FinancialStatusPage;

/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../FinancialStatusPage/FinancialStatusPage.scss";
import FinancialStatus from "../../components/FinancialStatus/FinancialStatus";
import BackButton from "../../components/BackButton/BackButton";
import "./FinancialStatusPage.scss";

function FinancialStatusPage() {
  const [financialData, setFinancialData] = useState({
    month: new Date().toLocaleString('default', { month: 'long' }),
    budget: 0,
    totalExpense: 0,
    currentBalance: 0
  });

  useEffect(() => {
    const fetchFinancialData = async () => {
      try {

        const response = await axios.get('http://localhost:8080/budget/financial-status');
        setFinancialData({
          ...financialData,
          budget: response.data.budget,
          totalExpense: response.data.totalExpense,
          currentBalance: response.data.currentBalance
        });
      } catch (error) {
        console.error('Failed to fetch financial data', error);
      }
    };
    
    fetchFinancialData();
  }, []);

  return (
    <div>
      <FinancialStatus {...financialData} />
      <BackButton />
    </div>
  );
}

export default FinancialStatusPage;

*/







