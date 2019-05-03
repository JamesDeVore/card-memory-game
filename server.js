//the whole reason I need to make this server is to make api requests thanks to cors

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cards = require('./routes/api/cards')
const path = require('path')
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


//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

//production mode
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  //
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'client/build/index.html'));
  })
}
//build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on ${port}!`));
