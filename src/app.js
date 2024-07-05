import Express from 'express'
import exampleRouter from './routes/example.routes.js'
import userRouter from './routes/user.routes.js'
import unitRouter from './routes/unit.routes.js'
import themeRouter from './routes/theme.routes.js'
import exerciseRouter from './routes/exercise.routes.js'
import observationRouter from './routes/observation.routes.js'
import progressRouter from './routes/progress.routes.js'
import unitProgressRouter from './routes/unit_progress.routes.js'
import themeProgressRouter from './routes/theme_progress.routes.js'
import exerciseProgressRouter from './routes/theme_progress.routes.js'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'

const app = Express()

app.use(cors())
app.use(morgan('dev'))
app.use(helmet())
app.use(Express.json())

app.use('/example', exampleRouter)
app.use('/user', userRouter)
app.use('/unit', unitRouter)
app.use('/theme', themeRouter)
app.use('/exercise', exerciseRouter)
app.use('/observation', observationRouter)
app.use('/progress', progressRouter)
app.use('/unit_progress', unitProgressRouter)
app.use('/theme_progress', themeProgressRouter)
app.use('/exercise_progress', exerciseProgressRouter)

export default app