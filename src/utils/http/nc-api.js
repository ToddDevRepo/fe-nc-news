import axios from "axios";
import { Endpoints, QueryKeys, Urls } from "../../Globals";
import { getAsJson } from "./http-requester";

const ncRequester = axios.create({
  baseURL: Urls.NC_NEWS_URL,
});

const getByEndpoint = (endpoint, queryObj) => {
  if (queryObj) queryObj = { params: queryObj };
  return ncRequester.get(endpoint, queryObj).then(({ data }) => {
    return data;
  });
};

export const getAllArticles = () => {
  return getByEndpoint(Endpoints.NC_NEWS_ARTICLES_END);
};

export const getArticlesFilteredByTopic = (topic) => {
  return getByEndpoint(Endpoints.NC_NEWS_ARTICLES_END, { topic: topic });
};

export const getAllTopics = () => {
  return getByEndpoint(Endpoints.NC_NEWS_TOPICS);
};
