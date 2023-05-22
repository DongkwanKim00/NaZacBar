import React from 'react';
import { useState } from 'react';

const ImageButton = () => {

const [recommendationCount, setRecommendationCount] = useState(0);

  const handleButtonClick = () => {
    //추천수 증가
    console.log('이미지 버튼이 클릭되었습니다!');
    setRecommendationCount(recommendationCount+1);
  };
  const [recommendationCount2, setRecommendationCount2] = useState(0);

  const handleButtonClick2 = () => {
    //추천수 증가
    console.log('이미지 버튼이 클릭되었습니다!');
    setRecommendationCount2(recommendationCount2+1);
  };

  return (
    <>
    <div className="like-container">
        <button onClick={handleButtonClick}>
            <img   className="like-notlike" src={`/like.png`} alt="Like" />
        </button>
        <button onClick={handleButtonClick2}>
            <img   className="like-notlike" src={`/NotLike.png`} alt="Like" />
        </button>
  </div>
    <div className="like-container">
    <div>
      <p className="numOfLikes" alt="numOfLikes">{recommendationCount}</p>
    </div>
    <div>
      <p className="numOfNotLikes" alt="numOfNotLikes">{recommendationCount2}</p>
    </div>
  </div>
  </>
  );
};

export default ImageButton;