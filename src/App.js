import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./pages/News";
import Board from "./pages/Board";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login"
import Layout from './pages/Layout'
import NoPage from "./pages/NoPage";
import Topbar from "./components/TopBar";
import Footer from "./components/Footer";
import BoardList from "./pages/BoardList";
import BoardDetail from "./pages/BoardDetail";
import Rank from "./pages/Rank";
import Search from "./pages/Search"
import BoardEdit from "./pages/BoardEdit";
import SearchBeer from "./pages/SearchBeer"

import { useState, useEffect } from "react";
import SearchWhiskey from "./pages/SearchWhiskey";
import SearchCocktail from "./pages/SearchCocktail";


//12351456

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

          <Route path="boardlist" element={<BoardList />}/>
          <Route exact path="/board/detail/:id" element={<BoardDetail />} />
          <Route exact path="/board/edit/:id" element={<BoardEdit />} />

          <Route path="login" element={<Login />} />
          <Route path="rank" element={<Rank />}/>
          
          <Route path="search" element={<Search />}/>
          <Route path="searchbeer" element={<SearchBeer/>}/>
          
          <Route path="searchwhiskey" element={<SearchWhiskey/>}/>
          <Route path="searchcocktail" element={<SearchCocktail/>}/>

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;