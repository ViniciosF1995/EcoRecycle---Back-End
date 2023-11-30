import Sequelize from "sequelize";

const Connection = new Sequelize(
    'ecoCond',
    'ecocond',
    '123',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

export default Connection;