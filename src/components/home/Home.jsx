import { useState } from "react";
import { DefaultArticleSorts, DefaultTopics } from "../../Globals";
import IsLoading from "../IsLoading";
import ArticlesList from "./ArticlesList";
import ArticleSorter from "./ArticleSorter";
import TopicSelector from "./TopicSelector";

const Home = () => {
  const [selectedTopic, setSelectedTopic] = useState([
    DefaultTopics.TOPICS_ALL,
  ]);
  const [selectedSort, setSelectedSort] = useState(
    DefaultArticleSorts.DATE_DESC
  );

  return (
    <>
      <TopicSelector
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
      />
      <ArticleSorter setSelectedSort={setSelectedSort} />
      <ArticlesList selectedTopic={selectedTopic} selectedSort={selectedSort} />
    </>
  );
};

export default Home;
