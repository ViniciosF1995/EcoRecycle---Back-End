import User from "../models/Condominio.js";
import express from 'express';

const condominio = express.Router();

condominio.get("/find", async (req, res) => {

  const query = req.query.nome;

  const filtro = query ? { nome: query } : {};

  const condominios = await User.findAll({
    where: filtro,
    // name: 'vinicios',

  });
  res.json(condominios);
});

condominio.post("/new", async (req, res) => {
  const { nome, cnpj, endereco, cidade, email } = req.body;

  const newCondominio = new User({
    nome: nome,
    cnpj: cnpj,
    endereco: endereco,
    cidade: cidade,
    email: email,
    
  });

  const saveCondominio = async () => {
    const savedCondominio = await newCondominio.save();
    res.json(savedCondominio);
  };

  saveCondominio();
});

export default condominio;
