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

const postByEndpoint = (endpoint, payload) => {
  return ncRequester.post(endpoint, payload).then(({ data }) => {
    return data;
  });
};

const deleteByEndpoint = (endpoint) => {
  return ncRequester.delete(endpoint).then(({ data }) => {
    return data;
  });
};

export const getArticlesWithQuery = (query) => {
  return getByEndpoint(Endpoints.NC_NEWS_ARTICLES_END, query);
};

export const getArticleById = (id) => {
  return getByEndpoint(`${Endpoints.NC_NEWS_ARTICLES_END}/${id}`);
};

export const getAllTopics = () => {
  return getByEndpoint(Endpoints.NC_NEWS_TOPICS);
};

export const getAllComments = (id) => {
  return getByEndpoint(Endpoints.makeArticleCommentsEndpoint(id));
};

export const changeArticleVoteAtServerBy = (numOfVotes, article_id) => {
  const payload = { inc_votes: numOfVotes };
  return patchByEndpoint(
    `${Endpoints.NC_NEWS_ARTICLES_END}/${article_id}`,
    payload
  );
};

export const postNewCommentForArticle = (article_id, username, comment) => {
  const commentData = { username: username, body: comment };
  return postByEndpoint(
    Endpoints.makeArticleCommentsEndpoint(article_id),
    commentData
  );
};

export const deleteComment = (comment_id) => {
  return deleteByEndpoint(`${Endpoints.NC_NEWS_COMMENTS}/${comment_id}`);
};
