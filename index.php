<!-- Ajout du header -->
<?php include('includes/header.php'); ?>
<main>
 
<!-- Affichage derniers films -->
<div class="jumbotron">
  <h1 class="display-3">MyCinetech</h1>
  <p class="lead">Le site des cinéphiles</p>
  <hr class="my-4">
  <p>Inscrivez vous ou connectez vous pour commenter les oeuvres et faire des listes de vos favoris!</p>
  <p class="lead">
    <a class="btn btn-success btn-lg" href="connexion.php" role="button">Connexion</a>
    <a class="btn btn-success btn-lg" href="inscription.php" role="button">Inscription</a>

  </p>
</div>

<div class="container text-center my-3">
    <div class="row mx-auto my-auto">
        <div id="recipeCarousel" class="carousel slide w-100" data-ride="carousel">
            <div class="carousel-inner w-100 films" role="listbox">
                <div class="carousel-item active">
                        <div class="card card-body">
<h2>Dernières sorties film</h2>
<img src="images/index.jpg" alt="">
                      </div>
                </div>
               
               
            </div>
            <a class="carousel-control-prev w-auto" href="#recipeCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next w-auto" href="#recipeCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</div>

<center> <a href="films.php" class="btn btn-primary btn-lg" rel="noopener noreferrer"> Voir plus de films</a><hr></center>



<!-- Affichage dernières séries -->

<center> <a href="series.php" class="btn btn-primary btn-lg"  rel="noopener noreferrer"> Voir plus de séries</a></center>

</main>
<script>



</script>
<script src="js/script_display_index.js"></script>

<!-- Ajout du footer -->
<?php include('includes/footer.php'); ?>
</body>
</html>


<!---  -->