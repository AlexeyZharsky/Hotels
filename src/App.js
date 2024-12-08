import {BrowserRouter, Route, Routes} from "react-router-dom";
import Catalog from "./components/Catalog";
import Cart from "./components/Cart";
import Order from "./components/Order";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Catalog />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/order/" element ={<Order />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
