import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import CurrencyConverter from './Components/CurrencyConverter';
function App() {
  return (
    <div style={{paddingLeft:"20%"}}>
      <Counter />
      <CurrencyConverter/>
    </div>
  );
}

export default App;
