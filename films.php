<?php include('includes/header.php') ?>

<body>



        <main>

        <div class="container">
<h1>Film</h1>
<p>
Cinéphiles ou non vous trouverez votre bonheur ici !
</p>

<h2>Voir par top</h2>
<button class="btn btn-primary">Top 20</button>
<button class="btn btn-secondary">Les + populaires</button>
<button class="btn btn-success">Les navets</button>

<h2>Voir par genre</h2>
<button class="btn btn-danger">Action</button>
<button class="btn btn-danger">Romance</button>
<button class="btn btn-danger">Science-fiction</button>
<button class="btn btn-danger">Jeunesse</button>
<button class="btn btn-danger">Comédie</button>

</div>

<div class="display" id="display"></div>








        </main>


</body>

<script src="js/script_display_films.js"></script>
</html>




<?php include('includes/footer.php') ?>