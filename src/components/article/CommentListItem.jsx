import { timeStamp2Date } from "../../utils/time-utils";

const CommentListItem = ({ comment }) => {
  return (
    <>
      <h6>{comment.author}</h6>
      <p>
        <span>Created: {timeStamp2Date(comment.created_at)} </span>
        <span>Votes: {comment.votes} </span>
      </p>
      <p>{comment.body}</p>;
    </>
  );
};

export default CommentListItem;
