const PORT = 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
// testing git
const app = express()

const news_sources = [
	{
		name: 'cointelegraph',
		address: 'https://cointelegraph.com/tags/bitcoin'
	},
	{
		name: 'todayonchain',
		address: 'https://www.todayonchain.com/news/'
	},
	{
		name: 'bitcoinmagazine',
		address: 'https://bitcoinmagazine.com/articles'
	},
	
]

const articles = []

news_sources.forEach(source => {
	axios.get(source.address)
		.then()
})
app.get('/', (req , res)=>{
	res.json('Welcome to my Crypto News API.')
})

app.get('/news', (req, res)=>{

	// axios.get('https://cointelegraph.com/tags/bitcoin')
	// 	.then((response)=>{
	// 		const html = response.data
	// 		const $ = cheerio.load(html)

	// 		$('a.post-card-inline__title-link', html).each((index, element)=>{
	// 			const title = $(element).find('span.post-card-inline__title').text()
	// 			const url = $(element).attr('href')
	// 			console.log($`scrapped title: ${toString(title)}`)
	// 			console.log($`scrapped URL: ${toString(url)}`)
	// 			articles.push({
	// 				title,
	// 				url,
	// 			})
	// 		})
	// 		res.json(articles)
	// 	}).catch((err) => console.log(err))
})

app.listen(PORT, () => console.log(`server running on PORT: ${PORT}`))
