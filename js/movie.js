$(document).ready(() => {

	var hash = window.location.href.slice(window.location.href.indexOf('?') + 1);
	var movie = hash.split('=');
	var movieid = movie[1];
	movieDetalis(movieid);

	function movieDetalis(movieid)
	{
		$.ajax("http://www.omdbapi.com/?i="+ movieid +"&apikey=dddc1ad").done(function(response){
			var data = response;
			
			var output = `
				<div class="row poster">
					<div class="col-md-6">
						<img src="${data.Poster}" class="thumbnail">
					</div>
					<div class="col-md-6">
						<h2>${data.Title}</h2>
						<ul class="list-group">
							<li class="list-group-item"><strong>Genre:</strong> ${data.Genre}</li>
							<li class="list-group-item"><strong>Released:</strong> ${data.Released}</li>
							<li class="list-group-item"><strong>Rated:</strong> ${data.Rated}</li>
							<li class="list-group-item"><strong>IMDB Rating:</strong> ${data.imdbRating}</li>
							<li class="list-group-item"><strong>Diroctor:</strong> ${data.Diroctor}</li>
							<li class="list-group-item"><strong>Writer:</strong> ${data.Writer}</li>
							<li class="list-group-item"><strong>Actors:</strong> ${data.Actors}</li>
						</ul>
					</div>
				</div>
				<div class="row poster container">
					<div class="well">
						<h3>Plot</h3>
						${data.Plot}
						<hr>
						<a href="http://imdb.com/title/${data.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
						<a href="../index.html" class="btn btn-default"> Go Back </a>
					</div>
				</div>
			`;
			$('#movieDetalis').html(output);
		});
		
	}

});