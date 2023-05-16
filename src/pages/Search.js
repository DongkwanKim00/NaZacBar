import React, { Component } from 'react';
import 전국소주 from'../전국 소주/참이슬.jpg'
import Information from './info-json';
import "../index.css";
import "./Soju.css";





class Search extends Component {

  state={
      checkClicked : 'false'

  };

  handleClick =(sign)=> (e)=>{
    if(sign==='true'){
        this.setState((pre)=>{
          return {

            checkClicked: 'true'

          }

        });

    }


  };



  constructor(){
    super();

    this.state={
      search:null
    };
  }

  searchSpace=(event)=>{
    if(event.key=="Enter"){
    let keyword = event.target.value;
    this.setState({search:keyword})
  }
  }

  render(){
   
    const { checkClicked } = this.state;
    const styleInfo = {
      paddingRight:'10px'
    }
    const elementStyle ={
      border:'solid',
      borderRadius:'10px',
      position:'relative',
      left:'10vh',
      height:'3vh',
      width:'20vh',
      marginTop:'5vh',
      marginBottom:'10vh'
    }
    const items = Information.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.country.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map(data=>{

      
      return(
        
      /*<div>
        <ul>
          <li style={{position:'relative',left:'10vh'}}>
            <span style={styleInfo}>{data.name}</span>
            <span style={styleInfo}>{data.age}</span>
            <span style={styleInfo}>{data.country}</span>
          </li>
        </ul>
      </div>*/
      <div>
        <ul>
          <li style={{position:'relative',left:'10vh'}}>
            <button style={styleInfo} onClick={this.handleClick('true')}>{data.name}</button>
            <button style={styleInfo} onClick={this.handleClick('true')}>{data.age}</button>
            <button style={styleInfo} onClick={this.handleClick('true')}>{data.country}</button>
          </li>
        </ul>

      </div>
      )
    })
    if (checkClicked==='true') {
      return (
        <div style={{ marginTop: '16px' }}>
        <div className="home-search-area">
        <input type="text" placeholder="Enter " style={elementStyle} onKeyDown={(e)=>this.searchSpace(e)} />
        
        </div>
       <div className="home-contents-area">
        <h1 align='center'>참이슬</h1>
        <img className='sojustyle' src={전국소주}></img>
        
        </div>
        </div>
      );
  }
    return (
      <div style={{ marginTop: '16px' }}>
      <div className="home-search-area">
      <input type="text" placeholder="Enter " style={elementStyle} onKeyDown={(e)=>this.searchSpace(e)} />
      
      </div>
     <div className="home-contents-area">
      {items}
      </div>
      </div>
    )
  }
}

export default Search;