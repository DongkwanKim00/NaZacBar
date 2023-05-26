
import React, { useState, useEffect, Component } from 'react';
import { useNavigate } from "react-router-dom";
import "../index.css";

import { Form, Button } from "react-bootstrap";

const HomePageNaJacBar = ()=> {

const navigate = useNavigate();
 
  const navigateToSearch = () => {
    navigate("/search");
  };

  const navigateToSearchBeer = () => {
    navigate("/searchbeer");
  };

  const navigateToSearchWhiskey = () => {
    navigate("/searchwhiskey");
  };

  const navigateToSearchCocktail = () => {
    navigate("/searchcocktail");
  };

return(
  <div style={{ marginTop: '-55px' }}>
<div style={{
    background: `url('/MainHomePage.png') no-repeat center`,
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',
        minHeight: '60vh',
        padding: '150px'
  }}>

<div style={{
   marginTop: '70px'
  }}>
    <p>  .</p><p>  .</p><p>  .</p><p>  .</p><p>  .</p><p>  .</p><p>  .</p>

<button type="button" class="btm_image" id="img_btn" onClick={navigateToSearch}><img src="/sojuButton.png"/></button>

<button type="button" class="btm_image" id="img_btn" onClick={navigateToSearchBeer} style={{marginLeft:'160px', marginTop: '100px'}}><img  src="/beerButton.png"/></button>

<button type="button" class="btm_image" id="img_btn" onClick={navigateToSearchWhiskey} style={{marginLeft:'210px'}}><img  src="/whiskeyButton.png"/></button>

<button type="button" class="btm_image" id="img_btn" onClick={navigateToSearchCocktail} style={{marginLeft:'210px'}}><img  src="/cocktailButton.png"/></button>

</div>


    </div>
    </div>
);

    }

    export default HomePageNaJacBar;