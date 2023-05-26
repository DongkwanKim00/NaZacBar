import React, { Component } from 'react';
import Information from './info-cocktail';
import '../index.css';
import './Soju.css';
import CommentBox from './CommentBox';
import ImageButton from './ImageButton';

class SearchCocktail extends Component {

  

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
      paddingRight: '500px',
      fontSize: '45px',
      
    };
    const elementStyle = {
      border: 'none',
      padding: '20px',
      position: 'relative',
      left: '10vh',
      height: '8vh',
      width: '42vh',
      marginTop: '5vh',
      marginBottom: '10vh',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      fontSize: '38px',
      backgroundImage: `url(${process.env.PUBLIC_URL}/searchButton.png)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      
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
          <li style={{ position: 'relative', left: '20vh' }}>
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
      <div style={{ marginTop: '35px' }}>
        <div className="home-search-area">
          <input
            type="text"
            placeholder="Enter "
            style={elementStyle}
            onKeyDown={(e) => this.searchSpace(e)}
          />
               <img src="/cocktails.png"  style={{
      width: '100%', // 이미지의 너비를 조정합니다. 원하는 크기로 변경하세요.
      height: 'auto', // 이미지의 높이를 자동으로 조정합니다.
      display: 'block', // 이미지를 블록 요소로 설정하여 가로 중앙 정렬을 적용합니다.
      margin: '0 auto', // 가로 중앙 정렬을 위해 좌우 여백을 자동으로 조정합니다.
      marginBottom: '-90px',
    }} />
        </div>
        <div className="home-contents-area" style={{ backgroundImage: "url('/noteBackground.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
  {checkClicked === 1 && selectedItem ? (
    <>
      <div className="image-info-container">
        <div className="image-container">
          <img
            className="sojustyle"
            src={`/전국 소주/${selectedItem.image}`}
            alt={selectedItem.name}
          />
        </div>
        <div className="info-container">
          <div className="info-details">
            <h1>{selectedItem.name}</h1>
           <p>{selectedItem.glass}</p>
          <p>{selectedItem.method}</p>
          <p>{selectedItem.ice}</p>
          <p>{selectedItem.ingredient}</p>

          </div>
          <div className="content-container">
            <p>{selectedItem.recipe}</p>
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

export default SearchCocktail;