const PORT = 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')
// testing git
const app = express()

const news_sources = [
	{
		name: 'cointelegraph',
		address: 'https://cointelegraph.com/tags/bitcoin',
		base: 'https://cointelegraph.com/'
	},
	{
		name: 'todayonchain',
		address: 'https://www.todayonchain.com/news/',
		base: ''
	},
	{
		name: 'bitcoinmagazine',
		address: 'https://bitcoinmagazine.com/articles',
		base:'https://bitcoinmagazine.com/articles'
	},
	
]

const articles = []

news_sources.forEach(source => {
	axios.get(source.address)
		.then(response =>{
			const html = response.data
			const $ = cheerio.load(html)

			$('a:contains("coin")', html).each((index, element)=>{
				const title = $(element).text()
				const url = $(element).attr('href')

				articles.push({
					title,
					url: source.base + url,
					source: source.name,
				})
			})
		})
})
app.get('/', (req , res)=>{
	res.json('Welcome to my Crypto News API.')
})

app.get('/news', (req, res)=>{
	res.json(articles)
})

app.listen(PORT, () => console.log(`server running on PORT: ${PORT}`))
