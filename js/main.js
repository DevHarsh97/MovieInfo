$(document).ready(() => {


 	$('#search_form').on('submit', (event) => {
 		var search_text = $('#search_text').val();
 		getMovies(search_text);
 		event.preventDefault();   // event.preventDefault() method use to stop default action 
 	});


 	function getMovies(search_text)
 	{

		$.ajax("http://www.omdbapi.com/?s="+ search_text +"&apikey=dddc1ad").done(function (response) {
			var data = response['Search'];
												 	// console.log("Title: "+ data['Search'][0].Title);
												 	//$("#movies").text("Title: "+ data['Search'][0].Title);
		 	var output = '';
		 	$.each(data, function(key,value){
											 		// console.log("Title: "+value.Title);
											 		// $("#movies").text("Title: "+value.Title);
		 		output += `
		 				<div class="col-md-3 col-xs-12">
		 					<div class="well text-center">
			 					<a href="movie.html/?i=${value.imdbID}">
			 						<img src="${value.Poster}" class="movie">
			 					</a>
		 					<h5>${value.Title}</h5>
		 					</div>
		 				</div>
		 		`;

		 	});
		 	$('#movies').html(output);	 	
		});
	} 
});

