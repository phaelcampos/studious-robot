![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)
Projeto desenvolvido para entrevista tecnica

# 🛠️ Abrir e rodar o projeto

**Após clonar o projeto, acesse a pasta onde o projeto foi clonado e siga as instruções a seguir**

**Insira os seguindes comandos para criar a docker com o banco de dados**

**docker run -p 3306:3306 --name desafiodb -e MYSQL_ROOT_PASSWORD=teste123 -e MYSQL_DATABASE=ONLINESTORE -d mysql**
**docker exec -i desafiodb mysql -uroot -pteste123 ONLINESTORE < script.sql**

**E para iniciar o projeto**
**npm start**
