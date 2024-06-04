import Express from 'express'
import env from './src/environments/index.js'
import sequelize from './src/config/db.js'

const app = Express()

app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    app.listen(env.PORT, () => {
        console.log(`Server listening on port ${env.PORT}`)
    })
})