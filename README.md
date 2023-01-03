![Screenshot from 2023-01-03 06-55-45](https://user-images.githubusercontent.com/83517505/210335783-fa4ff03f-305d-487c-bf67-a816dec5220e.png)

<a name="readme-top"></a>



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1 align="center">Cash Force Test</h1>

  <p align="center">
    Repositório para o Teste Técnico
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabela de Conteúdos</summary>
  <ol>
    <li>
      <a href="#about-the-project">Sobre o Projeto</a>
      <ul>
        <li><a href="#built-with">Construído com</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Como Usar</a>
      <ul>
        <li><a href="#prerequisites">Pré Requisitos</a></li>
        <li><a href="#installation">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contato</a></li>
  </ol>
</details>



<!-- SOBRE O PROJETO -->
## Sobre o Projeto

Este é um teste técnico simples, mas que eu dei o meu melhor nele, espero que gostem.

Motivos para testar:
* Vai ser legal
* Apesar de simples foi dificíl fazer
* Você é muito legal

Nos encontramos por aí ainda.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Construído Com

Tecnologias usadas no projeto

* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
* ![Mocha](https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- COMO USAR -->
## Como Usar

Este é um passo a passo de como utilizar e testar o projeto.

### Pré Requisitos

This is an example of how to list things you need to use the software and how to install them.
* npm
* docker
* node js

### Configuração

1. Clone o Repositório
   ```sh
   git clone git@github.com:Rharan-Ru/cash-force-test.git
   ```
2. Configure o arquivo env ( Na pasta raiz ) ( Mude caso queira um ambiente personalizado )
   ```sh
   mv .env-example .env
   ```
3. Configure o arquivo env ( Dentro da pasta backend ) ( Mude caso queira um ambiente personalizado )
   ```sh
   cd src
   mv .env-example .env
   ```
4. Instale as dependências do projeto ( Dentro da pasta backend )
   ```sh
   npm install
   ```
5. Instale as dependências do projeto ( Dentro da pasta frontend )
   ```sh
   npm install
   ```
6. Suba a Aplicação em Docker ( Na pasta raiz )
   ```sh
   docker-compose up --build
   ```
7. Suba os migrates ( Dentro da pasta backend )
   ```sh
   npm run docker-migrate
   ```
8. Popule o banco de dados ( Dentro da pasta backend )
   ```sh
   npm run docker-seed
   ```

### Rodando Testes

1. Rode os testes de Integração ( Dentro da pasta backend )
   ```sh
   npm run test
   ```
### Vá até a aplicação

http://localhost:3000/



<p align="right">(<a href="#readme-top">back to top</a>)</p>
