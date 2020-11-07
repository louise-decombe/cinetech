
var posterPaths = "http://image.tmdb.org/t/p/w500/";
var backgroundPaths = "http://image.tmdb.org/t/p/w1000";


function DisplayFavSerie() {

    $.ajax({
        url: "traitement/traitement_afficher_fav_serie.php",
        //dataType: "json",
        success: function(data) {
            var film = JSON.parse(data);
            console.log(film);

            for (el = 0; el != film.length; el++) {

              // chemin de l'image url


                var api_key = "a0a744b143e40d6baf5ebed15d300768";
                var urlSerie = "https://api.themoviedb.org/3/tv/";
                var filmfav = film[el][2];
                var finalurlSerie = urlSerie + filmfav + "?api_key=" + api_key;
                //console.log(finalurlSerie);
               

                $.ajax({
                    url: finalurlSerie,
                    success: function(data) {
                      var poster = posterPaths + data.poster_path;

                      //console.log(poster);
                      //console.log(data.id);  
                      $(".favoris-serie").append("<div class='col-sm-2 movie t'> <div class='affichage'><img src=" + poster + "><p>"+ data.name +"</p><button class=' supprimer btn btn-danger' class='btn btn-warning' id='" + data.id + "' class='supprimer_fav'>X</button><a href='movie.php?id=" + data.id + "&type=tv'> voir plus </a></div></div>")
                    }

                });

            }
        }
    })

    $(document).on('click', '.supprimer', function(event) {

      //console.log('success')

      //console.log(event.target.id);

      supprimer_id = event.target.id;

      $.ajax({
          url: "traitement/traitement_supprimer_fav.php",
          method: "POST",
          data: {
              supprimer_id: supprimer_id,

          },

          success: function(data) {
              //console.log(data);
              alert('supprimé!');
              location.reload();  
          },
          error: function(data) {
              console.log(data)
          }
      })
  })

};


DisplayFavSerie();

function DisplayFavFilm() {

  $.ajax({
      url: "traitement/traitement_afficher_fav.php",
      //dataType: "json",
      success: function(data) {
          var film = JSON.parse(data);
          console.log(film);

          for (el = 0; el != film.length; el++) {

              var urlFilm = "https://api.themoviedb.org/3/movie/";
              var api_key = "a0a744b143e40d6baf5ebed15d300768";
              var filmfav = film[el][2];
              var finalurlFilm = urlFilm + filmfav + "?api_key=" + api_key;
              //console.log(finalurlSerie);

              $.ajax({
                url: finalurlFilm,
                success: function(data) {
                    var poster = posterPaths + data.poster_path;

                  //console.log(data.id);  
                  $(".favoris-film").append("<div class='col-sm-2 movie t'> <div class='affichage'><img src=" + poster + "><p>"+ data.title +"</p><button class=' supprimer btn btn-danger' class='btn btn-warning' id='" + data.id + "' class='supprimer_fav'>X</button><a href='movie.php?id=" + data.id + "&type=movie'> voir plus </a></div></div>")
                }

            });
          }
      }
  })

  $(document).on('click', '.supprimer', function(event) {

    //console.log('success')

    //console.log(event.target.id);

    supprimer_id = event.target.id;

    $.ajax({
        url: "traitement/traitement_supprimer_fav.php",
        method: "POST",
        data: {
            supprimer_id: supprimer_id,

        },

        success: function(data) {
            //console.log(data);
        },
        error: function(data) {
            console.log(data)
        }
    })


})


};

DisplayFavFilm();
