
import React, { useState, useEffect, Component } from 'react';
import { useNavigate } from "react-router-dom";
import "../index.css";

import { Form, Button } from "react-bootstrap";

const HomePageNaJacBar = ()=> {

const navigate = useNavigate();
 
  // Function to navigate to the search page
  const navigateToSearch = () => {
    navigate("/search");
  };

  // Function to navigate to the search beer page
  const navigateToSearchBeer = () => {
    navigate("/searchbeer");
  };

  // Function to navigate to the search whiskey page
  const navigateToSearchWhiskey = () => {
    navigate("/searchwhiskey");
  };

  // Function to navigate to the search cocktail page
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

{/* Button to navigate to the search soju page */}
<button type="button" class="btm_image" id="img_btn" onClick={navigateToSearch}><img src="/sojuButton.png"/></button>

{/* Button to navigate to the search beer page */}
<button type="button" class="btm_image" id="img_btn" onClick={navigateToSearchBeer} style={{marginLeft:'160px', marginTop: '100px'}}><img  src="/beerButton.png"/></button>

 {/* Button to navigate to the search whiskey page */}
<button type="button" class="btm_image" id="img_btn" onClick={navigateToSearchWhiskey} style={{marginLeft:'210px'}}><img  src="/whiskeyButton.png"/></button>

{/* Button to navigate to the search cocktail page */}
<button type="button" class="btm_image" id="img_btn" onClick={navigateToSearchCocktail} style={{marginLeft:'210px'}}><img  src="/cocktailButton.png"/></button>

</div>


    </div>
    </div>
);

    }

    export default HomePageNaJacBar;