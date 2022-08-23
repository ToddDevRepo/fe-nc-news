import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DefaultTopics, InternalEndpoints } from "../../Globals";
import {
  getAllArticles,
  getArticlesFilteredByTopic,
} from "../../utils/http/nc-api";
import ArticlesListItem from "./ArticlesListItem";

const ArticlesList = ({ selectedTopic }) => {
  const [newsArticles, setNewsArticles] = useState([]);
  useEffect(() => {
    const getArticlePromise =
      selectedTopic === DefaultTopics.TOPICS_ALL
        ? getAllArticles()
        : getArticlesFilteredByTopic(selectedTopic.slug);
    getArticlePromise.then(({ articles }) => {
      setNewsArticles(articles);
    });
  }, [selectedTopic]);
  const nav = useNavigate();

  return (
    <section id="section__articles-list">
      <ul className="list__undecorated">
        {newsArticles.map((article) => {
          return (
            <li
              key={article.article_id}
              className="list__article-item"
              onClick={() => {
                nav(`${InternalEndpoints.ARTICLES_END}/${article.article_id}`);
              }}
            >
              <ArticlesListItem article={article} />;
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ArticlesList;
