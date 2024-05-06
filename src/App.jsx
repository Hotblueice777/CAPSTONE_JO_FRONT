import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import SetBudgetPage from "./pages/SetBudgetPage/SetBudgetPage";
import InputExpensePage from "./pages/InputExpensePage/InputExpensePage";
import StatementPage from "./pages/StatementPage/StatementPage";
import FinancialStatusPage from "./pages/FinancialStatusPage/FinancialStatusPage";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'; 
import './App.scss';

function App() {
  return (
    <div>
      <Router> 
         <Header />
        <Routes>
          <Route path="/" element={<InputExpensePage />} />
          <Route path="/budget" element={<SetBudgetPage />} />
          <Route path="/statement" element={<StatementPage />} />
          <Route path="/financial-status" element={<FinancialStatusPage />} />
          <Route path="/input-expense" element={<InputExpensePage />} />
          <Route path="/input-expense/:id" element={<InputExpensePage />} />
          <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
