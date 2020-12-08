# rest-api
Sistema completo Rest Api  com nodeJS

<h3 align="center">
  SQL no Node.js com Sequelize
</h3>

## Pacotes:
express, morgan, body-parser, cors

## Pré-requisitos
- [Node.js](https://nodejs.org/en/)

Excelente app para testar nosssas rotas simulando um front end.
- [Insomnia](https://insomnia.rest/download/)

Pacote para executar o servidor Node e ficar escutando e atualizando as mudanças no servidor
- [Nodemon](https://www.npmjs.com/package/nodemon)

docker
- [Docker](https://www.docker.com/)

- Estou usando mariaDB a imagem pode ser pego em
- [DockerHub](https://hub.docker.com/search?q=mysql&type=image)

mysql workbench ferramenta para ver os dados no banco
- [Mysql Workbench](https://www.mysql.com/products/workbench/)



## Instalação e execução
1. Faça um clone desse repositório;
2. Entre na pasta `rest-api`;
3. Rode `npm i` para instalar as dependências;
4. Altere as credencias de acesso ao RGBD Mysql dentro de `/src/config/database.js`;
5. instale o nodemon via npm globalmente ``` npm i -g nodemon ```
6. Rode `npm run dev` para iniciar o servidor node.

## Trabalhando mariaDB
Para criar o container no docker usando mariaDB
1. no terminal ``` docker pull mariadb ```
2. digite ``` docker images ``` e veja se aparece a imagem mariadb
3. digite: ``` docker run -p 3333:3306 --name mysql-mariadb -e MYSQL_ROOT_PASSWORD=root -d mariadb ```
4. digite ``` docker ps ``` para ver o image criado com nome mariadb e a porta 3333

## Configurando o acesso ao banco pelo workbench
1. ao abrir click no sinal de +
2. em port coloque: 3333
3. username: root
4. passowrd: root
5. click em test connection

## AS urls usadas para o CRUD são:
1. Cursos: ``` http://localhost:400/cursos ``` GET, POST, PUT e DELETE
2. Turmas: ``` http://localhost:400/turmas ``` GET, POST, PUT e DELETE
3. Blocos: ``` http://localhost:400/cursos/:id/turma/:id/bloco ``` GET, POST, PUT e DELETE
4. Disciplina: ``` http://localhost:400/cursos/:id/turma/:id/bloco/:id/disciplina ``` GET, POST, PUT e DELETE


## Como contribuir
- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Wellingotn Pinho 👋 [Meu portfólio](https://wellpinho.com.br)


