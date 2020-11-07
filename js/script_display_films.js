
const API_KEY = 'a0a744b143e40d6baf5ebed15d300768';
const url  = 'https://api.themoviedb.org/4/search/movie?api_key=a0a744b143e40d6baf5ebed15d300768';

    // liens pour l'affichage de mes films populaires
const APIURL =" https://api.themoviedb.org/3/movie/top_rated?api_key=a0a744b143e40d6baf5ebed15d300768&language=fr-FRANCE&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

// c'est dans le main que mes élements vont se trouver
const display = document.getElementById("display");

// de base on affiche les film populaires
getFilm(APIURL);

// je dois async ma méthode pour avoir le fetch des données de mon url
async function getFilm(url) {
    const resp = await fetch(url);
    // ma réponse est basiqueent un json
    const respData = await resp.json();

    // console log pour voir quelles données me sont renvoyées
    console.log(respData);

    // si ça marche on démarre la méthode pour afficher les films 
    showFilm(respData.results);
}

function showFilm(movies) {
    // je clear mon main
    display.innerHTML = "";
// la boucle qui dit ce qui sera affiché pour chaque film
    movies.forEach((movie) => {
        const { poster_path, title, genres, overview } = movie;

        // je crée des élements en HTML pour afficher mes élements
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `
        <div class="card" style="width: 18rem;">
               <img class="card-img-top" src="${IMGPATH + poster_path}"
                alt="${title}>
               <div class="card-body">
                  <h2 class="card-title">${title}</h2>
                  <p class="card-text"> ${overview} </p>
                  <p class="card-text"> ${name} </p>
                  <a href="#" class="card-link">Voir</a>
                  <a href="#" class="card-link">Another link</a>
                  <a href="#" class="card-link fav">
                     <i onclick="myFunction(this)" class="fa fa-heart"></i>
                    </a>
                    </button>
               </div>
            </div>  
           
        `;

        display.appendChild(movieEl);
    });
}
