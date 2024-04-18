const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
    console.log("this is under get")
  res.send('i am get ')
}).post('/', (req, res) => {
    res.send('i am post')
    console.log('this is under post')
  })   // combining called chaining process.
  
  app.put('/', (req, res) => {
    res.send('i am put')
    console.log('this is under post')
  })

  app.get('/index', (req, res) => {
    console.log("this is under index ")
    res.sendFile('template/index.html',{root:__dirname})  // this is used to serve html file.
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})