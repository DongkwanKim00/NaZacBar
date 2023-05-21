let comments = [];

function getComments() {
  return comments;
}

function addComment(comment) {
  comments.unshift(comment);
}

export { getComments, addComment };