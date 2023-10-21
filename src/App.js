import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignUp from "./Pages/LoginSignUp";
import ShopCategory from "./Pages/ShopCategory";
import Home from "./Pages/Home";
import About from "./Pages/About"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element = {<About />} />
        <Route path='/shop' element = {<Shop />} />
        <Route path='/mens' element = {<ShopCategory category = "mens" />} />
        <Route path='/womens' element = {<ShopCategory category = "womens" />} />
        <Route path='/login' element = {<LoginSignUp />} />
        <Route path='/product' element = {<Product />}>
          <Route path = ":productId" element = {<Product />}/>
        </Route>
        <Route path='/cart' element = {<Cart />} /> 
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
