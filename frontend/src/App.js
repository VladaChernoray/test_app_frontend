import { useEffect } from 'react';
import './App.css';
import { UseTg } from './hooks/UseTg';
import Header from './components/Header/Header';

function App() {
  const {onToggleButton, tg} = UseTg();
  
    useEffect(() => {
      tg.ready();
    }, [])

    return(
    <div className="App">
      <Header/>
      <button onClick={onToggleButton}>LOL</button>
    </div>
  );
}

export default App;
