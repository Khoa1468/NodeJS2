const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

app.use(morgan('combined'))

app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'resources\\views'))

console.log(`PATH: ${path.join(__dirname, 'resources\\views')}`)

app.get('/', (req, res) => {
  res.render('home')
})
app.get('/trang-chu', (req, res) => {
    res.render('moi')
})
app.get('/tin-tuc', (req, res) => {
    res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})