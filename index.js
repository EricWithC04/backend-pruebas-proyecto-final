import Express from 'express'

const app = Express()

app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})