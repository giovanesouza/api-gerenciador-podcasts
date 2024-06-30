# 🎙️ Gerenciador de PodCasts

## ℹ️ Descrição 

O Gerenciador de PodCasts é uma aplicação inspirada no estilo da Netflix, que permite centralizar diferentes episódios de podcasts separados por categoria. Este projeto visa facilitar o acesso e a organização de episódios de podcasts em formato de vídeo, proporcionando uma experiência de navegação intuitiva e agradável para os usuários.

## 🚀 Funcionalidades

- **Listar os episódios de podcasts em sessões de categorias:** Os episódios são organizados em categorias como saúde, bodybuilder, metodologia ágil, qa, programação e humor, permitindo aos usuários explorar facilmente os conteúdos disponíveis.
- **Filtrar episódios por nome de podcast:** Os usuários podem realizar buscas específicas por nome de podcast, facilitando o acesso aos episódios desejados.

## ✅ Implementação

### Mensagem de boas vindas

- **Endpoint:** `GET /`
- **Descrição:** Retorna mensagem de boas vindas.
- **Exemplo de resposta:**

```json
{
  "message": "Seja bem vindo(a) à API de Gerenciamento de PodCasts"
}
```

### Listar os episódios de podcasts em sessões de categorias

- **Endpoint:** `GET /api/list`
- **Descrição:** Retorna uma lista de episódios de podcasts organizados por categorias.
- **Exemplo de resposta:**

```json
[
    {
      "podcastName": "flow",
      "episode": "SCRUM MASTER - Flow #320",
      "videoId": "4KDGTdiOV4I",
      "categories": ["metodologia ágil", "programação"]
    },
    {
      "podcastName": "flow",
      "episode": "QUALIDADE DE SOFTWARE - flow #321",
      "videoId": "4KDGTdiOA4I",
      "categories": ["qa", "programação"]
    },
]
```

### Filtrar episódios por nome de podcast

- **Endpoint:** `GET /api/podcasts?p={nome}`
- **Descrição:** Retorna uma lista de episódios de podcast com base no nome do podcast fornecido.
- **Exemplo de requisição:** `GET /api/podcasts?p=flow`

## 💻 Tecnologias Utilizadas

- **[TypeScript](https://www.typescriptlang.org/):** Linguagem de programação utilizada para o desenvolvimento do projeto.
- **[Tsup](https://github.com/egoist/tsup):** Ferramenta de construção e empacotamento para projetos TypeScript.
- **[Tsx](https://github.com/egoist/tsx):** Compilador TypeScript que suporta a construção de projetos.
- **[Node.js](https://nodejs.org/):** Ambiente de execução JavaScript que permite executar código JavaScript do lado do servidor.
- **[@types/node](https://www.npmjs.com/package/@types/node):** Pacote de definições de tipos para Node.js para auxiliar no desenvolvimento com TypeScript.

## 📝 Como Utilizar

1. Clone este repositório: `https://github.com/giovanesouza/api-gerenciador-podcasts.git`.
2. Instale as dependências usando `npm install`.
3. Inicie o servidor executando `npm run start:dev`.
4. Acesse os endpoints fornecidos para listar os episódios de podcasts ou filtrá-los por nome de podcast.
