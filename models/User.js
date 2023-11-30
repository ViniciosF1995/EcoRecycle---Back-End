import Sequelize from "sequelize";
import Connection from "../database.js"
import Condominio from "./Condominio.js";

const User = Connection.define(

    'user',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,

        },
        unidade: {
            type: Sequelize.STRING,
            allowNull: false,
    
        },
        idCondominio: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'condominios',
                key: 'id'
            }
        },
    });

User.belongsTo(Condominio, {
    foreignKey: 'idCondominio'
});

export default User; 