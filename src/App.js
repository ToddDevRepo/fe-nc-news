import "./App.css";
import Header from "./components/Header";
import ArticlesList from "./components/home/ArticlesList";
import TopicSelector from "./components/home/TopicSelector";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <TopicSelector />
        <ArticlesList />
      </main>
    </div>
  );
}

export default App;
