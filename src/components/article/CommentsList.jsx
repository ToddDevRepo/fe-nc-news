import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Endpoints, InternalEndpoints } from "../../Globals";
import { getAllComments } from "../../utils/http/nc-api";
import PostComment from "../comment/PostComment";
import IsLoading from "../IsLoading";
import CommentListItem from "./CommentListItem";

const CommentsList = ({ article_id }) => {
  const [articleComments, setArticleComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPostingComment, setIsPostingComment] = useState(false);
  useEffect(() => {
    getAllComments(article_id).then(({ comments }) => {
      comments.sort((commentA, commentB) => {
        const diff =
          new Date(commentA.created_at).getTime() -
          new Date(commentB.created_at).getTime();
        return diff;
      });
      setArticleComments((curComments) => {
        setIsLoading(false);
        return comments;
      });
    });
  }, [article_id]);

  return (
    <section className="section__comments-list">
      {!isLoading ? (
        <>
          <h5>Comments:</h5>
          <button
            onClick={() => {
              setIsPostingComment((curIsPosting) => {
                return !curIsPosting;
              });
            }}
          >
            Add Comment
          </button>
          {isPostingComment && <PostComment article_id={article_id} />}
          <ul className="list__undecorated">
            {articleComments.map((comment) => {
              return (
                <li key={comment.comment_id}>
                  <CommentListItem comment={comment} />
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <IsLoading />
      )}
    </section>
  );
};

export default CommentsList;
