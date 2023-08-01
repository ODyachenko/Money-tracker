import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTransaction } from './redux/slices/transactionSlice';
import axios from 'axios';
import Homepage from './pages/Homepage';
import TransactionPage from './pages/TransactionPage/TransactionPage';
import IncomePage from './pages/IncomePage';
import ExpensePage from './pages/ExpensePage';
import TransferPage from './pages/TransferPage/TransferPage';
import BudgetPage from './pages/BudgetPage/BudgetPage';
import CreateBudgetPage from './pages/BudgetPage/CreateBudgetPage';

const URL = 'https://64c39d3067cfdca3b65ffde1.mockapi.io';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      axios(`${URL}/Transaction?sortBy=time`).then((res) => {
        dispatch(setTransaction(res.data));
      });
    } catch (error: any) {
      console.error(error.message);
    }
  }, []);

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
