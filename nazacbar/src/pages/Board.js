import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";

const Board = () => {
  const baseUrl = "http://localhost:8081";

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

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
        setAuthor(response.data.author);
        setContent(response.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleChange_title = (e)=>{
    e.preventDefault();
    setTitle(e.target.value);
  }

  const handleChange_author = (e)=>{
    e.preventDefault();
    setAuthor(e.target.value);
  }

  const handleChange_content = (e)=>{
    e.preventDefault();
    setContent(e.target.value);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(baseUrl + "/api/board", {
        title: title,
        author: author,
        content: content,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: "",
    author: "",
    content: "",
  });


  useEffect(() => {
    fetch("/api/board")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ backgroundImage: "url('/wooden-board.jpg')", padding: "50px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "50px", color: "white" }}>게시판</h1>
      <form onSubmit={handleSubmit}>
          <p style={{ color: "white"}}> 제목: <input type="text" class="form-control" placeholder="Title" aria-label="Title"  required={true} value={title} onChange={handleChange_title}></input></p>
          <p style={{ color: "white"}}> 작성자: <input type="text" class="form-control" placeholder="Author" aria-label="Author" required={true} value={author} onChange={handleChange_author}></input></p>
          <p style={{ color: "white"}}> 내용 <input type="text" class="form-control" placeholder="Content" aria-label="Content" required={true} value={content} onChange={handleChange_content}></input></p>
          
          
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
          <hr />
          <p style={{ fontSize: "14px" }}>{post.content}</p>
        </div>
      ))}
    </div>
  </div>
  );
};
      

export default Board;