# rest-api
Sistema completo Rest Api  com nodeJS

<h3 align="center">
  SQL no Node.js com Sequelize
</h3>

## Pacotes:
Express, 

## Pré-requisitos
- [Insomnia](https://insomnia.rest/download/)
- [Node.js](https://nodejs.org/en/)

## Instalação e execução
1. Faça um clone desse repositório;
2. Entre na pasta `rest-api`;
3. Rode `npm i` para instalar as dependências;
4. Altere as credencias de acesso ao RGBD Mysql dentro de `/src/config/database.js`;
5. Rode `npm run dev` para iniciar o servidor node.

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


