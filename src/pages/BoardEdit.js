import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const BoardEdit = () => {
  const baseUrl = "http://localhost:8086";
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/board/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setContent(response.data.content);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${baseUrl}/api/board/${id}`, {
        title,
        content
      });

      // Perform any desired action after the update is successful.
      // For example, you can navigate to another page or perform additional tasks.
      window.location.href = '/boardlist';
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ background: `url('/barImage2.png') no-repeat center center fixed`, WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover', backgroundSize: 'cover', minHeight: '100vh', padding: '50px' }}>
      <h1 style={{ textAlign: "center", color: "#ffffff" }}>게시글 수정</h1>
      <Form onSubmit={handleUpdate} style={{ width: "60%", margin: "0 auto", color: "#ffffff" }}>
        <Form.Group controlId="title">
          <Form.Label>제목</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
          />
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Label>내용</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요"
          />
        </Form.Group>
        <p></p>
        <Button variant="primary" type="submit">수정 완료</Button>
      </Form>
    </div>
  );
};

export default BoardEdit;