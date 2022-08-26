import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Endpoints, InternalEndpoints } from "../../Globals";
import { getAllComments } from "../../utils/http/nc-api";
import PostComment from "./PostComment";
import IsLoading from "../IsLoading";
import CommentListItem from "./CommentListItem";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import GenericErrorPage from "../errors/GenericErrorPage";

const CommentsList = ({ article_id, setDisplayedArticle }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [articleComments, setArticleComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageError, setPageError] = useState(null);
  const [isPostingComment, setIsPostingComment] = useState(false);
  useEffect(() => {
    getAllComments(article_id)
      .then(({ comments }) => {
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
      })
      .catch((error) => {
        setPageError(error);
      });
  }, [article_id]);

  if (pageError) return <GenericErrorPage errorMessage={pageError.message} />;
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
          {isPostingComment && (
            <PostComment
              article_id={article_id}
              setArticleComments={setArticleComments}
              setDisplayedArticle={setDisplayedArticle}
            />
          )}
          <ul className="list__undecorated">
            {articleComments.map((comment) => {
              return (
                <li key={comment.comment_id}>
                  <CommentListItem
                    comment={comment}
                    currentUser={currentUser}
                    setArticleComments={setArticleComments}
                    setDisplayedArticle={setDisplayedArticle}
                  />
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
