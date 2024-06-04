import Express from 'express'
import env from './src/environments/index.js'

const app = Express()

app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})

app.listen(env.PORT, () => {
    console.log(`Server listening on port ${env.PORT}`)
})