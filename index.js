import express from 'express';
import Connection from './database.js';
import cors from "cors";
import bodyParser from "body-parser";
import condominio from "./routes/condominio.routes.js";
import user from "./routes/user.routes.js";
import lixo from "./routes/lixo.routes.js";

const server = express();
server.listen(3000, console.log('Servidor rodando na porta 3000...'));

try {
    await Connection.authenticate();
    console.log('Conectado ao Banco de Dados com sucesso!')
} catch (error) {

    console.error(error)

}

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use('/condominio', condominio)
server.use('/user', user)
server.use('/lixo', lixo)


server.get("/", (req, res) => {
  res.send("A Rota / está funcionando!");
});