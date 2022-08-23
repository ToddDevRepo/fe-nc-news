import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ArticleView = () => {
  const { article_id } = useParams();
  useEffect(() => {}, []);

  return (
    <section className="section__article-view">
      Article id: {article_id}
    </section>
  );
};

export default ArticleView;
