import { useEffect, useState } from "react";
import { DefaultTopics } from "../../Globals";
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

  return (
    <section id="section__articles-list">
      <ul className="list__undecorated">
        {newsArticles.map((article) => {
          return (
            <li key={article.article_id} className="list__article-item">
              <ArticlesListItem article={article} />;
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ArticlesList;
