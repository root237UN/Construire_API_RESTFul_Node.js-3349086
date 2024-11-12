// console.log("Hello word");

const express = require('express')
const app = express()
const port = 3000
const data = require("./posts")

const PORT = process.env.PORT || 5000;

app.use(express.json());

let posts = [];

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.get('/posts', (req, res) => {
    const data_posts = [...posts,...data]
    res.send(data_posts)
  })

app.post('/posts/create', (req, res) => {
    const data_posts = [...posts,...data,...req.body]
    res.send("Nouveau post crée")
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})