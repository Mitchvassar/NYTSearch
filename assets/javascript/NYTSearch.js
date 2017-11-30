	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
	  'api-key': "03868292f7fd411c9b96916dffdd013f"
	  });

	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
	  console.log(result);
	}).fail(function(err) {
	  throw err;
	});
	
	var searchTerm = $("#searchTerm").val()
	

$(document).ready(function(){
	$("#searchTerm").on("click", function(){
		console.log(searchTerm)
		});



});























