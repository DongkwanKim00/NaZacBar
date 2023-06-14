import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Rank = () => {
  const baseUrl = "http://localhost:8086";
  const [rankedList, setRankedList] = useState([]);
 // Get ranked posts on component mount
  useEffect(() => {
    getRankedPosts();
  }, []);
  // Asynchronous function to get ranked posts
  const getRankedPosts = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/board/ranked`);
      setRankedList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [selectedOption, setSelectedOption] = useState('');
 // Event handler when user changes the option
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (

    <div style={{ background: `url('/barImage2.png') no-repeat center center fixed`, WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover', backgroundSize: 'cover', minHeight: '100vh', padding: '50px' }}>
      <h1 style={{ textAlign: "center", color: "#ffffff", position: "fixed", left: "38%" }}>카테고리별 인기 게시글</h1>

      <div style={{position: "fixed", marginLeft: "40%", marginTop: "3.5%"}}>
        <input type="checkbox" name="rank" value="wisky" checked={selectedOption === "wisky"} onChange={handleOptionChange} style={{ marginLeft: "15px"}}/> <label style={{ color: "#ffffff" , marginRight: "10px"}}>Wisky</label>
        <input type="checkbox" name="rank" value="beer" checked={selectedOption === "beer"} onChange={handleOptionChange} /> <label style={{ color: "#ffffff" , marginRight: "10px"}}>Beer</label>
        <input type="checkbox" name="rank" value="soju" checked={selectedOption === "soju"} onChange={handleOptionChange} /> <label style={{ color: "#ffffff" , marginRight: "10px"}}>Soju</label>
        <label style={{ color: "#ffffff" , marginRight: "10px"}}>👈Select category</label>
      </div>

      <div id="onoffDisplay">
      {!selectedOption && (
      <div id="basic" style={{ left: "20%", width: "60%", marginTop: "100px", backgroundColor: "rgba(0, 0, 0, 0.5)", position: "fixed", maxHeight: "calc(100vh - 300px)", overflowY: "auto" }}>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>카테고리</th>
            <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>제목</th>
            <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>추천 수</th>
            <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>작성자</th>
            <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>작성일</th>
          </tr>
        </thead>
        <tbody>
          {rankedList.map((post) => (
            <tr key={post.id}>
              <td style={{ color: "#ffffff", padding: "10px" }}>{post.category}</td>
              <td style={{ color: "#ffffff", padding: "10px" }}>
                {post.image && (
                  <img src={`${baseUrl}/api/board/image/${post.id}`} alt="게시글 이미지" style={{ width: "50px", height: "auto", marginRight: "10px" }} />
                )}
                <Link to={`/board/detail/${post.id}`} style={{ color: "#ffffff", textDecoration: "underline" }}>
                  {post.title}
                </Link>
              </td>
              <td style={{ color: "#ffffff", padding: "10px" }}>{post.recommendation}</td>
              <td style={{ color: "#ffffff", padding: "10px" }}>{post.author}</td>
              <td style={{ color: "#ffffff", padding: "10px" }}>{new Date(post.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )}

        {selectedOption === 'wisky' && <div id="wiskyDisplay" style={{ left: "20%", width: "60%", marginTop: "100px", backgroundColor: "rgba(0, 0, 0, 0.5)", position: "fixed", maxHeight: "calc(100vh - 300px)", overflowY: "auto" }}>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>카테고리</th>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>제목</th>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>추천 수</th>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>작성자</th>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>작성일</th>
              </tr>
            </thead>
            <tbody>
              {rankedList.filter((post) => post.category === "Whiskey").map((post) => (
                <tr key={post.id}>
                  <td style={{ color: "#ffffff", padding: "10px" }}>{post.category}</td>
                  <td style={{ color: "#ffffff", padding: "10px" }}>
                    {post.image && (
                      <img src={`${baseUrl}/api/board/image/${post.id}`} alt="게시글 이미지" style={{ width: "50px", height: "auto", marginRight: "10px" }} />
                    )}
                    <Link to={`/board/detail/${post.id}`} style={{ color: "#ffffff", textDecoration: "underline" }}>
                      {post.title}
                    </Link>
                  </td>
                  <td style={{ color: "#ffffff", padding: "10px" }}>{post.recommendation}</td>
                  <td style={{ color: "#ffffff", padding: "10px" }}>{post.author}</td>
                  <td style={{ color: "#ffffff", padding: "10px" }}>{new Date(post.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        }

        {selectedOption === 'beer' && <div id="beerDisplay" style={{ left: "20%", width: "60%", marginTop: "100px", backgroundColor: "rgba(0, 0, 0, 0.5)", position: "fixed", maxHeight: "calc(100vh - 300px)", overflowY: "auto" }}>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>카테고리</th>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>제목</th>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>추천 수</th>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>작성자</th>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>작성일</th>
              </tr>
            </thead>
            <tbody>
              {rankedList.filter((post) => post.category === "Beer").map((post) => (
                <tr key={post.id}>
                  <td style={{ color: "#ffffff", padding: "10px" }}>{post.category}</td>
                  <td style={{ color: "#ffffff", padding: "10px" }}>
                    {post.image && (
                      <img src={`${baseUrl}/api/board/image/${post.id}`} alt="게시글 이미지" style={{ width: "50px", height: "auto", marginRight: "10px" }} />
                    )}
                    <Link to={`/board/detail/${post.id}`} style={{ color: "#ffffff", textDecoration: "underline" }}>
                      {post.title}
                    </Link>
                  </td>
                  <td style={{ color: "#ffffff", padding: "10px" }}>{post.recommendation}</td>
                  <td style={{ color: "#ffffff", padding: "10px" }}>{post.author}</td>
                  <td style={{ color: "#ffffff", padding: "10px" }}>{new Date(post.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        }
        {selectedOption === 'soju' && <div id="sojuDisplay" style={{ left: "20%", width: "60%", marginTop: "100px", backgroundColor: "rgba(0, 0, 0, 0.5)", position: "fixed", maxHeight: "calc(100vh - 300px)", overflowY: "auto" }}>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>카테고리</th>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>제목</th>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>추천 수</th>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>작성자</th>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>작성일</th>
              </tr>
            </thead>
            <tbody>
              {rankedList.filter((post) => post.category === "Soju").map((post) => (
                <tr key={post.id}>
                  <td style={{ color: "#ffffff", padding: "10px" }}>{post.category}</td>
                  <td style={{ color: "#ffffff", padding: "10px" }}>
                    {post.image && (
                      <img src={`${baseUrl}/api/board/image/${post.id}`} alt="게시글 이미지" style={{ width: "50px", height: "auto", marginRight: "10px" }} />
                    )}
                    <Link to={`/board/detail/${post.id}`} style={{ color: "#ffffff", textDecoration: "underline" }}>
                      {post.title}
                    </Link>
                  </td>
                  <td style={{ color: "#ffffff", padding: "10px" }}>{post.recommendation}</td>
                  <td style={{ color: "#ffffff", padding: "10px" }}>{post.author}</td>
                  <td style={{ color: "#ffffff", padding: "10px" }}>{new Date(post.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        }
      </div>
    </div>
  );
};

export default Rank;