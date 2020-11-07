$(document).ready(function() {

    //recuperation des parametres de l'url
    let getUrl = (new URL(document.location)).searchParams;
    var id_actor = getUrl.get('id');
    
    var name_actor = getUrl.get('name');
 

    //Ajout acteur
    $("h1").text(name_actor);
    $("#name_actor").text(name_actor);
    $("#name").text(name_actor);
    
    
    var lien = "https://api.themoviedb.org/3/";

    // creation de l'url
    var urlActor = lien + "person/" + id_actor + "/movie_credits?api_key=" + API_KEY + "&language=fr-FR";
    var urlActorSerie = lien + "person/" + id_actor + "/tv_credits?api_key=" + API_KEY + "&language=fr-FR";
   
    var urlActorDetail = lien + "person/" + id_actor + "?api_key=" +API_KEY + "&language=fr-FR";

    
 
    $.ajax({
        url: urlActorDetail,

        success: function(data){


            $("#description").text(data.biography);
            if (data.birthday != null && data.place_of_birth != null){
                $("#bio").text("Né le "+ data.birthday+" , à " +data.place_of_birth+ "");
            }
            else if(data.birthday != null && data.place_of_birth === null){
                $("#bio").text("Né le "+ data.birthday+"");
            }
           
            if ( data.profile_path != null){
                $("#div_bio img").attr('src','https://image.tmdb.org/t/p/w500/'+data.profile_path);
            }
            else{
                console.log("img")
                $("#div_bio img").attr('src','images/actoor_default.png');
            }
           
            $("#div_bio img").attr('alt',data.name);

            if ( data.known_for_department === "Acting"){
                $("#prof").text("Acteur")

            }


            
        }

    })

    Recuperation_donnees(urlActor,"#films","btn_","movie","#pagination","#films")
    Recuperation_donnees(urlActorSerie,"#series","btnSeries_","tv","#pagination2","#series")

    //recuperation du chemin de la page precedente en session
    let chemin = sessionStorage.getItem("page_detail");
    
    $("#back").attr("href", chemin)


    //function
    function Affiche_films(data,container,variable,variable_debut,variable_max){
        for (let i = variable_debut ; i < variable_max ; i++){
            $(container).append("<div id="+ variable + i +"></div>");
            //si film
            if (variable == 'movie'){      
           
                if (data.cast[i].poster_path != null){
                    $("#"+variable + i).append('<a href="movie.php?id=' + data.cast[i].id + '&type=movie"><img src="https://image.tmdb.org/t/p/w500/'+ data.cast[i].poster_path + '" title="'+data.cast[i].original_title+'" alt="'+data.cast[i].name+'" /></a>')
                }
                else{
                    $("#"+variable + i).append('<a href="movie.php?id=' + data.cast[i].id + '&type=movie"><img src="images/image_defaut.png" title="'+data.cast[i].original_title+'" alt="'+data.cast[i].name+'"/></a>')
                }
            }
            //si serie
            else{
                if (data.cast[i].poster_path != null){
                    $("#"+variable + i).append('<a href="movie.php?id=' + data.cast[i].id + '&type=tv"><img src="https://image.tmdb.org/t/p/w500/'+ data.cast[i].poster_path + '"title="'+data.cast[i].name+'" /></a>')
                }
                else{
                    $("#"+variable + i).append('<a href="movie.php?id=' + data.cast[i].id + '&type=tv"><img src="images/image_defaut.png" title="'+data.cast[i].name+'" alt="'+data.cast[i].name+'" /></a>')
                }

            }
        }
    }

    function Recuperation_donnees(url,container,btn,variable,div_pagination,section){
        $(section).empty();
        $.ajax({
            url: url, //lien cible
    
            success: function(data){
              
                if (data.cast.length != 0){
                    
                
                //calcule des pages
                let nbr_page = Math.round(data.cast.length / 16 ) - 1;
                
                // affichage des films au chargement
                Affiche_films(data,container,variable,0,16)
    
                //creation des liens
                for (let j = 1 ; j <= nbr_page +1 ; j++){
                    
                    $(div_pagination).append("<button value ='"+j+"' id='"+ btn +j+"'type='button' class='btn btn-success' >"+ j +"</button>")
                    $("#"+btn+j).on("click",function(){
                        $(section).empty();
                        var variable_debut = ( $(this).val() - 1 ) * 16;
                        var variable_max = $(this).val() * 16 ;
    
                        Affiche_films(data,container,variable,variable_debut,variable_max)
                    });
                }
            
            }
            else{
                $("#title_serie").text("");
                $("#section_series").css('display',"none")
            }
                
            }
        })
    }


});