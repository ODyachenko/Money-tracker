import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
import ExpensePage from './pages/ExpensePage';
import Homepage from './pages/Homepage';
import IncomePage from './pages/IncomePage';
import TransferPage from './pages/TransferPage';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/income" element={<IncomePage />} />
          <Route path="/expense" element={<ExpensePage />} />
          <Route path="/transfer" element={<TransferPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
