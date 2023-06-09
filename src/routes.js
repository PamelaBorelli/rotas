import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Error from './pages/Error';
import Produto from './pages/Produto';
import Loja from './pages/Loja';

import Header from './components/Header';



function RoutesApp() {
    return (
    <BrowserRouter>
        <Header/>
        <Routes>

            <Route path="/" element = { <Home/> } />
            <Route path="/sobre" element = { <Sobre/> } />
            <Route path="/contato" element = { <Contato/> } />
            <Route path="/*" element = { <Error/> } />
            <Route path="/produto/:id" element = { <Produto/> } />
            <Route path="/loja" element = { <Loja/> } />

        </Routes>
     
    </BrowserRouter>
    );
  }
  
  export default RoutesApp;
  