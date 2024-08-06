const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = 8080;
const UserModel = require('./models/Users');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  'mongodb+srv://dinafine121:xUhIu2pdGI4DYlwT@cluster0.zlyemip.mongodb.net/',

);

app.post('/createUser', async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/', (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((error) => res.status(500).json({ error: error.message }));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
