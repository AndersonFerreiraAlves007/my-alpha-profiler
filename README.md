
<h1 align="center">Trabalho em grupo do Alpha Edtech</h1>

<h2 align="center">Integrantes</h2>

---

- Anderson Ferreira Alves

    <a href="" target="_blank"><img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" target="_blank"></a>
    <a href="" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
 	  <a href="" target="_blank"><img src="https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white" target="_blank"></a>
    <a href="" target="_blank"><img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" target="_blank"></a>
    <a href = ""><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
    <a href="" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>

- Bruno



- Jaime



- João Lucas



- Wash

---
<h2 align="center">Desafio</h2>

---

Escopo

- Crie um novo projeto em react no github chamado my-alpha-profiler.
- A aplicação será de uma página só, e deverá conter o seguinte escopo:


- Banco de dados: PostgreSQL;
- Backend API: NodeJS (Express e livre escolha de libs e dependências);
- Frontend: ReactJS (projeto my-alpha-profiler).

---
<h2 align="center">Tecnologias utilizadas</h2>

---

<div style="display: inline_block"><br>
  <img align="center" alt="Rafa-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="Rafa-React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
  <img align="center" alt="Rafa-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
  <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
  <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
  <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
  <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
  <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
  <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
  <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" />
  <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
  <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original-wordmark.svg" />
</div>

<br/>

---
<h2 align="center">Especificações do frontend</h2>

---

- O front-end deve conter 4 páginas: signUp, signIn, home, editProfile;
- O front-end tem de ter um layout principal, que seja sempre exibido, e tenha as páginas a seguir como componentes internos para que exista um controle do que seja exibido a depender da autenticação.


- signIn:

  1. A página deve atender a validação do back-end;
  2. A página DEVE ser exibida caso o usuário não tenha sessão;
  3. A pagina deve conter um formulário com os inputs email e password;
  4. Um botão “Entrar” que deverá enviar os dados do formulário e validar o e-mail e senha fornecidos.
  5. Um botão “Criar conta” que deverá encaminhar o usuário para a página /signup
- signUp:
  1. O usuário PODE acessar esta página caso não possua sessão;
  2. Deve conter um formulário com os seguintes campos: Nome, password, Data de Nascimento, e-mail;
  3. Um botão escrito “Registrar” que enviará os dados do formulário para a sua API (os dados serão validados pela API, para em seguida registrar o usuário ou não.).
- home:
  1. Esta página deve ser exibida caso exista uma sessão de usuário (sessionId != undefined), e porventura consumir a API informando o id de sessão;
   2. A página deve exibir os dados NÃO SENSÍVEIS do usuário de forma elegante.
- editProfile:
  1. Uma página onde o usuário poderá editar os seus dados anteriormente registrados, e poderá realizar o upload de sua foto;
  2. No rodapé da página deve existir um botão chamado “Apagar minha conta”. Onde quando clicado, questionará o usuário se essa é a escolha de sua certeza.
  3. O arquivo da foto deve ter um limite de 2MB.

---
<h2 align="center">Especificações do backend</h2>

---

  Acesse o repositório do backend deste exercícios para mais detalhes:

[Lisnk do backend](https://github.com/AndersonFerreiraAlves007/my-alpha-backend)
