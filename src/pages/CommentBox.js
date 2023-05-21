import React, { Component } from 'react';
import { getComments, addComment } from './CommentList';

import './Soju.css';

class CommentBox extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      newComment: '',
    };
  }

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    const comments = getComments();
    this.setState({ comments });
  };

  handleInputChange = (event) => {
    this.setState({
      newComment: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { newComment, comments } = this.state;
    if (newComment.trim() !== '') {
      addComment(newComment);
      const updatedComments = [newComment, ...comments];
      this.setState({
        comments: updatedComments,
        newComment: '',
      });
    }
  };

  render() {
    const { comments, newComment } = this.state;

    return (
      <div className="comment-box-container">
        <div className="comment-list">
          {comments.length > 0 ? (
            <ul>
              {comments.map((comment, index) => (
                <li key={index} className="comment-item">
                  {comment}
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-comments">No comments yet</p>
          )}
        </div>
        <form onSubmit={this.handleSubmit}>
          <textarea
            className="comment-input"
            value={newComment}
            onChange={this.handleInputChange}
            placeholder="Write a comment..."
          ></textarea>
          <button className="comment-submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CommentBox;