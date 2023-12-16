import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useState } from 'react';

function App() {

  const [contador, setContador] = useState(0);

  function handleButtonClick(){
    setContador(contador+1);
  }

  return (
    <div className="App">
      <Header title={contador} />
      <input type='button' value="Click Me!" onClick={handleButtonClick} />
    </div>
  );
}

export default App;
