export class Urls {
  static NC_NEWS_URL = "https://nc-news-api-live.herokuapp.com";
}

export class Endpoints {
  static NC_NEWS_API_END = "/api";
  static NC_NEWS_ARTICLES_END = `${Endpoints.NC_NEWS_API_END}/articles`;
  static NC_NEWS_TOPICS = `${Endpoints.NC_NEWS_API_END}/topics`;
}

export class InternalEndpoints {
  static HOME_END = "/";
  static ARTICLES_END = `${InternalEndpoints.HOME_END}articles`;
  static ARTICLES_BY_ID_END = `${InternalEndpoints.ARTICLES_END}/:article_id`;
}

export class DefaultTopics {
  static TOPICS_ALL = {
    slug: "All Topics",
    description: "Viewing all articles.",
  };
}

export class VoteConfig {
  static ARTICLE_VOTE_INC = 1;
  static ARTICLE_VOTE_DEC = -1;
}
