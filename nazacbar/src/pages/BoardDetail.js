import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BoardDetail = () => {
  const baseUrl = "http://localhost:8086";
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/board/${id}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleRecommendation = async () => {
    await axios
      .post(`${baseUrl}/api/board/recommendation`, {
        postId: id
      })
      .then((response) => {
        console.log(response.data);
        // 추천 후 게시글을 다시 조회하여 업데이트된 데이터를 표시
        axios
          .get(`${baseUrl}/api/board/${id}`)
          .then((response) => setPost(response.data))
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
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
      <div style={{ textAlign: "center", margin: "50px", color: "#ffffff" }}>
        <h1>{post.title}</h1>
        <p>
          {post.author} - {new Date(post.createdAt).toLocaleString()}
        </p>
        <p>추천 수: {post.recommendation}</p>
        <button onClick={handleRecommendation}>추천</button>
        <hr style={{ borderColor: "#ffffff" }} />
        <p>{post.content}</p>
        {post.image && (
          <img
          src={`${baseUrl}/api/board/image/${post.id}`}
          alt="게시글 이미지"
          style={{ maxWidth: "40%", height: "auto" }}
        />
        )}
      </div>
    </div>
  );
};

export default BoardDetail;