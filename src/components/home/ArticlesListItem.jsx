import { timeStamp2Date } from "../../utils/time-utils";

const ArticlesListItem = ({ article }) => {
  return (
    <li key={article.article_id} className="list__article-item">
      <h4>{article.title}</h4>
      <p>
        <span>by: {article.author}</span>
        <span>created: {timeStamp2Date(article.created_at)}</span>
      </p>
      <span>#{article.topic}</span>
    </li>
  );
};

export default ArticlesListItem;
