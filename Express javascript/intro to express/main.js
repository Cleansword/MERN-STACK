const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))  // it make the files public which is inside in the public folder

// app.get('/', (req, res) => {
//   res.send('Hello sagar ')
// })
// app.get('/home', (req, res) => {
//   res.send('homie ')
// })
// app.get('/contact', (req, res) => {
//   res.send('mobile number ')
// })
// app.get('/about', (req, res) => {
//   res.send('from landran , pursuing btech i information technolgy ')
// })


//slug is used as a variable.
app.get('/:slug', (req, res) => {
  res.send(`hello ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})