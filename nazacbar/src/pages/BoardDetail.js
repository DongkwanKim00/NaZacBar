import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BoardDetail = () => {
  const baseUrl = "http://localhost:8086";
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(`${baseUrl}/api/board/${id}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div style={{
        background: `url('/barImage2.png') no-repeat center center fixed`,
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',
        minHeight: '100vh',
        padding: '50px'
      }}>
        <div style={{textAlign: "center", margin: "50px", color: "#ffffff"}}>
            <h1>{post.title}</h1>
            <p>{post.author} - {new Date(post.createdAt).toLocaleString()}</p>
            <hr style={{borderColor: "#ffffff"}} />
            <p>{post.content}</p>
        </div>
    </div>
  );
};

export default BoardDetail;