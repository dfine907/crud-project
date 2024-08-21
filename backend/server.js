const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const port = 8080
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(
  'mongodb+srv://dinafine121:xUhIu2pdGI4DYlwT@cluster0.zlyemip.mongodb.net/'
)

app.get('/', async (req, res) => {
  try {
    const users = await UserModel.find({})
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.get('/getUser/:id', async (req, res) => {
  const id = req.params.id
  try {
    const user = await UserModel.findById(id)
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.post('/createUser', async (req, res) => {
  try {
    const user = await UserModel.create(req.body)
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.put('/updateUser/:id', async (req, res) => {
  const id = req.params.id
  try {
    const user = await UserModel.findByIdAndUpdate(
      id,
      {
        company: req.body.company,
        website: req.body.website,
        contact: req.body.contact,
      },
      { new: true }
    )
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})



app.delete('/deleteUser/:id', async (req, res) => {
  try {
    const id = req.params.id
    const user = await UserModel.findByIdAndDelete(id)

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.json({ message: 'User deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
