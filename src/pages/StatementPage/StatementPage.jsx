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

