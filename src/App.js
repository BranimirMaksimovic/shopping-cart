import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
