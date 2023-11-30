import Sequelize from "sequelize";
import Connection from "../database.js";



const Condominio = Connection.define(

    'condominio',
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
        cnpj: {
            type: Sequelize.BIGINT,
            allowNull: false,
          
        },
        endereco: {
            type: Sequelize.STRING,
            allowNull: false,

        },
        cidade: {
            type: Sequelize.STRING,
            allowNull: false,

        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        }
    }
    );
    




export default Condominio; 