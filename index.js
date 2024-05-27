import express from 'express'
import cors from "cors"
import bodyParser from "body-parser";

import LinkRouter from "./routers/LinkRouter.js";
import UserRouter from './routers/UserRouter.js';
import connectDB from './database.js';
import RedirectRouter from './routers/RedirectRouter.js';

connectDB()
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

app.use('/link', LinkRouter)
app.use('/user', UserRouter)
app.use('/', RedirectRouter)

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
