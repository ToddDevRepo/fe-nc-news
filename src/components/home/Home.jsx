import { useState } from "react";
import { DefaultTopics } from "../../Globals";
import ArticlesList from "./ArticlesList";
import TopicSelector from "./TopicSelector";

const Home = () => {
  const [selectedTopic, setSelectedTopic] = useState([
    DefaultTopics.TOPICS_ALL,
  ]);

  return (
    <>
      <TopicSelector
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
      />
      <ArticlesList selectedTopic={selectedTopic} />
    </>
  );
};

export default Home;
