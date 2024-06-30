import { IncomingMessage, ServerResponse } from "http"; // importação do req e res
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { ContentType } from "../utils/content-type";

const defaultContent = { "Content-Type": ContentType.JSON };

export const getListEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse
  ) => {

    const content: PodcastTransferModel = await serviceListEpisodes();
  
    res.writeHead(content.statusCode, defaultContent); // cabeçalho da resposta
    res.write(JSON.stringify(content.body)); // conteúdo da resposta (converte a resposta para texto)
 
    res.end();
  };


  export const getFilterEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse
  ) => {
    const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);
  
    res.writeHead(content.statusCode, defaultContent);
    res.write(JSON.stringify(content.body));
  
    res.end();
  };