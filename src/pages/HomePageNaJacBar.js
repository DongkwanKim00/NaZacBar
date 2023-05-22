
import React, { useState, useEffect, Component } from 'react';
import { useNavigate } from "react-router-dom";
import "../index.css";

import { Form, Button } from "react-bootstrap";

const HomePageNaJacBar = ()=> {

const navigate = useNavigate();
 
  const navigateToSearch = () => {
    navigate("/search");
  };

return(
  <div style={{ marginTop: '16px' }}>
<div style={{
    background: `url('/NajacBarHomePage.png') no-repeat center`,
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',
        minHeight: '70vh',
        padding: '50px'
  }}>

<div>
    <p>  .</p><p>  .</p><p>  .</p><p>  .</p><p>  .</p><p>  .</p><p>  .</p>
"          "
"          "
"          "
<button type="button" class="btm_image" id="img_btn" onClick={navigateToSearch}><img src="/sojuReal.png"/></button>
"          "
"          "
"          "
"          "
<button type="button" class="btm_image" id="img_btn"><img  src="/beerReal.png"/></button>
"          "
"          "
"          "
"          "
<button type="button" class="btm_image" id="img_btn"><img  src="/whiskeyReal.png"/></button>
"          "
"          "
"          "
"          "
<button type="button" class="btm_image" id="img_btn"><img  src="/cocktails.png"/></button>

</div>


    </div>
    </div>
);

    }

    export default HomePageNaJacBar;