import Home from './Pages/Home';
import "./Styles/Global.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ProductDetails from './Pages/ProductDetails';
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/products/:id" element={<ProductDetails/>}/> 
        <Route path="/login" element={<Login/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
