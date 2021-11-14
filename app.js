const express = require('express')
const app = express()
app.set('json spaces', 2)
app.use(express.json())
const port = 3000 || process.env.PORT
const awayHomeRouter = require('./routes/awayhome')

app.get('/', (req, res) => {
  res.json({message: 'alive'})
})

app.use('/awayhome', awayHomeRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


