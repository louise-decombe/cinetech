

<?php include('includes/header.php') ?>
<head>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
   <link rel="stylesheet" href="css/style_film.css">
</head>
<body>
   <main>

   <div class="container">
   <!--  Ajout d'une navbar qui va permettre l'affichage des données et le classement aussi -->
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
                        <li id="serie" class=""><a href="series.php"> <button class="btn btn-secondary">Séries</button> </a></li>
                        <li role="presentation" class="dropdown droptv">
                           <a class="dropdown-toggle lead " data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                           Genre<span class="caret"></span>
                           </a>
                           <ul class="dropdown-menu">
                              <li><a href="#" onclick="ClasserSerie('action')">Action</a></li>
                              <li><a href="#" onclick="ClasserSerie('adventure')">Aventure</a></li>
                              <li><a href="#" onclick="ClasserSerie('animation')">Animation</a></li>
                              <li><a href="#" onclick="ClasserSerie('comedy')">Comédie</a></li>
                              <li><a href="#" onclick="ClasserSerie('crime')">Policier</a></li>
                              <li><a href="#" onclick="ClasserSerie('documentary')">Documentaire</a></li>
                              <li><a href="#" onclick="ClasserSerie('family')">Jeunesse</a></li>
                              <li><a href="#" onclick="ClasserSerie('fantasy')">Fantasy</a></li>
                              <li><a href="#" onclick="ClasserSerie('history')">History</a></li>
                              <li><a href="#" onclick="ClasserSerie('horror')">Horreur</a></li>
                              <li><a href="#" onclick="ClasserSerie('music')">Musique</a></li>
                              <li><a href="#" onclick="ClasserSerie('romance')">Romance</a></li>
                              <li><a href="#" onclick="ClasserSerie('science fiction')">Science Fiction</a></li>
                              <li><a href="#" onclick="ClasserSerie('thriller')">Thriller</a></li>
                              <li><a href="#" onclick="ClasserSerie('guerre')">Guerre</a></li>
                              <li><a href="#" onclick="ClasserSerie('western')">Western</a></li>
                           </ul>
                        </li>
                        <li role="presentation" class="dropdown droptv">
                           <a class="dropdown-toggle lead " data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                           Classer par<span class="caret"></span>
                           </a>
                           <ul class="dropdown-menu">
                              <li><a href="#" onclick="ClasserSerie('popularity')">Le plus populaire</a></li>
                              <li><a href="#" onclick="ClasserSerie('note')">Note</a></li>
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
            <a class="moreSerie btn btn-primary"> Voir plus</a>

            </div>
         </div>
      </div>
</div>
<?php include('includes/footer.php') ?>

<script src="js/script_search.js"></script>

      <script src="js/script_display_series.js"></script>
</body>
</html>

