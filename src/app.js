import Express from 'express'
import exampleRouter from './routes/example.routes.js'
import userRouter from './routes/user.routes.js'

const app = Express()

app.use('/example', exampleRouter)
app.use('/user', userRouter)

export default app