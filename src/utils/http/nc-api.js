import axios from "axios";
import { Endpoints, Urls } from "../../Globals";

const ncRequester = axios.create({
  baseURL: Urls.NC_NEWS_URL,
});

const getByEndpoint = (endpoint, queryObj) => {
  if (queryObj) queryObj = { params: queryObj };
  return ncRequester.get(endpoint, queryObj).then(({ data }) => {
    return data;
  });
};

const patchByEndpoint = (endpoint, payload) => {
  return ncRequester.patch(endpoint, payload).then(({ data }) => {
    return data;
  });
};

export const getAllArticles = () => {
  return getByEndpoint(Endpoints.NC_NEWS_ARTICLES_END);
};

export const getArticlesFilteredByTopic = (topic) => {
  return getByEndpoint(Endpoints.NC_NEWS_ARTICLES_END, { topic: topic });
};

export const getArticleById = (id) => {
  return getByEndpoint(`${Endpoints.NC_NEWS_ARTICLES_END}/${id}`);
};

export const getAllTopics = () => {
  return getByEndpoint(Endpoints.NC_NEWS_TOPICS);
};

export const getAllComments = (id) => {
  return getByEndpoint(`${Endpoints.NC_NEWS_ARTICLES_END}/${id}/comments`);
};

const changeArticleVoteBy = (numOfVotes, article_id) => {
  const payload = { inc_votes: numOfVotes };
  return patchByEndpoint(
    `${Endpoints.NC_NEWS_ARTICLES_END}/${article_id}`,
    payload
  );
};

export const incrementArticleVotesByOne = (article_id) => {
  return changeArticleVoteBy(1, article_id);
};

export const decrementArticleVotesByOne = (article_id) => {
  return changeArticleVoteBy(-1, article_id);
};
