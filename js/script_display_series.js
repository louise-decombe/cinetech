// ces variables vont me permettre de faire la pagination
var suivant = 1;
var suivantSerie = 1;

// chemin de l'image url
var posterPaths = "http://image.tmdb.org/t/p/w500";
var backgroundPaths = "http://image.tmdb.org/t/p/w1000";

//url général pour film et série avec clé api
var api_key = "&api_key=a0a744b143e40d6baf5ebed15d300768";
var urlSerie = "https://api.themoviedb.org/3/discover/tv?";



function ClasserSerie(selectionsfilm) {
    suivantserie = 0;

    $(".serie").remove();
    if (selectionsfilm === "note") {
        selections = "vote_count.gte=50&sort_by=vote_average.desc";
        AfficherSerie("vote_count.gte=50&sort_by=vote_average.desc");
    }
    // Classement par genre des séries (ce sont les mêmes id de genre)
    else if (selectionsfilm === "action") {
        selections = "&with_genres=28";
        AfficherSerie("&with_genres=28");
    } else if (selectionsfilm === "adventure") {
        selections = "&with_genres=12";
        AfficherSerie("&with_genres=12");
    } else if (selectionsfilm === "animation") {
        selections = "&with_genres=16";
        AfficherSerie("&with_genres=16");
    } else if (selectionsfilm === "comedy") {
        selections = "&with_genres=35";
        AfficherSerie("&with_genres=35");
    } else if (selectionsfilm === "crime") {
        selections = "&with_genres=80";
        AfficherSerie("&with_genres=80");
    } else if (selectionsfilm === "documentary") {
        selections = "&with_genres=99";
        AfficherSerie("&with_genres=99");
    } else if (selectionsfilm === "family") {
        selections = "&with_genres=10751";
        AfficherSerie("&with_genres=10751");
    } else if (selectionsfilm === "fantasy") {
        selections = "&with_genres=14";
        AfficherSerie("&with_genres=14");
    } else if (selectionsfilm === "history") {
        selections = "&with_genres=36";
        AfficherSerie("&with_genres=36");
    } else if (selectionsfilm === "horror") {
        selections = "&with_genres=27";
        AfficherSerie("&with_genres=27");
    } else if (selectionsfilm === "music") {
        selections = "&with_genres=10402";
        AfficherSerie("&with_genres=10402");
    } else if (selectionsfilm === "romance") {
        selections = "&with_genres=10749";
        AfficherSerie("&with_genres=10749");
    } else if (selectionsfilm === "science fiction") {
        selections = "&with_genres=878";
        AfficherSerie("&with_genres=878");
    } else if (selectionsfilm === "thriller") {
        selections = "&with_genres=53";
        AfficherSerie("&with_genres=53");
    } else if (selectionsfilm === "guerre") {
        selections = "&with_genres=10752";
        AfficherSerie("&with_genres=10752");
    } else if (selectionsfilm === "western") {
        selections = "&with_genres=37";
        AfficherSerie("&with_genres=37");
    }
    //classement par popularité
    else {
        selections = "sort_by=popularity.desc";
        AfficherSerie("sort_by=popularity.desc");
    }
}

function AfficherSerie(selectionsfilm) {
    suivantSerie++;

    // console.log(url + selectionsfilm + api_key + "&page=" + suivant);
    $.getJSON(urlSerie + selectionsfilm + api_key + "&page=" + suivantSerie, function(data) {
        for (var i = 0; i < data.results.length; i++) {
            var id = data.results[i].id;
            var title = data.results[i].name;
            var overview = data.results[i].overview;
            var poster = posterPaths + data.results[i].poster_path;
            if (poster === "http://image.tmdb.org/t/p/w500null") {
                poster = "images/image_defaut.png";
            } else {

                $(".connect").append("<div class='col-sm-2 serie t" + i + "' id='" + id + "'> <div class='affichage'> <img src=" + poster + "><button class='serie_click btn btn-warning'  id='" + data.results[i].id + "'>Favoris</button><a href='movie.php?id=" + data.results[i].id + "&type=tv'>voir plus </a></div>");
                $(".notconnect").append("<div class='col-sm-2 serie t" + i + "' id='" + id + "'> <div class='affichage'> <img src=" + poster + "><a href='movie.php?id=" + data.results[i].id + "&type=tv'>voir plus </a></div>");

                console.log(data.results[i].id);

                
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

    ClasserSerie();
    $(".movies").remove();
    $(".overview").remove();
    $(".moreSerie").show();
    $(".more").hide();
    $(".dropserie").show();
    $(".dropmovies").hide();
});


$(".moreSerie").click(function() {
    AfficherSerie(selections);
});

ClasserSerie();


// AJAX //


$(document).ready(function() {

    $(document).on('click', '.serie_click', function(event) {
        $(this).hide();

        
        console.log('success')

        console.log(event.target.id);

       var id_serie = event.target.id;
        $.ajax({
            url: "traitement/traitement_ajout_fav_serie.php",
            method: "POST",
            data: {
                id_serie: id_serie,   

            },

            success: function(data) {
                console.log(data);

                alert('ajouté aux favoris');
            },
            error: function(data) {
                console.log(data)
            }
        })


    })
    



})