import sequelize from './src/config/db.js'
import initDataBase from './src/config/relations.js'

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    initDataBase()
})