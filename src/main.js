const express = require('express')
const morgan = require('morgan')
const path = require('path');

const handlebars = require('express-handlebars')

const app = express()
const port = 3000

app.use(morgan('combined'))

app.engine('.hbs', handlebars.engine({
  extname: '.hbs',
}));

app.set("view engine", '.hbs');

app.set('views', path.join(__dirname, 'resources\\views'));
console.log('dirname: ',__dirname);

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on localhost: ${port}`)
})