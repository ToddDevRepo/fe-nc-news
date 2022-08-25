export class Urls {
  static NC_NEWS_URL = "https://nc-news-api-live.herokuapp.com";
}

export class Endpoints {
  static NC_NEWS_API_END = "/api";
  static NC_NEWS_ARTICLES_END = `${Endpoints.NC_NEWS_API_END}/articles`;
  static NC_NEWS_TOPICS = `${Endpoints.NC_NEWS_API_END}/topics`;

  static makeCommentsEndpoint(articleId) {
    return `${Endpoints.NC_NEWS_ARTICLES_END}/${articleId}/comments`;
  }
}

export class InternalEndpoints {
  static HOME_END = "/";
  static ARTICLES_END = `${InternalEndpoints.HOME_END}articles`;
  static ARTICLES_BY_ID_END = `${InternalEndpoints.ARTICLES_END}/:article_id`;
  static COMMENT_ON_ARTICLE_END = `${InternalEndpoints.ARTICLES_END}/:article_id/comment`;
}

export class DefaultTopics {
  static TOPICS_ALL = {
    slug: "All Topics",
    description: "Viewing all articles.",
  };
}

export class DefaultArticleSorts {
  static DATE_DESC = { order: "date", sort_by: "desc" };
}

export class VoteConfig {
  static ARTICLE_VOTE_INC = 1;
  static ARTICLE_VOTE_DEC = -1;
}
