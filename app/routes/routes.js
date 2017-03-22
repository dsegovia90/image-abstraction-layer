var imageSearch = require('node-google-image-search')

var latestSearches = []

module.exports = function(app){

	app.get('/api/imagesearch/:searchQuery?', function(req, res){
		imageSearch(req.params.searchQuery, function(results){
			latestSearches.push({
					term: req.params.searchQuery,
					when: new Date()
				})
			if(latestSearches.length > 10){
				latestSearches.splice(0,1)
			}
			res.end(JSON.stringify(results))
		}, (req.query.offset ? req.query.offset : 0), 10)
	})

	app.get('/api/latest/imagesearch', function(req, res){
		res.end(JSON.stringify(latestSearches))
	})

}