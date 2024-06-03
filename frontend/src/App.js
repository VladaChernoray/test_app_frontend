import { useEffect } from 'react';
import './App.css';
import { UseTg } from './hooks/UseTg';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';

function App() {
  const {tg} = UseTg();
  
    useEffect(() => {
      tg.ready();
    }, [])

    return(
    <div className="App">
      <Header/>
      <Routes>
        <Route path={"product_list"} element={<ProductList/>}/>
        <Route path={"form"} element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
