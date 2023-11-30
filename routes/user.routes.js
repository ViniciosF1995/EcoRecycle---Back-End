import User from "../models/User.js";
import express from 'express';

const user = express.Router();

user.get("/find", async (req, res) => {

  const query = req.query.nome;

  const filtro = query ? { name: query } : {};

  const users = await User.findAll({
    where: filtro,
    // name: 'vinicios',

  });
  res.json(users);
});

user.post("/new", async (req, res) => {
  const { nome, email, password, unidade, idCondominio} = req.body;

  const newUser = new User({
    nome: nome,
    email: email,
    password: password,
    unidade: unidade,
    idCondominio: idCondominio
  });

  const saveUser = async () => {
    const savedUser = await newUser.save();
    res.json(savedUser);
  };

  saveUser();
});


export default user;
