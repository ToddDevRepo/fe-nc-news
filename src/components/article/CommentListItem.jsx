import { deleteComment } from "../../utils/http/nc-api";
import { timeStamp2Date } from "../../utils/time-utils";

const CommentListItem = ({
  comment,
  currentUser,
  setArticleComments,
  setDisplayedArticle,
}) => {
  return (
    <>
      <h6>{comment.author}</h6>
      <p>
        <span>Created: {timeStamp2Date(comment.created_at)} </span>
        <span>Votes: {comment.votes} </span>
      </p>
      <p>{comment.body}</p>
      {currentUser.username === comment.author && (
        <button
          onClick={() => {
            const shouldDelete = window.confirm(
              "Are you sure you want to delete the comment?"
            );
            if (shouldDelete) {
              const comment_id = comment.comment_id;
              console.log(comment_id);
              deleteComment(comment_id)
                .then(() => {
                  setArticleComments((curComments) => {
                    const newCommentsList = curComments.filter(
                      (comment) => comment.comment_id !== comment_id
                    );
                    setDisplayedArticle((curArticle) => {
                      return {
                        ...curArticle,
                        comment_count: newCommentsList.length,
                      };
                    });
                    return newCommentsList;
                  });
                })
                .catch((error) => {
                  window.alert(
                    "Something went wrong. Please check your internet connection and try again!"
                  );
                });
            }
          }}
        >
          Delete
        </button>
      )}
    </>
  );
};

export default CommentListItem;
