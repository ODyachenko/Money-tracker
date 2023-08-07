import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import TransactionPage from './pages/TransactionPage/TransactionPage';
import IncomePage from './pages/IncomePage';
import ExpensePage from './pages/ExpensePage';
import TransferPage from './pages/TransferPage/TransferPage';
import BudgetPage from './pages/BudgetPage/BudgetPage';
import CreateBudgetPage from './pages/BudgetPage/CreateBudgetPage';
import Navbar from './components/Navbar/Navbar';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTransaction } from './redux/slices/transactionSlice';
import DetailTransaction from './pages/DetailTransaction/DetailTransaction';

function App() {
  const dispatch = useDispatch();
  const sortParam = 'time';

  useEffect(() => {
    fetchTransactionData();
  }, []);

  async function fetchTransactionData() {
    dispatch(fetchTransaction({ sortParam }));
  }

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
          <Route path="/detail-transaction" element={<DetailTransaction />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </main>
  );
}

export default App;
