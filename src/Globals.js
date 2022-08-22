export class Urls {
  static NC_NEWS_URL = "https://nc-news-api-live.herokuapp.com";
}

export class Endpoints {
  static NC_NEWS_API_END = "/api";
  static NC_NEWS_ARTICLES_END = `${Endpoints.NC_NEWS_API_END}/articles`;
  static NC_NEWS_TOPICS = `${Endpoints.NC_NEWS_API_END}/topics`;
}

export class DefaultTopics {
  static TOPICS_ALL = {
    slug: "All Topics",
    description: "Show articles for all topics",
  };
}
