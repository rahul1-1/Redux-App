import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {Provider} from 'react-redux'
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import store from './store/store'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
    <Provider store={store}>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
