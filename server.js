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

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const userRouter = require('./routes/userRoutes')
const genRouter = require('./routes/genRoutes')
const magicItemsRouter = require('./routes/magicItemsRoutes')
const spellsRouter = require('./routes/spellsRoutes')

app.use('/gen', genRouter)
app.use('/user', userRouter)
app.use('/magicItem', magicItemsRouter)
app.use('/spells', spellsRouter)