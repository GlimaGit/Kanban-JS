# Kanban-JS

Projeto com o objetivo de aplicar conhecimentos de JavaScript puro

## Requisitos

- em html, css e javascript (puro)
- utilizando webpack
- seguindo esquema de branches
- considerar uso do fake-server

## Conceitos a estudar

- DOM
- estilização em css puro
- html semântico
- local storage
- fetch/ajax
- strict mode
- prototype

## Telas

- Inicial (1) / @frvs apigithub.com/users/frvs  
  -- Quero digitar um usuário do Github para carregá-lo  
  -- como perfil na tela de quadros

- Quadros (2) /quadros  
  -- Mostra as informações pessoais do usuário  
  -- lista os quadros kanban disponíveis  
  -- possibilita criar, editar e excluir quadros

- Quadro (3) /quadros/1  
  -- Permite adicionar tarefas, adicionar colunas,  
  -- marcar tarefas como done/undone editar e  
  -- mover tarefas entre colunas

## Histórias

### Tela 1

- COMO usuário
  GOSTARIA DE inserir meu usuário no Github
  PARA carregar minhas informações pessoais

- COMO usuário
  GOSTARIA DE ter meu 'login' persistido
  PARA poder recarregar a página e não precisar inserir @ novamente

# Melhorias

- COMO usuário
  GOSTARIA DE ser informado que não tenho que preencher o @ do input
  PARA não causar confusão de digitar user com ou sem @

### Tela 2

- COMO usuário
  GOSTARIA DE criar novos boards kanban
  PARA organizar minhas tarefas

- COMO usuário
  GOSTARIA DE entrar em boards kanban
  PARA gerenciar minhas tarefas

- COMO usuário
  GOSTARIA DE deletar um board kanban
  PARA apagar o que não é necessário mais

### Tela 3

- COMO usuário
  GOSTARIA DE criar colunas no quadro
  PARA separar tarefas por status

- COMO usuário
  GOSTARIA DE criar tarefas no quadro
  PARA trackear minhas atividades

- COMO usuário
  GOSTARIA DE mover tarefas entre colunas do quadro
  PARA gerenciar o status das tarefas

- COMO usuário
  GOSTARIA DE marcar tarefas como pronto
  PARA que elas saiam do quadro

## Protótipos

- Tela 1
  ![image](https://user-images.githubusercontent.com/38838958/128950489-beb8749b-452e-4a20-9b6d-41d924d1b8f0.png)

- Tela 2
  ![image](https://user-images.githubusercontent.com/38838958/128950927-bdddc133-7191-462f-8d9f-eccfa34eb426.png)

- Tela 3
  ![image](https://user-images.githubusercontent.com/38838958/128951216-8ef53f38-2bba-4189-b32b-36ea66243244.png)

## Modelos

```typescript
type Board = {
  id: number;
  title: string;
  profileId: number;
};

type Column = {
  id: number;
  name: string;
  order: number;
  boardId: number;
};

type Task = {
  id: number;
  title: string;
  done: boolean;
  columnId: number;
};

type Profile = {
  id: number;
  name: string;
  user: string;
  location: string;
  email: string;
  twitter?: string;
};
```
