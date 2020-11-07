<?php include('includes/header.php') ?>

<body>


        <main>

        <div class="container">
<h1>Series</h1>
<p>
    Séries ou TVShow en anglais, elles font notre plaisir, saison après saison.
</p>

<h2>Voir par top</h2>
<button class="btn btn-primary">Top 20</button>
<button class="btn btn-secondary">Les + populaires</button>
<button class="btn btn-success">Les pires séries</button>

<h2>Voir par genre</h2>
<button class="btn btn-danger">Action</button>
<button class="btn btn-danger">Romance</button>
<button class="btn btn-danger">Science-fiction</button>
<button class="btn btn-danger">Jeunesse</button>
<button class="btn btn-danger">Comédie</button>

</div>


<div id="display" class="display"></div>



        </main>


<script src="js/script_display_series.js"></script>
</body>

<?php include('includes/footer.php') ?>