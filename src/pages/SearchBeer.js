import React, { Component } from 'react';
import Information from './info-beer';
import '../index.css';
import './Soju.css';
import CommentBox from './CommentBox';
import ImageButton from './ImageButton';

class SearchBeer extends Component {

  

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
      paddingRight: '600px',
      fontSize: '30px',
      
    };
    const elementStyle = {
      border: 'solid',
      borderRadius: '10px',
      position: 'relative',
      left: '10vh',
      height: '8vh',
      width: '40vh',
      marginTop: '5vh',
      marginBottom: '10vh',
      borderColor: 'skyblue',
      fontSize: '25px',
      
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
      <div key={data.name}>
        <ul>
          <li style={{ position: 'relative', left: '10vh' }}>
          <button
      
               style={styleInfo}
              onClick={this.handleClick(1)}
              onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
                }}
              onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            }}
            >
  {data.name}
</button>
          </li>
        </ul>
      </div>
    ));

    const selectedItem = Information.find(
      (data) => data.name === this.state.clickedItem
    );

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
        <div className="home-contents-area" style={{ backgroundImage: "url('/noteBackground.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
  {checkClicked === 1 && selectedItem ? (
    <>
      <div className="image-info-container">
        <div className="image-container">
          <img
            className="sojustyle"
            src={`/맥주/${selectedItem.image}`}
            alt={selectedItem.name}
          />
        </div>
        <div className="info-container">
          <div className="info-details">
            <h1>{selectedItem.name}</h1>
            <p>{selectedItem.percent}</p>
          </div>
          <div className="content-container">
            <p>{selectedItem.content}</p>
          </div>
        </div>
      </div>

      <div className="button-container">
        <ImageButton />
        {/*<img className="like-notlike" src={`/like.png`} alt="Like" />
        <img
          className="like-notlike"
          src={`/NotLike.png`}
          alt="Not Like"
        />*/}
      </div>

      <CommentBox />
    </>
          ) : (
            items
          )}
        </div>
      </div>
    );
  }
}

export default SearchBeer;