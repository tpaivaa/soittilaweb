const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.set('json spaces', 2)
app.use(express.json())
const port = 3000 || process.env.PORT
const awayHomeRouter = require('./routes/awayhome')

app.use(bodyParser.json())
app.use(express.static(__dirname + '/static'))


app.get('/status', (req, res) => {
  const node_env = process.env.NODE_ENV || 'Development'
  res.json({status: 'alive', running: node_env})
})

app.use('/awayhome', awayHomeRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


