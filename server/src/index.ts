import express, { Request, Response } from 'express'
import { router } from './routes/loginRoutes'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['ljsfdit'] }))
app.use(router)

app.listen(3000, () => {
    console.log('Listening on port 3000')
})


// app.get('/', (req: Request, res: Response) => {
//     res.send(`
//         <div>
//             <h1>Hi there!</h1>
//         </div>
//     `)
// })