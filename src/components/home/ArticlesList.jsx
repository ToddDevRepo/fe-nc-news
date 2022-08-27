import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DefaultTopics, InternalEndpoints } from "../../Globals";
import {
  getAllArticles,
  getArticlesFilteredByTopic,
  getArticlesWithQuery,
} from "../../utils/http/nc-api";
import GenericErrorPage from "../errors/GenericErrorPage";
import IsLoading from "../IsLoading";
import ArticlesListItem from "./ArticlesListItem";

const ArticlesList = ({ selectedTopic, selectedSort }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pageError, setPageError] = useState(null);

  const [newsArticles, setNewsArticles] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const query = { ...selectedSort };
    if (selectedTopic !== DefaultTopics.TOPICS_ALL)
      query.topic = selectedTopic.slug;
    getArticlesWithQuery(query)
      .then(({ articles }) => {
        setNewsArticles(() => {
          setIsLoading(false);
          return articles;
        });
      })
      .catch((error) => {
        setPageError(error);
      });
  }, [selectedTopic, selectedSort]);
  const nav = useNavigate();

  if (pageError)
    return <GenericErrorPage errorMessage={pageError.response.data.msg} />;
  return (
    <section id="section__articles-list">
      {isLoading ? (
        <IsLoading />
      ) : (
        <ul className="list__undecorated">
          {newsArticles.map((article) => {
            return (
              <li
                key={article.article_id}
                className="list__article-item"
                onClick={() => {
                  nav(
                    `${InternalEndpoints.ARTICLES_END}/${article.article_id}`
                  );
                }}
              >
                <ArticlesListItem article={article} />;
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default ArticlesList;
