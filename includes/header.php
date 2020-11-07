<?php 
   //chargement des classes et session start
   require('classes/config.php') ?>
<!DOCTYPE html>
<html lasng="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!-- liens css (bootstrap theme solar, fontawesome) -->
      <link rel="stylesheet" href="css/styles.css">
      <link rel="stylesheet" href="css/fontello/css/fontello.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/solar/bootstrap.min.css">
      <!-- polices caractère Staatliches et Notosansjp -->
      <link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet">
      <!-- liens script, jquery ajax  -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
   </head>
   <body>
      <?php
         // si l'utilisateur est connecté il voit une navbar personnalisé
         
         if(isset($_SESSION['user'])){
         ?> 
      <!-- NAVBAR UTILISATEUR -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
         <a class="navbar-brand" href="index.php">MyCinetch</a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav mr-auto">
               <li class="nav-item active">
                  <a class="nav-link" href="index.php">Accueil
                  <span class="sr-only">(current)</span>
                  </a>
               </li>
               <li class="nav-item" id="movie">
                  <a class="nav-link" href="films.php"> Films </button></a>
               </li>
               <li class="nav-item" id="tv">
                  <a class="nav-link" href="series.php"> Séries</button> </a>
               </li>
               <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Favoris</a>
                  <!-- menu dropdown -->
                  <div class="dropdown-menu">
                     <a class="dropdown-item" href="favoris.php">Favoris</a>
                     <a class="dropdown-item" href="profil.php">Profil</a>
                     <div class="dropdown-divider"></div>
                     <form action="index.php" method="post">
                        <center><input class="btn btn-success" id="dropdown-deco" name="deco" value="DECONNEXION" type="submit"/></center>
                     </form>
                  </div>
               </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
               <input id="inputValue" class="form-control mr-sm-2" type="search" placeholder="Search" >
               <button id="btn" class="btn btn-secondary my-2 my-sm-0" type="submit" >Search</button>
            </form>
         </div>
      </nav>
      <?php 
         }
           //si l'utilisateur n'est pas connecté navbar avec connexion/inscription
           
           else{
            ?>
      <!-- NAVBAR VISITEUR -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
         <a class="navbar-brand" href="index.php">MyCinetch</a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav mr-auto">
               <li class="nav-item active">
                  <a class="nav-link" href="index.php">Accueil
                  <span class="sr-only"></span>
                  </a>
               </li>
               <li class="nav-item" id="movie">
                  <a class="nav-link" href="films.php"> Films </button></a>
               </li>
               <li class="nav-item" id="tv">
                  <a class="nav-link" href="series.php"> Séries</button> </a>
               </li>
               <li class="nav-item">
               </li>
               <!-- menu dropdown -->
               <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Favoris</a>
                  <div class="dropdown-menu">
                     <a class="dropdown-item" href="inscription.php">Inscription</a>
                     <a class="dropdown-item" href="connexion.php">Connexion</a>
                  </div>
               </li>
            </ul>
            <span id="erreur"></span>
            <form class="form-inline my-2 my-lg-0">
               <input id="inputValue" class="form-control mr-sm-2" type="search" placeholder="Search" >
               <button id="btn" class="btn btn-secondary my-2 my-sm-0" type="submit" >Search</button>
            </form>
         </div>
      </nav>
      <?php
         }
             ?>
      <!-- </body>
         </html> -->