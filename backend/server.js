const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const port = 8080
const UserModel =  require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://dinafine121:xUhIu2pdGI4DYlwT@cluster0.zlyemip.mongodb.net/')

app.post('/createUser', (req, res) => {
  UserModel.create(req.body)
  .then(users => res.json(users))
  .catch(error => res.json(error))
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})