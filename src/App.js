import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/home/Home";
import { InternalEndpoints } from "./Globals";
import ArticleView from "./components/article/ArticleView";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import { useState } from "react";
import PostComment from "./components/comment/PostComment";

function App() {
  const [currentUser, setCurrentUser] = useState({
    username: "grumpy19",
    name: "Paul Grump",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013",
  });

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
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
    </CurrentUserContext.Provider>
  );
}

export default App;
