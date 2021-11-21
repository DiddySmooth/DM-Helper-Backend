const express = require('express')
const app = express()
const http = require('http')

app.use(require('morgan')('tiny'))
const routesReport = require('rowdy-logger').begin(app)

const server = http.createServer(app, {
    cors:{
      origin: "*",
      credentials: true,
      methods: ["GET", "POST"]
    }
})

require('dotenv').config()
app.use(express.json())
app.use(require('cors')())




const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
  routesReport.print()
})

const userRouter = require('./routes/userRoutes')
const genRouter = require('./routes/genRoutes')
const magicItemsRouter = require('./routes/magicItemsRoutes')

app.use('/gen', genRouter)
app.use('/user', userRouter)
app.use('/magicItem', magicItemsRouter)