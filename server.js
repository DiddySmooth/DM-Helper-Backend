const express = require('express')
const app = express()
const cors = require('cors')
app.use(require('morgan')('tiny'))
const routesReport = require('rowdy-logger').begin(app)
require('dotenv').config()
app.use(express.json())

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

app.use(cors(corsOptions))

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
  routesReport.print()
})


const userRouter = require('./routes/userRoutes')
const genRouter = require('./routes/genRoutes')
const magicItemsRouter = require('./routes/magicItemsRoutes')
const spellsRouter = require('./routes/spellsRoutes')

app.use('/gen', genRouter)
app.use('/user', userRouter)
app.use('/magicItem', magicItemsRouter)
app.use('/spells', spellsRouter) 