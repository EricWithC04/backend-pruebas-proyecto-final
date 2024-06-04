import { Sequelize } from "sequelize";
import env from '../environments/index.js'
const { DB } = env

const sequelize = new Sequelize(DB.NAME, DB.USER, DB.PASSWORD, {
    host: DB.HOST,
    port: DB.PORT,
    dialect: DB.DIALECT
})

export default sequelize