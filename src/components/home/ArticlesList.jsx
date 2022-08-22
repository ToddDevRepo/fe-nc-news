import { useEffect, useState } from "react";
import { DefaultTopics } from "../../Globals";
import { getAllArticles } from "../../utils/http/nc-api";
import ArticlesListItem from "./ArticlesListItem";

const ArticlesList = ({ selectedTopic }) => {
  const [newsArticles, setNewsArticles] = useState([]);
  useEffect(() => {
    const articlePromise = getAllArticles();
    articlePromise.then(({ articles }) => {
      setNewsArticles(articles);
    });
  }, []);

  return (
    <section id="section__articles-list">
      <ul className="list__undecorated">
        {newsArticles.map((article) => {
          return <ArticlesListItem article={article} />;
        })}
      </ul>
    </section>
  );
};

export default ArticlesList;
