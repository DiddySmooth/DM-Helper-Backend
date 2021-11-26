const express = require('express')
const app = express()
const cors = require('cors')
app.use(require('morgan')('tiny'))
const routesReport = require('rowdy-logger').begin(app)

require('dotenv').config()
app.use(express.json())
app.use(cors())


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
  routesReport.print()
})

app.use(cors({
  origin: ['http://localhost:3000', 'https://dmhammer.herokuapp.com'],
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

//, 'https://dmhammer.herokuapp.com'

const userRouter = require('./routes/userRoutes')
const genRouter = require('./routes/genRoutes')
const magicItemsRouter = require('./routes/magicItemsRoutes')
const spellsRouter = require('./routes/spellsRoutes')

app.use('/gen', genRouter)
app.use('/user', userRouter)
app.use('/magicItem', magicItemsRouter)
app.use('/spells', spellsRouter)