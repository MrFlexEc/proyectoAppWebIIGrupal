//importar el modulo de sequelize
import Sequelize from 'sequelize';

//realizar la conexión
export const sequelize = new Sequelize(
"encuentros_deportivos",
"postgres",
"contra",
{
    host: 'localhost',
    dialect: 'postgres'
})