import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import TransactionPage from './pages/TransactionPage/TransactionPage';
import IncomePage from './pages/IncomePage';
import ExpensePage from './pages/ExpensePage';
import TransferPage from './pages/TransferPage/TransferPage';
import BudgetPage from './pages/BudgetPage/BudgetPage';
import CreateBudgetPage from './pages/BudgetPage/CreateBudgetPage';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/income" element={<IncomePage />} />
          <Route path="/expense" element={<ExpensePage />} />
          <Route path="/transfer" element={<TransferPage />} />
          <Route path="/transaction" element={<TransactionPage />} />
          <Route path="/budget" element={<BudgetPage />} />
          <Route path="/create-budget" element={<CreateBudgetPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
