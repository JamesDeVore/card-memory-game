const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

router.get('/new', async (req,res) => {
  try{
    let deckObject = await fetch("https://deckofcardsapi.com/api/deck/new/draw?count=52").then(response => response.json());
    res.send(deckObject)
  } catch(e) {
    res.send({error:e})
  }
})


module.exports = router