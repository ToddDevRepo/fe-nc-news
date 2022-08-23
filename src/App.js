import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ArticlesList from "./components/home/ArticlesList";
import TopicSelector from "./components/home/TopicSelector";
import { DefaultTopics } from "./Globals";

function App() {
  const [selectedTopic, setSelectedTopic] = useState([
    DefaultTopics.TOPICS_ALL,
  ]);

  return (
    <div className="App">
      <Header />
      <main>
        <TopicSelector
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
        />
        <ArticlesList selectedTopic={selectedTopic} />
      </main>
    </div>
  );
}

export default App;
