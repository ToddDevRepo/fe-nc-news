import React, { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { postNewCommentForArticle } from "../../utils/http/nc-api";
import TimedAlert from "../../utils/TimedAlert";

const PostComment = ({
  article_id,
  setArticleComments,
  setDisplayedArticle,
}) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [commentBody, setCommentBody] = useState("");

  const handlePostComment = (event) => {
    event.preventDefault();
    const alert = new TimedAlert(
      event.target.querySelector("#post-status-alert")
    );
    if (commentBody.length > 0) {
      postNewCommentForArticle(article_id, currentUser.username, commentBody)
        .then(({ comment }) => {
          setArticleComments((curComments) => {
            const newCommentsList = [...curComments, comment];
            alert.showAlert("The comment was successfully sent!", 5000);
            setDisplayedArticle((curArticle) => {
              return { ...curArticle, comment_count: newCommentsList.length };
            });
            return newCommentsList;
          });

          setCommentBody("");
        })
        .catch((error) => {
          alert.showAlert(
            "Something went wrong! The comment was not sent.",
            5000
          );
        });
    }
  };

  return (
    <section id="section__post-comment">
      <h3>Post your comment:</h3>
      <form id="form__post-comment" onSubmit={handlePostComment}>
        <p id="post-status-alert" role="alert">
          {" "}
        </p>
        <label htmlFor="textarea__post-comment">Body:</label>
        <textarea
          id="textarea__post-comment"
          name="comment-body"
          value={commentBody}
          rows="5"
          onChange={(event) => {
            setCommentBody(event.target.value);
          }}
        />
        <p
          id="textarea__post-comment-hint"
          className={commentBody.length === 0 ? "visible" : "hidden"}
        >
          (Body must not be empty)
        </p>
        <button type="submit" disabled={!commentBody}>
          Say it!
        </button>
      </form>
    </section>
  );
};

export default PostComment;
