const PORT = 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
// testing git
const app = express()

app.get('/', (req , res)=>{
	res.json('Welcome to my Crypto News API.')
})

app.listen(PORT, () => console.log(`server running on PORT: ${PORT}`))
