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
    // Fetch the post data for the specified ID
    axios
      .get(`${baseUrl}/api/board/${id}`)
      .then((response) => {
        const data = response.data;
        if (data === "NoPage") {
          // If the response indicates that the page doesn't exist, set the notFound state to true
          setNotFound(true);
        } else {
          // Otherwise, set the post state to the fetched data
          setPost(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleRecommendation = async () => {
    // Send a recommendation for the post
    await axios
      .post(`${baseUrl}/api/board/recommendation`, {
        postId: id
      })
      .then((response) => {
        console.log(response.data);
        // Fetch the post data again to display the updated data after the recommendation
        axios
          .get(`${baseUrl}/api/board/${id}`)
          .then((response) => setPost(response.data))
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = async () => {
    // Delete the post
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
        {/* Display post information */}
        <h1>{post.title}</h1>
        <p>
          {post.author} - {new Date(post.createdAt).toLocaleString()}
        </p>
        <p>추천 수: {post.recommendation}</p>
        <button onClick={handleRecommendation}>
          추천
        </button>
        <hr style={{ borderColor: "#ffffff" }} />

        {/* Display post content with line breaks */}
        {post.content && post.content.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}

        {/* Display post image */}
        {post.image && (
          <img
            src={`${baseUrl}/api/board/image/${post.id}`}
            alt="게시글 이미지"
            style={{ maxWidth: "40%", height: "auto" }}
          />
        )}
        <p></p>

        <div>
          {/* Link to edit the post */}
          <Link to={`/board/edit/${id}`}>
            <button>
              수정
            </button>
          </Link>{" "}
          {/* Button to delete the post */}
          <button onClick={handleDelete}>
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;
