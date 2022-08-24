import { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const PostComment = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const [commentBody, setCommentBody] = useState("");

  const handlePostComment = (event) => {
    event.preventDefault();
    console.log(commentBody);

    setCommentBody("");
  };

  return (
    <section id="section__post-comment">
      <h3>Post your comment:</h3>
      <form id="form__post-comment" onSubmit={handlePostComment}>
        <label for="textarea__post-comment">Body:</label>
        <textarea
          id="textarea__post-comment"
          name="body"
          value={commentBody}
          rows="5"
          onChange={(event) => {
            setCommentBody(event.target.value);
          }}
        />
        <p id="textarea__post-comment-hint">(Body must not be empty)</p>
        <button type="submit">Say it!</button>
      </form>
    </section>
  );
};

export default PostComment;
