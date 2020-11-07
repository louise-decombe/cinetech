<?php include('includes/header.php') ?>
<head>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
   <link rel="stylesheet" href="css/style_film.css">
</head>
<body>
   <main>
   <div class="container">
   <!-- Ajout d'une navbar qui va permettre l'affichage des données et le classement aussi -->
   <div class="display" id="display"></div>
   <body>
      <div class="container-fluid">
         <div class="row text-center ">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
               <div class="container-fluid">
                  <div class="navbar-header">
                     <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                     <span class="sr-only"></span>
                     <span class="icon-bar"></span>
                     <span class="icon-bar"></span>
                     <span class="icon-bar"></span>
                     </button>
                  </div>
                  <div class="collapse navbar-collapse " id="bs-example-navbar-collapse-1">
                     <ul class="nav navbar-nav selection">
                        <li id="movie" class=""><a href="films.php"> <button class="btn btn-primary">Film</button>   </a></li>
                        <li role="presentation" class="dropdown dropmovies">
                           <a class="dropdown-toggle lead" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                           Genre<span class="caret"></span>
                           </a>
                           <ul class="dropdown-menu ">
                              <li><a href="#" onclick="ClasserFilm('action')">Action</a></li>
                              <li><a href="#" onclick="ClasserFilm('adventure')">Adventure</a></li>
                              <li><a href="#" onclick="ClasserFilm('animation')">Animation</a></li>
                              <li><a href="#" onclick="ClasserFilm('comedy')">Comédie</a></li>
                              <li><a href="#" onclick="ClasserFilm('crime')">Policier</a></li>
                              <li><a href="#" onclick="ClasserFilm('documentary')">Documentaires</a></li>
                              <li><a href="#" onclick="ClasserFilm('family')">Jeunesse</a></li>
                              <li><a href="#" onclick="ClasserFilm('fantasy')">Fantasy</a></li>
                              <li><a href="#" onclick="ClasserFilm('history')">Historique</a></li>
                              <li><a href="#" onclick="ClasserFilm('horror')">Horreur</a></li>
                              <li><a href="#" onclick="ClasserFilm('music')">Musique</a></li>
                              <li><a href="#" onclick="ClasserFilm('romance')">Romance</a></li>
                              <li><a href="#" onclick="ClasserFilm('science fiction')">Science Fiction</a></li>
                              <li><a href="#" onclick="ClasserFilm('thriller')">Thriller</a></li>
                              <li><a href="#" onclick="ClasserFilm('guerre')">Guerre</a></li>
                              <li><a href="#" onclick="ClasserFilm('western')">Western</a></li>
                           </ul>
                        </li>
                        <li role="presentation" class="dropdown dropmovies">
                           <a class="dropdown-toggle lead dropmovies" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                           Classer par<span class="caret"></span>
                           </a>
                           <ul class="dropdown-menu">
                              <li><a href="#" onclick="ClasserFilm('popularity')">Les plus populaires</a></li>
                              <li><a href="#" onclick="ClasserFilm('note')">Classement par note</a></li>
                           </ul>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
         </div>
            <!--  C'est ici que s'affiche le contenu si l'utilisateur est connecté il a accès au bouton ajout aux favoris -->

         <?php if(isset($_SESSION['user'])){

?>
<div class="row text-center connect">
</div>
<?php }else{ ?>

  <div class="row text-center notconnect">
</div>
<?php }?>
         <div class="row text-center row-eq-height bottom">
            <div class="col-sm-12">
               <a class="more btn btn-primary"> Voir plus</a>
          
            </div>
            
         </div>
      </div>

      <?php include('includes/footer.php') ?>

<script src="js/script_search.js"></script>

<script src="js/script_display_films.js"></script>
</body>
</html>



