import express from 'express'
import routes from './routes'

const port = 3333
const app = express()

app.use(routes)

app.listen(port, () => {
    console.log(`API escutando na porta: ${port}`)
})