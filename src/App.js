import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/home/Home";
import { InternalEndpoints } from "./Globals";
import ArticleView from "./components/article/ArticleView";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path={InternalEndpoints.HOME_END} element={<Home />} />
          <Route
            path={InternalEndpoints.ARTICLES_BY_ID_END}
            element={<ArticleView />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
