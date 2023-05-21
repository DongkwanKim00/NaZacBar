import React, { Component } from 'react';
import 전국소주 from'../전국 소주/참이슬.jpg'
import Information from './info-json';
import "../index.css";
import "./Soju.css";


class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: null,
      checkClicked: 0
    };
  }

  handleClick = (sign) => (e) => {
    if (sign === 1) {
      this.setState((prevState) => ({
        checkClicked: 1
      }));
      
    }
  };

  searchSpace = (event) => {
    if (event.key === "Enter") {
      if (this.state.checkClicked === 1) {
        this.setState({
          checkClicked: 0,
          search: event.target.value
        });
        
      } else {
        this.setState({
          search: event.target.value
        });
        
      }
    }
  };

  render() {
    const { checkClicked } = this.state;
    const styleInfo = {
      paddingRight: '10px'
    };
    const elementStyle = {
      border: 'solid',
      borderRadius: '10px',
      position: 'relative',
      left: '10vh',
      height: '3vh',
      width: '20vh',
      marginTop: '5vh',
      marginBottom: '10vh'
    };

    const items = Information.filter((data) => {
      if (this.state.search === null) {
        return data;
      } else if (
        data.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
        data.country.toLowerCase().includes(this.state.search.toLowerCase())
      ) {
        return data;
      }
    }).map((data) => (
      <div>
        <ul>
          <li style={{ position: 'relative', left: '10vh' }}>
            <button style={styleInfo} onClick={this.handleClick(1)}>
              {data.name}
            </button>
            <button style={styleInfo} onClick={this.handleClick(1)}>
              {data.age}
            </button>
            <button style={styleInfo} onClick={this.handleClick(1)}>
              {data.country}
            </button>
          </li>
        </ul>
      </div>
    ));

    if (checkClicked === 1) {
      return (
        <div style={{ marginTop: '16px' }}>
          <div className="home-search-area">
            <input
              type="text"
              placeholder="Enter "
              style={elementStyle}
              onKeyDown={(e) => this.searchSpace(e)}
            />
          </div>
          <div className="home-contents-area">
        <h1 align='center'>참이슬</h1>
        <img className='sojustyle' src={전국소주}></img>
        
        </div>
        </div>
      );
    } else {
      return (
        <div style={{ marginTop: '16px' }}>
          <div className="home-search-area">
            <input
              type="text"
              placeholder="Enter "
              style={elementStyle}
              onKeyDown={(e) => this.searchSpace(e)}
            />
          </div>
          <div className="home-contents-area">{items}</div>
        </div>
      );
    }
  }
}

export default Search;