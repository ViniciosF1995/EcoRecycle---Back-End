import Lixo from "../models/Lixo.js";
import User from "../models/User.js";
import express from 'express';

const lixo = express.Router();

lixo.get("/find", async (req, res) => {
  const idUser = req.body.idUser;
  const lixos = await Lixo.findAll({
    where: {idUser: idUser},
    include:[{model: User}]
  });
  res.json(lixos);
});

lixo.post("/new", async (req, res) => {
  const { metal, plastico, papel, organico, vidro, eletronico, data, idUser } = req.body;
  const total_lixo = (parseFloat(metal) + parseFloat(plastico) + parseFloat(papel) + parseFloat(organico) + parseFloat(vidro) + parseFloat(eletronico)).toFixed(2)
  const newLixo = new Lixo({
    metal: metal,
    plastico: plastico,
    papel: papel,
    organico: organico,
    vidro: vidro,
    eletronico: eletronico,
    total_lixo: total_lixo,
    data: data,
    idUser: idUser
    
  });

  const saveLixo = async () => {
    const savedCondominio = await newLixo.save();
    res.json(savedCondominio);
  };

  saveLixo();
});




export default lixo;