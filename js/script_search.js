const API_KEY = 'a0a744b143e40d6baf5ebed15d300768';
$(document).ready(function(){


var url1  = 'https://api.themoviedb.org/3/search/multi?api_key=a0a744b143e40d6baf5ebed15d300768&language=fr-FRANCE';


var btn = document.getElementById('btn');
var input = document.getElementById('inputValue');
var resultat = document.getElementById('results');
var span_erreur = document.getElementById('erreur');
var btn_next = document.getElementById('btn_next');
var btn_prev = document.getElementById('prev');
var page = 1;

function RecuperationFilms(variable,variable_page){
    $("#btn_next").addClass('display');
    $("#prev").addClass('display');
    
    $.ajax({
        url : variable, // La ressource ciblée

        success: function(data){
            console.log(data)
           
           if (data.results != ""){
               for (let i = 0 ; i<data.results.length ; i++){
                   
               
                //CREATION DE LA DIV POUR CHAQUE FILM
                   let newDiv = document.createElement('div');
                   // AJOUT D UN ID ET CLASS
                   newDiv.id = "div"+i ;
                   newDiv.classList.add("result");
                   
                  //AJOUT DES DIV DANS LA SECTION
                   document.getElementById('results').append(newDiv);

                   //CREATION BALISE DU TITRE + AJOUT CONTENUE 
                   var newTitle = document.createElement('h2');
                   newTitle.classList.add("text-success");
                    if (data.results[i].title != null){
                        
                        newTitle.textContent = data.results[i].title;
                    }
                    else {
                        newTitle.textContent = data.results[i].name;
                    }

                    //CREATION DE LA BALIE IMG + AJOUT DE LA SOURCE
                   var newImg = document.createElement('img');
                   
                   if (data.results[i].poster_path != null){
                        newImg.src = "https://image.tmdb.org/t/p/w500/" + data.results[i].poster_path;
                   }
                   else {
                        newImg.src = "images/image_defaut.png";
                   }
                   
                   //CREATION DU LIEN VERS LE DETAIL DU FILM 
                   var newLien = document.createElement('a');
                   newLien.textContent = "En savoir +";
                   newLien.classList.add("btn");
                   newLien.classList.add("btn-success");

                   //SERIE OU FILM
                   if(data.results[i].media_type == "tv"){
                        newLien.setAttribute('href',"movie.php?id=" + data.results[i].id + "&type=tv");
                   }
                   else{
                        newLien.setAttribute('href',"movie.php?id=" + data.results[i].id + "&type=movie");
                   }
                   

                   //AJOUT DE LA DIV DANS LE DOM
                   var div = document.getElementById("div"+i);
                   div.appendChild(newTitle);
                   div.appendChild(newImg);
                   div.appendChild(newLien);

                }
                //console.log(data)
               console.log(data.total_pages)
               console.log(variable_page);
           }

           //GESTION DES BTN PREVIOUS ET NEXT

           if (data.total_pages > 1) {
                $("#btn_next").removeClass('display');
           }
     
          
            
            if (variable_page > 1 ) {
                $("#prev").removeClass('display');
            }
            else {
                $("#prev").addClass('display'); 
            }
            
            
           if (variable_page == data.total_pages ){
                $("#btn_next").addClass('display');
            }
       }

    });
    
}


// bouton search
function Onclick(e){
    e.preventDefault();
    page = 1;
    
    //RECUPERATION DU CHEMIN DE LA PAGE EN COURS
    var chemin = window.location.pathname;

    var value = input.value;
    console.log(value)
    span_erreur.textContent = "";
    input.classList.remove('erreur');

    if ( value != ""){

        //ENREGISTREMENT DE LA VALEUR DE L INPUT EN STORAGE POUR GARDER EN MEMOIRE LA RECHERCHE DE L UTILISATEUR
        sessionStorage.setItem("query",value);
       
        //SI RECHERCHE SUR UNE AUTRE PAGE QUE LA PAGE SEARCH
        if (chemin != "/cinetech/search.php"){
            
            //CONSTRUCTION DE L URL
            var newUrl = url1 + '&query=' + value + "&page=" + page ;
            

            //ENREGISTREMENT DE L URL DE L API POUR GERER LES RETOUR DU NAVIGATEUR 
            sessionStorage.setItem("url",newUrl);

            //REDIRECTION VERS LA PAGE SEARCH PIUR TRAITEENT
            window.location = "search.php";   
        }
        else{
           
            var newUrl = url1 + '&query=' + value + "&page=" + page ;
            sessionStorage.setItem("url",newUrl);
            resultat.innerHTML="";
            console.log(page)
            RecuperationFilms(newUrl,page);
        } 
    }else{

        //GESTION ERREUR
        input.classList.add('erreur');
        
        span_erreur.textContent = "Le champs ne peut etre vide ";
    }
    
}

//btn suivant suivant
function OnClickBtn(){

    page++;
    let query = sessionStorage.getItem('query');
    var newUrl = url + '&query=' + query + "&page=" + page ;
    sessionStorage.setItem("url",newUrl);
    resultat.innerHTML="";
        
    RecuperationFilms(newUrl,page);

}

//btn suivant precedent
function OnclickBtnPrev(){
    page--;
    let query = sessionStorage.getItem('query');
    var newUrl = url + '&query=' + query + "&page=" + page ;
    sessionStorage.setItem("url",newUrl);
    resultat.innerHTML="";
   
            
    RecuperationFilms(newUrl,page);
}

btn.addEventListener('click',Onclick);
btn_next.addEventListener('click',OnClickBtn)
btn_prev.addEventListener('click',OnclickBtnPrev)


//GESTION DES RETOUR EN ARRIERE NAVIGATEUR
var session = sessionStorage.getItem("url");


if (session){
    RecuperationFilms(session); 
}
})
