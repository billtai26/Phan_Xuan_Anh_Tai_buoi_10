import express from 'express'
import cors from 'cors'
import rootRouter from './src/routers/root.router.js'
import { appError } from './src/common/helpers/appError.helper.js'

const app = express()

app.use(express.json())

app.use(cors({ origin: '*' }))

app.use("/api", rootRouter)

app.use(appError)

const PORT = 3000 
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`)
})
