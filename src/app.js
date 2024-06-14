import Express from 'express'
import exampleRouter from './routes/example.routes.js'
import userRouter from './routes/user.routes.js'
import unitRouter from './routes/unit.routes.js'
import themeRouter from './routes/theme.routes.js'
import exerciseRouter from './routes/exercise.routes.js'

const app = Express()

app.use('/example', exampleRouter)
app.use('/user', userRouter)
app.use('/unit', unitRouter)
app.use('/theme', themeRouter)
app.use('/exercise', exerciseRouter)

export default app