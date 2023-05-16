import React from 'react';
import newsData from './newsData';
import Hyperlink from 'react-native-hyperlink'
import { Text, StyleSheet } from 'react-native'
import openURL from './OpenUrl';
import { useState } from "react";
/**asdfsadfasdfds */
const News = () => {

  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
/*12313123131231231*/ 
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", handleScroll);



  return (
    <>
      <div className="banner">
        <h2 className="text-center">Drone News</h2>
      </div>

      <div className="news">
        <ul>
          {newsData.map((newsItem) => (
            <tr key={newsItem.id}>
              <img src={newsItem.thumbnailUrl} alt={newsItem.title} style={{ width: '300px' }} />
              <p></p>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Hyperlink linkStyle={styles.hyperlinkStyle} onPress={(url) => openURL(url)}>
                <Text style={styles.contentStyle} onPress={(url) => openURL(newsItem.link)}>{newsItem.title}</Text>
              </Hyperlink>
              </div>
              <hr></hr>
            </tr>
          ))}
        </ul>

      <button
        className={`top-button ${showButton ? "show" : ""}`}
        onClick={handleClick}
      >
        Back to top
      </button>
      </div>
  
    </>
  );
}

const styles = StyleSheet.create({
  hyperlinkStyle: {
    fontSize: 16,
    color: '#505050'
  },
  contentStyle: {
    fontSize: 18,
    color: '#111111'
  }
})


export default News;

