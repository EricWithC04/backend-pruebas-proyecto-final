import Express from 'express'
import exampleRouter from './routes/example.routes.js'

const app = Express()

app.use('/', exampleRouter)

export default app