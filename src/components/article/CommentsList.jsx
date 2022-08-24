import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Endpoints, InternalEndpoints } from "../../Globals";
import { getAllComments } from "../../utils/http/nc-api";
import IsLoading from "../IsLoading";
import CommentListItem from "./CommentListItem";

const CommentsList = ({ article_id }) => {
  const [articleComments, setArticleComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getAllComments(article_id).then(({ comments }) => {
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
          <Link
            id="linkbut__add-comment"
            to={`${InternalEndpoints.ARTICLES_END}/${article_id}/comment`}
          >
            Add Comment
          </Link>
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
