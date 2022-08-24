const CommentListItem = ({ comment }) => {
  // comment_id, body, author, votes, created_at
  return <h6>{comment.author}</h6>;
};

export default CommentListItem;
