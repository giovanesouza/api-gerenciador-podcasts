import * as http from "http";

import {
  getListEpisodes,
  getFilterEpisodes,
} from "./controllers/podcasts-controller";

import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";
import { welcome } from "./controllers/welcome-controller";

// http.IncomingMessage = mensagens que estão chegando || response: http.ServerResponse = respostas do servidor
export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  const baseUrl = request.url?.split("?")[0];

  if (request.method === HttpMethod.GET && baseUrl === Routes.WELCOME) {
        await welcome(request, response);
  }

  if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(request, response);
  }

  if (request.method === HttpMethod.GET && baseUrl === Routes.ESPISODE) {
    await getFilterEpisodes(request, response);
  }
};