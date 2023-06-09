let comments = [];

// Implement temporary chat features created in case the server doesn't run properly

// Get Comments
function getComments() {
  return comments;
}

// Posting comments
function addComment(comment) {
  comments.unshift(comment);
}

export { getComments, addComment };