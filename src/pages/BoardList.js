import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const BoardList = () => {
  const baseUrl = "http://localhost:8086";

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/api/board`)
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const ListItem = styled.div`
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f8f8f8;
    display: flex;
    align-items: center;
  `;

  const Thumbnail = styled.img`
    width: 50px;
    height: auto;
    margin-right: 10px;
  `;

  const Title = styled.h3`
    margin-bottom: 5px;
  `;

  const Author = styled.p`
    color: #777;
    font-size: 14px;
    margin: 0;
  `;

  return (
    <Container>
      <div
        style={{
          background: `url('/barImage2.png') no-repeat center center fixed`,
          WebkitBackgroundSize: "cover",
          MozBackgroundSize: "cover",
          OBackgroundSize: "cover",
          backgroundSize: "cover",
          minHeight: "100vh",
          padding: "50px"
        }}
      >
        <h1 style={{ color: "white" }}>게시글 목록</h1>
        <div style={{ alignItems: "center" }}>
          <Link to="/board">
            <button>작성하기</button>
          </Link>
        </div>

        {posts.map((post) => (
          <ListItem key={post.id}>
            {post.image && <Thumbnail src={`${baseUrl}/api/board/image/${post.id}`} alt="게시글 이미지" />}
            <div>
              <Link to={`/board/detail/${post.id}`}>
                <Title>{post.title}</Title>
              </Link>
              <Author>{post.author} - {new Date(post.createdAt).toLocaleString()}</Author>
            </div>
          </ListItem>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: url('/barImage2.png') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
`;

export default BoardList;