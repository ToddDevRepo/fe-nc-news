import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../utils/http/nc-api";
import { timeStamp2Date } from "../../utils/time-utils";

const ArticleView = () => {
  // article_id, topic, title, author, body,  created_at, comments_count, votes
  const { article_id } = useParams();
  const [displayedArticle, setDisplayedArticle] = useState({});
  useEffect(() => {
    getArticleById(article_id).then(({ article }) => {
      setDisplayedArticle(article);
    });
  }, []);

  return (
    <section className="section__article-view">
      <h3>{displayedArticle.title}</h3>
      <p>
        <span>Created by: {displayedArticle.author}</span>
        <span> at: {timeStamp2Date(displayedArticle.created_at)}</span>
      </p>
      <p>#{displayedArticle.topic}</p>
      <p>{displayedArticle.body}</p>
      <p>
        <span>Comments: {displayedArticle.comment_count}</span>
        <span> Votes: {displayedArticle.votes}</span>
      </p>
    </section>
  );
};

export default ArticleView;
