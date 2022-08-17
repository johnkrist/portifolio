import pokedex from "./img/pokedex.png";
import technoobs from "./img/technoobs.png";
import space from "./img/spacelixo.png"
import kenziefruit from "./img/kenziefruit.png"
import formulario from "./img/formulario.png"
import burguer from "./img/burguer.png"
import hub from "./img/hub.png"
export const projetos = [
  {
    title: "Pokedex",
    image: pokedex,
    url: "https://pokedex-omega-blue.vercel.app/",
    descricao:
      "Criado em mobile first, com consumo de API utilizado axios. Foi feita rederização condicional. Usado props no styled-components para dinâmica das cores dos cards de acordo com o tipo de pokemon. Tecnologias: React.js, styled-components, javascript, axios API, vercel, Git, GitHub etc.",
  },
  {
    title: "TechNoobs",
    image: technoobs,
    url: "https://technoobs-phi.vercel.app/",
    descricao:
      "Uma plataforma gameficada de freelancers, onde a ideia principal seria conectar empresas a iniciantes sem experiência. Aplicação Toda componentizada, foi utilizado sistema de rotas , validações de formulários, dois cadastros, dois logins e duas dashboards. Rederização condicional. Tambem Foi usado o JSON server para deixar com os cadastros e logins funcionais. Tecnologias: React.js, Styled-components, designer no Figma, arquitetura no Miro, organização no Trello, Git, Github, deploy no heroku e vercel, etc",
  },
  {
    title: "SpaceLixo",
    image: space,
    url: "https://johnkrist.github.io/Jogo-Space-Lixo-/",
    descricao: "Jogo de tiro com sistema de colisão. Usei um layout de lixo urbano para fazer essa entrega para o curso da DIO. Tecnologias: Javascript, HTML, CSS e deploy no GitHub",
  },
  {
    title: "WebFruit",
    image: kenziefruit,
    url: "https://react-entrega-s3-kenzishop-com-context-api-johnkrist.vercel.app/",    
    descricao: "Uma frutaria online, esse foi o tema que usei para praticar Redux. Depois refatorrei para ContextApi para fixar bem os conceitos dessas duas ferramentas de gerenciamento de estado. Tecnologias: React.js, Redux-thunk, contextApi, Git, GitHub e deploy no Vercel",
  },
  {
    title: "Formulario de Cadastro",
    image: formulario,
    url: "https://react-entrega-s2-formulario-de-cadastro-johnkrist.vercel.app/",
    descricao: "Um formulario criado com inputs da biblioteca MaterialUI e validaçoes Yup em React.js",
  },
  {
    title: "Burguer",
    image: burguer,
    url: "https://react-entrega-s1-hamburgueria-da-kenzie-pi.vercel.app/",
    descricao: "Entrega do curso front-end da Kenzie Academy. Carrinho e input de pesquisa funcionais. Foi utilizado a biblioteca React.js e o consumo de uma API de produtos fornecida pelo curso. Designer copiado do Figma"
  },
  {
    title: "KenzieHub",
    image: hub,
    url: "https://react-entrega-s2-kenzie-hub-johnkrist.vercel.app/",
    descricao: "Entrega do curso front-end da Kenzie Academy. Um CRUD construido em react.js com a API disponibilizada pelo curso. Cadastro e login funcionais com validações da yup. Formularios construidos com react-hook-form. Rotas implementadas com router-dom. Tambem e possivel adicionar, editar, excluir informações do usuario e ver todos os usuarios cadastrados. Designer copiado do Figma"
  },
];
