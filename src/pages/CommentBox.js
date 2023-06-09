import React, { useState, useEffect } from 'react';
import './Soju.css';
import ChatData from './ChatData';
import LoggedInUserContext from './LoggedInUserContext';
import axios from 'axios';
import categoty from './Search.js';


// The part that embodies the comments
const CommentBox = ({ category }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [chats, setChats] = useState([]);

  // The part that connects to the server
  const baseUrl = 'http://localhost:8092';

  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const author = loggedInUser ? loggedInUser.name : '';

  useEffect(() => {
    fetchComments();
    fetchChats();
  }, [category]);

  const fetchComments = () => {
    // I'll get comments from the server or other sources
    // Updates the comments status.
    // const comments = getComments();
    // setComments(comments);
    // console.log('testetestste', comments);
  };

  // The part where you bring in the comments
  const fetchChats = () => {
    axios
      .get(`${baseUrl}/api/chat/${category}`)
      .then((response) => {
        if (response && response.data) {
          setChats(response.data);
          console.log('댓글 기록들 가져오기', response.data);
        } else {
          console.log('댓글 기록이 없습니다.', category);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim() !== '') {
      // Create a new comment object
      const comment = {
        id: Date.now(),
        comment: newComment
      };
      // Adds a new comment to the comments status
      setComments((prevComments) => [...prevComments, comment]);
    }
  };

  const handleCommitSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);

    if (newComment.trim() !== '') {
      axios
        .post(`${baseUrl}/api/chat`, {
          category: category,
          author: author,
          content: newComment,
        })
        .then((response) => {
          console.log(response.data);
          alert('댓글 입력 완료!');
          fetchChats(); // Get updated comments after submitting new comments
        })
        .catch((error) => {
          console.log(error);
          alert('댓글 입력 실패!');
        });
    }
    setNewComment('');
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
              placeholder="댓글을 작성해주세요..."
            ></textarea>
          </div>
          <button className="comment-submit-btn" type="submit">
            제출
          </button>
        </form>
      </div>
      <div className="comment-list">
        {chats.length > 0 ? (
          <ul className="comment-ul">
            {chats.map((chat) => (
              <li key={chat.id} className="comment-item">
                <div className="comment-avatar">
                  <img src="/basic_profile.png" alt="프로필" className="profile-image" />
                  <span className="comment-username">{chat.author}</span>
                  <img src="/memoPin.jpg" alt="메모핀" className="memo-pin-image" />
                </div>
                <div className="comment-content">
                  <span className="comment-text">{chat.content}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-comments">아직 댓글이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default CommentBox;