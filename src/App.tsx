import Header from './components/Header/Header';
import RecentTransaction from './components/RecentTransaction/RecentTransaction';
import Spend from './components/Spend/Spend';

function App() {
  return (
    <main className="App">
      <Header />
      <Spend />
      <RecentTransaction />
    </main>
  );
}

export default App;
