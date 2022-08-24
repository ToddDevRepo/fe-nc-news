import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  changeArticleVoteAtServerBy,
  getAllComments,
  getArticleById,
} from "../../utils/http/nc-api";
import { timeStamp2Date } from "../../utils/time-utils";
import IsLoading from "../IsLoading";
import CommentsList from "./CommentsList";

const ArticleView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  const [displayedArticle, setDisplayedArticle] = useState({});
  const [showComments, setShowComments] = useState(false);
  const [articleVotes, setArticleVotes] = useState(0);
  useEffect(() => {
    getArticleById(article_id).then(({ article }) => {
      setDisplayedArticle((curArticle) => {
        setIsLoading(false);
        return article;
      });
    });
  }, []);

  const updateVoteBy = (num) => {
    setArticleVotes((curVotes) => {
      return curVotes + num;
    });
    changeArticleVoteAtServerBy(num, article_id)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        setArticleVotes((curVotes) => {
          return curVotes - num;
        });
      });
  };

  return (
    <>
      <section className="section__article-view">
        {isLoading ? (
          <IsLoading />
        ) : (
          <>
            <h3>{displayedArticle.title}</h3>
            <p>
              <span>Created by: {displayedArticle.author}</span>
              <span> at: {timeStamp2Date(displayedArticle.created_at)}</span>
            </p>
            <p>#{displayedArticle.topic}</p>
            <p>{displayedArticle.body}</p>
            <p>
              <button
                onClick={() => {
                  setShowComments(!showComments);
                }}
              >
                Comments: {displayedArticle.comment_count}
              </button>
              <button
                id="button__up-vote-article"
                aria-label="up vote article"
                onClick={() => {
                  updateVoteBy(1);
                }}
              >
                &#708;
              </button>
              <span> Votes: {displayedArticle.votes + articleVotes}</span>
              <button
                id="button__dn-vote-article"
                aria-label="down vote article"
                onClick={(result) => {
                  updateVoteBy(-1);
                }}
              >
                &#709;
              </button>
            </p>
          </>
        )}
      </section>
      {showComments && <CommentsList article_id={article_id} />}
    </>
  );
};

export default ArticleView;
