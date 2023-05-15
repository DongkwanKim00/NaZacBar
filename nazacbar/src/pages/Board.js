import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";

const Board = () => {
  const baseUrl = "http://localhost:8086";

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); 
  

  // 작성자를 로그인된 사용자의 이름으로 설정
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const author = loggedInUser ? loggedInUser.name : '';

  useEffect(() => {
    getBoard();
  }, []);

  // get
  async function getBoard() {
    await axios
      .get(baseUrl + "/api/board")
      .then((response) => {
        console.log(response.data);
        setTitle(response.data.title);
        setContent(response.data.content);
        setSelectedCategory(response.data.category);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleChange_title = (e)=>{
    e.preventDefault();
    setTitle(e.target.value);
  }

  const handleChange_content = (e)=>{
    e.preventDefault();
    setContent(e.target.value);
  }

  const handleChange_category = (e) => { 
    setSelectedCategory(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(baseUrl + "/api/board", {
        title: title,
        author: author,
        content: content,
        category: selectedCategory
      })
      .then((response) => {
        console.log(response.data);
        window.location.href = '/boardlist';
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [posts, setPosts] = useState([]);



  useEffect(() => {
    fetch("/api/board")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{
      background: `url('/barImage2.png') no-repeat center center fixed`,
      WebkitBackgroundSize: 'cover',
      MozBackgroundSize: 'cover',
      OBackgroundSize: 'cover',
      backgroundSize: 'cover',
      padding: '50px'
    }}>
      <h1 style={{ textAlign: "center", marginBottom: "50px", color: "white" }}>게시판</h1>
      <form onSubmit={handleSubmit}>
        <p style={{ color: "white"}}> 제목: <input type="text" className="form-control" placeholder="Title" 
          aria-label="Title"  required={true} value={title} onChange={handleChange_title}></input></p>
        <p style={{ color: "white"}}> 작성자: {author}</p>
        <p style={{ color: "white"}}> 카테고리: 
          <select className="form-control" value={selectedCategory} onChange={handleChange_category}>
            <option value="">카테고리 선택</option>
            <option value="Soju">소주</option>
            <option value="Beer">맥주</option>
            <option value="Whiskey">위스키</option>
          </select>
        </p>
        <label htmlFor="content" style={{color: 'white'}}>Content</label>
          <textarea id="content" className="form-control" placeholder="Write your content here" 
          required={true} value={content} onChange={handleChange_content}
          style={{height: "200px"}}/>
        
        <p></p>
      <Button variant="primary" type="submit">
        제출
      </Button>
    </form>

    <div style={{ minHeight: "60vh", overflowY: "auto" }}>
      {posts.map((post) => (
      <div
        key={post.id}
        style={{
          backgroundColor: "white",
          padding: "10px",
          margin: "20px 0",
          borderRadius: "10px",
        }}
      >
        <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "5px" }}>
          {post.title}
        </p>
        <p style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "5px" }}>
          {post.author} - {new Date(post.createdAt).toLocaleString()}
        </p>
        <p style={{ fontSize: "14px", marginBottom: "5px" }}>카테고리: {post.category}</p> {/* 추가된 부분: 카테고리 표시 */}
        <hr />
        <p style={{ fontSize: "14px" }}>{post.content}</p>
      </div>
      ))}
    </div>
  </div>
  );
};
      

export default Board;