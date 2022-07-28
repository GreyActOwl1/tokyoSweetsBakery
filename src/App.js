import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import "./styles.css";
import { Routes, Route, } from "react-router-dom";
// import ContactPage from "./pages/ContactPage";
// import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route index element={<HomePage/>} /> */}
        {/* <Route path="about" element={<AboutPage />} /> */}
        {/* <Route path="contact" element={<ContactPage />} /> */}
        {/* <Route path="shop" element={<ShopPage />} /> */}
        {/* <Route path="shop/products/:productName" element={<{ProductDetailPage}}/> */}
        {/* <Route path="cart" element={<CartPage />} /> */}
        {/* <Route path="checkout/shipping" element={<ShippingPage/>} /> */}
        {/* <Route path="checkout/payment" element={<PaymentPage />} /> */}
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
