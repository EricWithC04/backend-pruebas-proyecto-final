import env from './src/environments/index.js'
import sequelize from './src/config/db.js'
import app from './src/app.js'

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    sequelize.sync({ alter: true }).then(() => {
        console.log('Tables created.');
        app.listen(env.PORT, () => {
            console.log(`Server listening on port ${env.PORT}`)
        })
    })
})