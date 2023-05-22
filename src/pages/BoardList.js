import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const BoardList = () => {
  const baseUrl = "http://localhost:8086";

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/board`)
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

  const CreateButton = styled(Link)`
    display: inline-block;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #fff;
    color: #000;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #f2f2f2;
    }
  `;

  return (
    <div
      style={{
        background: `url('/barImage2.png') no-repeat center center fixed`,
        WebkitBackgroundSize: "cover",
        MozBackgroundSize: "cover",
        OBackgroundSize: "cover",
        backgroundSize: "cover",
        minHeight: "100vh",
        padding: "50px",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#ffffff"}}>게시글 목록</h1>
      <div style={{ textAlign: "right", marginBottom: "20px", marginRight: "20%" }}>
        <CreateButton to="/board">작성하기</CreateButton>
      </div>
      <div
        id="basic"
        style={{
          left: "20%",
          width: "60%",
          marginTop: "40px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          position: "fixed",
          maxHeight: "calc(100vh - 300px)",
          overflowY: "auto",
          padding: "10px",
          color: "#ffffff",
        }}
      >
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th style={{ borderBottom: "1px solid #ffffff", padding: "10px" }}>
                카테고리
              </th>
              <th style={{ borderBottom: "1px solid #ffffff", padding: "10px" }}>
                제목
              </th>
              <th style={{ borderBottom: "1px solid #ffffff", padding: "10px" }}>
                추천 수
              </th>
              <th style={{ borderBottom: "1px solid #ffffff", padding: "10px" }}>
                작성자
              </th>
              <th style={{ borderBottom: "1px solid #ffffff", padding: "10px" }}>
                작성일
              </th>
            </tr>
          </thead>
          <tbody>
            {posts
              .slice()
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((post) => (
                <tr key={post.id}>
                  <td style={{ padding: "10px" }}>{post.category}</td>
                  <td style={{ padding: "10px" }}>
                    {post.image && (
                      <Thumbnail
                        src={`${baseUrl}/api/board/image/${post.id}`}
                        alt="게시글 이미지"
                      />
                    )}
                    <Link
                      to={`/board/detail/${post.id}`}
                      style={{ textDecoration: "underline", color: "white" }}
                    >
                      {post.title}
                    </Link>
                  </td>
                  <td style={{ padding: "10px" }}>{post.recommendation}</td>
                  <td style={{ padding: "10px" }}>{post.author}</td>
                  <td style={{ padding: "10px" }}>
                    {new Date(post.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BoardList;
