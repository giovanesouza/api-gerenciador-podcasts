import * as http from "http"; // importa tudo do módulo http
import { app } from "./app";

const server = http.createServer(app); // Cria servidor: comunicação com request e response
const port = process.env.PORT; // Porta onde a aplicação vai rodar

server.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`)
})