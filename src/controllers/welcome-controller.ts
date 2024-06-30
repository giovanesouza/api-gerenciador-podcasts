import { IncomingMessage, ServerResponse } from "http"; // importação do req e res
import { ContentType } from "../utils/content-type";
const defaultContent = { "Content-Type": ContentType.JSON };

// contrato
interface Welcome {
  statusCode: number;
  body: object;
}

export const welcome = async (req: IncomingMessage, res: ServerResponse) => {
  const content: Welcome = { statusCode: 200, body: {message: "Seja bem vindo(a) à API de Gerenciamento de PodCasts"} };

  res.writeHead(content.statusCode, defaultContent); // cabeçalho da resposta
  res.write(JSON.stringify(content.body)); // conteúdo da resposta (converte a resposta para texto)

  res.end();
};
