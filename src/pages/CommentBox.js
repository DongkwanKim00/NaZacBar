import React, { useState, useEffect, useContext } from 'react';
import { getComments, addComment } from './CommentList';
import './Soju.css';
import ChatData from './ChatData';
import LoggedInUserContext from './LoggedInUserContext';
import axios from 'axios';


const CommentBox = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [userName, setUserName] = useState('John Doe'); // 사용자 이름 예시
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  
  const loggedInUser = useContext(LoggedInUserContext);
  const baseUrl = "http://localhost:8092";

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = () => {
    const comments = getComments();
    setComments(comments);
  };

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim() !== '') {
      const updatedComments = [{ comment: newComment, user: userName }, ...comments];
      setComments(updatedComments);
      setNewComment('');
    }
  };

  const handleCommitSubmit = (e) => {
    setAuthor(loggedInUser.mail);
    setCategory(ChatData.category);
    
    if (newComment.trim() !== '') {
      setComments(newComment);
    }

    e.preventDefault();
    console.log(category, author, comments);
    axios
      .post(`${baseUrl}/api/chat`, {
        category: category,
        author:  author,
        content: comments,
      })
      .then((response) => {
        console.log(response.data);
        alert('댓글 입력 완료!');
        
      })
      .catch((error) => {
        console.log(error);
        alert('댓글 입력 실패!');
      });
  };

  return (
    <div>
      <div className="comment-box-container">
        <form onSubmit={handleCommitSubmit} className="comment-button-submit-location">
          <div className="comment-input-container">
            <textarea
              className="comment-input"
              value={newComment}
              onChange={handleInputChange}
              placeholder="Write a comment..."
            ></textarea>
          </div>
          <button className="comment-submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="comment-list">
        {comments.length > 0 ? (
          <ul className="comment-ul">
            {comments.map((comment, index) => (
              <li key={index} className="comment-item">
                <div className="comment-avatar">
                  <img src="/basic_profile.png" alt="Profile" className="profile-image" />
                  <span className="comment-username">칵테일 러버</span>
                  <img src="/memoPin.jpg" alt="Memo Pin" className="memo-pin-image" />
                </div>
                <div className="comment-content">
                  <span className="comment-text">{comment.comment}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-comments">No comments yet</p>
        )}
      </div>
    </div>
  );
};

export default CommentBox;