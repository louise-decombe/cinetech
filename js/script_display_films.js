
// ces variables vont me permettre de faire la pagination
var suivant = 1;
var suivantSerie = 1;

// chemin de l'image url
var posterPaths = "http://image.tmdb.org/t/p/w500";
var backgroundPaths = "http://image.tmdb.org/t/p/w1000";

//url général pour film et série avec clé api
var urlFilm = "https://api.themoviedb.org/3/discover/movie?";
var api_key = "&api_key=a0a744b143e40d6baf5ebed15d300768";

// fonction qui dit l'action en fonction de la sélection du genre de film
function ClasserFilm(selectionsfilm) {
  suivant=0;

  //classe les films en fonction de leur note (basé sur la moyenne de note sur l'api)
  $(".movie").remove();
  if (selectionsfilm === "note") {
    selections="vote_count.gte=50&sort_by=vote_average.desc";
    AfficherFilm("vote_count.gte=50&sort_by=vote_average.desc");
  } 
  // Classer par genre les films en fonction de l'id du genre
  else if (selectionsfilm === "action") {
    selections="&with_genres=28";
    AfficherFilm("&with_genres=28");
  } else if (selectionsfilm === "adventure") {
    selections="&with_genres=12";
    AfficherFilm("&with_genres=12");
  } else if (selectionsfilm === "animation") {
    selections="&with_genres=16";
    AfficherFilm("&with_genres=16");
  } else if (selectionsfilm === "comedy") {
    selections="&with_genres=35";
    AfficherFilm("&with_genres=35");
  } else if (selectionsfilm === "crime") {
    selections="&with_genres=80";
    AfficherFilm("&with_genres=80");
  } else if (selectionsfilm === "documentary") {
    selections="&with_genres=99";
    AfficherFilm("&with_genres=99");
  } else if (selectionsfilm === "family") {
    selections="&with_genres=10751";
    AfficherFilm("&with_genres=10751");
  } else if (selectionsfilm === "fantasy") {
    selections="&with_genres=14";
    AfficherFilm("&with_genres=14");
  }  else if (selectionsfilm === "history") {
    selections="&with_genres=36";
    AfficherFilm("&with_genres=36");
  } else if (selectionsfilm === "horror") {
    selections="&with_genres=27";
    AfficherFilm("&with_genres=27");
  } else if (selectionsfilm === "music") {
    selections="&with_genres=10402";
    AfficherFilm("&with_genres=10402");
  }  else if (selectionsfilm === "romance") {
    selections="&with_genres=10749";
    AfficherFilm("&with_genres=10749");
  } else if (selectionsfilm === "science fiction") {
    selections="&with_genres=878";
    AfficherFilm("&with_genres=878");
  }  else if (selectionsfilm === "thriller") {
    selections="&with_genres=53";
    AfficherFilm("&with_genres=53");
  } else if (selectionsfilm === "guerre") {
    selections="&with_genres=10752";
    AfficherFilm("&with_genres=10752");
  } else if (selectionsfilm === "western") {
    selections="&with_genres=37";
    AfficherFilm("&with_genres=37");
  }
  //Si le choix est par popularité on retient popularity en desc
  else {
    selections="sort_by=popularity.desc";
    AfficherFilm("sort_by=popularity.desc");
  }
}

function AfficherFilm(selectionsfilm) {
  suivant++;
  // je récupère mes infos sous la forme d'une addition d'abord l'url de base, puis les films sélectionnées plus haut, la clé d'api, le num de page et le function(data)
  // propre à jquery
  $.getJSON(urlFilm + selectionsfilm + api_key + "&page=" + suivant, function(data) {

    // j'affiche dans une boucle for mes résultats d'affichage
    for (var i = 0; i < data.results.length; i++) {
      var id = data.results[i].id;
      var poster = posterPaths + data.results[i].poster_path;

      // j'ai gardé le titre et le résumé même si je l'ai pas affiché au cas où
      var overview = data.results[i].overview;
      var title = data.results[i].title;

      //si l'image est nulle on affiche un placeholdit
      if (poster === "http://image.tmdb.org/t/p/w500null") {
        poster = "https://place-hold.it/300x400";
      }
      
      // si image ok on passe à l'affichage avec un append.
      else {

        $(".connect").append("<div class='col-sm-2 movie t" + i + "' id='" + id + "'>  <div class='affichage'> <img src=" + poster + "><button class='film btn btn-warning' id='" + data.results[i].id + "'>Favoris</button><a href='movie.php?id=" + data.results[i].id + "&type=movie'>voir plus </a></div>");
        $(".notconnect").append("<div class='col-sm-2 movie t" + i + "' id='" + id + "'> <div class='affichage'> <img src=" + poster + "><a href='movie.php?id=" + data.results[i].id + "&type=movie'>voir plus </a></div>");

        console.log(poster);
        //console.log(data.results[i].id);

    }
    }
  });
}


function InfoSerie(id) {
  $(".movie").remove();
  $(".serie").hide();
  $(".moreSerie").hide();
  var infoURL = "https://api.themoviedb.org/3/tv/" + id + "?&api_key=a0a744b143e40d6baf5ebed15d300768";

}

$("#serie").click(function() {
  suivantserie = 0;

  // gestion de l'affichage
  ClasserSerie();
  $(".movies").remove();
  $(".overview").remove();
  $(".moreSerie").show();
  $(".more").hide();
  $(".dropserie").show();
  $(".dropmovies").hide();
});
$("#movie").click(function() {
	ClasserFilm();
  $(".serie").remove();
  $(".overview").remove();
  $(".more").show();
  $(".moreSerie").hide();
  $(".dropmovies").show();
  $(".dropserie").hide();
  suivant = 1;
});
$(".more").click(function() {
  AfficherFilm(selections);
});
$(".moreSerie").click(function() {
  AfficherSerie(selections);
});

ClasserFilm();

// AJAX //


$(document).ready(function() {

  $(document).on('click', '.film', function(event) {
    $(this).hide();

      console.log('success')

      console.log(event.target.id);

      id_film = event.target.id;

      $.ajax({
          url: "traitement/traitement_ajout_fav.php",
          method: "POST",
          data: {
              id_film: id_film,

          },

          success: function(data) {
            console.log(data);

            alert('ajouté aux favoris');
            $("this").attr("disabled", true);

        },
          error: function(data) {
              console.log(data)
          }
      })


  })




})