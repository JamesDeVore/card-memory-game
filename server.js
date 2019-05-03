//the whole reason I need to make this server is to make api requests thanks to cors

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cards = require('./routes/api/cards')

const app = express()

app.use(cors())

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

//routes

app.use('/api/cards', cards)

app.use(bodyParser.json())

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on ${port}!`));
