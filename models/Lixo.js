import Sequelize from "sequelize";
import Connection from "../database.js"
import User from "./User.js";


const Lixo = Connection.define(

    'lixo',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        metal: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false,
        },
        plastico: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false,

        },
        papel: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false,

        },
        organico: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false,

        },
        vidro: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false,

        },
        eletronico: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false,

        },
        total_lixo: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false,

        },
        data: {
            type: Sequelize.DATE
        },
        idUser:{        
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'

            }
        },
    });

Lixo.belongsTo(User, {
    foreignKey: 'idUser'
});
export default Lixo; 