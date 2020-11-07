// chemin de l'image url
var posterPaths = "http://image.tmdb.org/t/p/w500";
var backgroundPaths = "http://image.tmdb.org/t/p/w1000";

//url général pour film et série avec clé api
var urlFilm = "https://api.themoviedb.org/3/discover/movie?";
var urlSerie = "https://api.themoviedb.org/3/discover/tv?";

var api_key = "&api_key=a0a744b143e40d6baf5ebed15d300768";
selectionsfilm = "vote_count.gte=50&sort_by=vote_average.desc";
var suivant = 1;

function AfficherFilm(selectionsfilm) {
  // récup infos Json et boucle affichages

    // console.log(url + selectionsfilm + api_key + "&page=" + suivant);
    $.getJSON(urlFilm + selectionsfilm + api_key + "&page=" + suivant, function(data) {
        for (var i = 0; i < data.results.length; i++) {
            var id = data.results[i].id;
            var title = data.results[i].name;
            var overview = data.results[i].overview;
            var poster = posterPaths + data.results[i].poster_path;
         // affichage du résultat dans le carousel 
                $(".films").append("<div class='carousel-item'><div class='card card-body'><h2>"+ data.results[i].title + "</h2><center><img width='200' class='carousel_index' src='" + poster + "' alt='First slide'></center><a href='movie.php?id=" + data.results[i].id + "&type=movie' class='btn btn-secondary'>voir plus </a></div></div></div>");
                console.log(poster);

    

        }


    });
}

AfficherFilm();    


function AfficherSerie(selectionsfilm) {

  // récup infos Json et boucle affichages
    // console.log(url + selectionsfilm + api_key + "&page=" + suivant);
    $.getJSON(urlSerie + selectionsfilm + api_key + "&page=" + suivant, function(data) {
        for (var i = 0; i < data.results.length; i++) {
            var idSerie = data.results[i].id;
            var titleSerie = data.results[i].name;
            var overviewSerie = data.results[i].overview;
            var posterSerie = posterPaths + data.results[i].poster_path;
         //affichage du résultat dans le carousel
                $(".series").append("<div class='carousel-item serie'><div class='card card-body'><h2>"+ data.results[i].name + "</h2><center><img width='200' class='carousel_index' src='" + posterSerie + "' alt='First slide'></center><a href='movie.php?id=" + data.results[i].id + "&type=tv' class='btn btn-secondary'>voir plus </a></div></div></div>");
                console.log(posterSerie);

    

        }


    });
}

AfficherSerie();  


