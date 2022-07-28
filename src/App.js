import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import "./styles.css";
import { Routes, Route, } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<HomePage/>} />
        {/* <Route path="About" element={<AboutPage />} /> */}
        <Route path="Contact" element={<ContactPage />} />
        <Route path="Shop" element={<ShopPage />} />
        {/* <Route path="shop/products/:productName" element={<{ProductDetailPage}}/> */}
        {/* <Route path="Cart" element={<CartPage />} /> */}
        {/* <Route path="checkout/Shipping" element={<ShippingPage/>} /> */}
        {/* <Route path="checkout/Payment" element={<PaymentPage />} /> */}
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
