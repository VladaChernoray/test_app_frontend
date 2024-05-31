import { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {
    useEffect(() => {
      tg.ready();
    }, [])

    const onClose = () => {
      tg.close();
    } 

    return(
    <div className="App">
      <p>kkk</p>
      <button onClick={onClose}>LOL</button>
    </div>
  );
}

export default App;
