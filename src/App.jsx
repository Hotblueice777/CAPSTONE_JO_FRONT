import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import SetBudget from "./components/SetBudget/SetBudget";
import InputExpense from "./components/InputExpense/InputExpense";

import './App.scss';

function App() {
  return (
    <div>
      <BrowserRouter> 
         <Header />

      <Routes> 
          {/* <Route path="/" element={<InputExpense />} />  */}
          <Route path="/setbudget" element={<SetBudget/>} />
          <Route path="/" element={<InputExpense/>} />
          
          </Routes> 
       </BrowserRouter>
    

     
    </div>
  );
}

export default App;
