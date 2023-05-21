import React, { Component } from 'react';
import Information from './info-json';
import '../index.css';
import './Soju.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: null,
      checkClicked: 0,
      clickedItem: null,
    };
  }

  handleClick = (sign) => (e) => {
    if (sign === 1) {
      const itemName = e.target.textContent;
      this.setState({
        checkClicked: 1,
        clickedItem: itemName,
      });
    }
  };

  searchSpace = (event) => {
    if (event.key === 'Enter') {
      if (this.state.checkClicked === 1) {
        this.setState({
          checkClicked: 0,
          search: event.target.value,
        });
      } else {
        this.setState({
          search: event.target.value,
        });
      }
    }
  };

  render() {
    const { checkClicked } = this.state;
    const styleInfo = {
      paddingRight: '10px',
    };
    const elementStyle = {
      border: 'solid',
      borderRadius: '10px',
      position: 'relative',
      left: '10vh',
      height: '3vh',
      width: '20vh',
      marginTop: '5vh',
      marginBottom: '10vh',
    };

    const items = Information.filter((data) => {
      if (this.state.search === null || this.state.search === undefined) {
        return data;
      } else if (
        (data.name &&
          data.name.toLowerCase().includes(this.state.search.toLowerCase())) ||
        (data.country &&
          data.country.toLowerCase().includes(this.state.search.toLowerCase()))
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
          </li>
        </ul>
      </div>
    ));

    const selectedItem = Information.find(
      (data) => data.name === this.state.clickedItem
    );

    if (checkClicked === 1 && selectedItem) {
      const selectedItemContent = Information.find(
        (data) => data.name === this.state.clickedItem
      ).content;

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
            <h1 align="center">{this.state.clickedItem}</h1>
            
            <img
              className="sojustyle"
              src={`/전국 소주/${selectedItem.image}`}
              alt={selectedItem.name}
            />
            <div className="content-container">
            <p>{selectedItemContent}</p>

            </div>
               <div className="like-container">
               <img className="like-notlike" src={`/like.png`} alt="Like" />
                <img className="like-notlike" src={`/NotLike.png`} alt="Not Like" />
              </div>

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