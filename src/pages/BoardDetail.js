import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const BoardDetail = () => {
  const baseUrl = "http://localhost:8086";
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/board/${id}`)
      .then((response) => {
        const data = response.data;
        if (data === "NoPage") {
          setNotFound(true);
        } else {
          setPost(response.data);
        }
      })
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

  // 삭제
  const handleDelete = async () => {
    try {
      await axios.delete(`${baseUrl}/api/board/${id}`);
      window.location.href = '/boardlist';
    } catch (error) {
      console.log(error);
    }
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
        <h1 style={{ textAlign: "center", color: "#ffffff", position: "fixed", left: "48%", top: "15%" }}>{post.title}</h1>
        <p style={{ textAlign: "center", color: "#ffffff", position: "fixed", left: "43%", top: "23%" }}>
          {post.author} - {new Date(post.createdAt).toLocaleString()}
        </p>
        <p style={{ textAlign: "center", color: "#ffffff", position: "fixed", left: "70%", top: "23%" }}>추천 수: {post.recommendation}</p>
        <button onClick={handleRecommendation}
        style={{
          display: "inline-block",
          padding: "10px 20px",
          borderRadius: "5px",
          backgroundColor: "#fff",
          color: "#000",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "background-color 0.3s ease",
          position: "fixed", left: "75%", top: "21%"
        }}>추천</button>
        <div>
          <Link
          to={`/board/edit/${id}`}>
            <button style={{
            display: "inline-block",
            padding: "10px 20px",
            borderRadius: "5px",
            backgroundColor: "#fff",
            color: "#000",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "background-color 0.3s ease",
            position: "fixed", left: "80%", top: "21%"
          }}>수정</button>
          </Link> {" "}
          <button onClick={handleDelete}
          style={{
            display: "inline-block",
            padding: "10px 20px",
            borderRadius: "5px",
            backgroundColor: "#fff",
            color: "#000",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "background-color 0.3s ease",
            position: "fixed", left: "85%", top: "21%"
          }}>삭제</button>
        </div>
        
        <div
  style={{
    left: "25%",
    width: "50%",
    marginTop: "100px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "fixed",
    maxHeight: "calc(100vh - 300px)",
    overflowY: "auto"
  }}
>
  <table style={{ width: "100%" }}>
    <tbody>
      <tr key={post.id}>
        
          <img
            src={`${baseUrl}/api/board/image/${post.id}`}
            alt="post image"
            style={{ maxWidth: "30%", height: "auto" }}
          />
          <hr style={{border:"solid 2px #fff"}}/>
        </tr>
        
        <tr>
          {/* <p>{post.content}</p> */}
          {post.content && post.content.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </tr>
    </tbody>
  </table>
</div>

    

      </div>
    </div>
  );
};

export default BoardDetail;