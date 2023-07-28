import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import TransactionPage from './pages/TransactionPage/TransactionPage';
import IncomePage from './pages/IncomePage';
import ExpensePage from './pages/ExpensePage';
import TransferPage from './pages/TransferPage/TransferPage';
import BudgetPage from './pages/BudgetPage/BudgetPage';

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
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
