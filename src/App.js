import "./App.css";
import Header from "./components/Header";
import ArticlesList from "./components/home/ArticlesList";
import TopicSelector from "./components/home/TopicSelector";

function App() {
  return (
    <div className="App">
      <Header />
      <TopicSelector />
      <ArticlesList />
    </div>
  );
}

export default App;
