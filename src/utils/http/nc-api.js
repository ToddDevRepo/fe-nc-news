import { Endpoints, Urls } from "../../Globals";
import { getAsJson } from "./http-requester";

const getByEndpoint = (endpoint) => {
  return getAsJson(`${Urls.NC_NEWS_URL}${endpoint}`);
};

export const getAllArticles = () => {
  return getByEndpoint(Endpoints.NC_NEWS_ARTICLES_END);
};
