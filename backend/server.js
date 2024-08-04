const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const port = 8080

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://dinafine121:zZjeRPERZ1sDpGZ2@cluster0.fjt5ftx.mongodb.net/')



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})