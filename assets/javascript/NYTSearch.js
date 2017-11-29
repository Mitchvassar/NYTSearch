$( document ).ready( function (){

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
	  'api-key': "03868292f7fd411c9b96916dffdd013f"
	});
	//var searchTerm = ;
	//var recordNumber = ;
	//var startYear = ;
	//var endYear = ;
	//var searchButton = ;
	//var clearResults = ;


	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
	  console.log(result);
	}).fail(function(err) {
	  throw err;
	});=


	console.log(url)








































});

