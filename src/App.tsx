import Home from './Pages/Home';
import "./Styles/Global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductDetails from './Pages/ProductDetails';
import Login from './Pages/Login';
import Register from './Pages/Register';
import FixScrolling from './Components/FixScrolling';

function App() {
  return (
    <>
      <BrowserRouter>
        <FixScrolling>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </FixScrolling>
      </BrowserRouter>
    </>
  );
}

export default App;
