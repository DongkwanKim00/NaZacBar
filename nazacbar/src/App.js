import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./pages/News";
import Board from "./pages/Board";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Layout from './pages/Layout'
import NoPage from "./pages/NoPage";
import Topbar from "./components/TopBar";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";


function App() {


  return (
    <>
    <div style={{height: '80px', backgroundColor: '#f1f1f1'}}>
      <Topbar />
    </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="products" element={<Products />} />
          <Route path="board" element={<Board />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;