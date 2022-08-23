import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../utils/http/nc-api";
import { timeStamp2Date } from "../../utils/time-utils";
import IsLoading from "../IsLoading";

const ArticleView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  const [displayedArticle, setDisplayedArticle] = useState({});
  useEffect(() => {
    getArticleById(article_id).then(({ article }) => {
      setDisplayedArticle((curArticle) => {
        setIsLoading(false);
        return article;
      });
    });
  }, []);

  return (
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
            <button onClick={() => {}}>
              Comments: {displayedArticle.comment_count}
            </button>
            <span> Votes: {displayedArticle.votes}</span>
          </p>
        </>
      )}
    </section>
  );
};

export default ArticleView;
