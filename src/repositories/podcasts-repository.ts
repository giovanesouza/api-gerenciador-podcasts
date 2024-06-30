import fs from "fs"; // Módulo para leitura e escrita de arquivos
import path from "path"; // lê diretórios

import { PodcastModel } from "../models/podcast-model";

// _dirname = pega o caminho do diretório dinamicamente (src) e junta com a string passada
const pathData = path.join(__dirname, "../repositories/podcasts.json"); // caminho do arquivo

// Função para retornar os dados
export const repositoryPodcast = async (
  podcastName?: string
): Promise<PodcastModel[]> => {
  const language = "utf-8";

  const rawData = fs.readFileSync(pathData, language); // lê arquivo no caminho e charset configurado
  let jsonFile = JSON.parse(rawData); // converte texto em JSON

  if (podcastName) {
    jsonFile = jsonFile.filter(
      (podcast: PodcastModel) => podcast.podcastName === podcastName
    );
  }

  return jsonFile; 
};