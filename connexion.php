<?php include('includes/header.php'); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion</title>
</head>
<body>
    
<main>
   
    <section id="container-connect">
        <fieldset>
        <form class="container_formulaire" action="traitement/traitement_connexion.php" method="post">
            <section id ="new-user">
            </section>
            <h1>CONNEXION</h1>
            <section id="box-connect">
            <div class="form-group">
            <label for="email">Login</label>

                <input name="email" class="form-control" type="text" placeholder="login*">
</div>
<div class="form-group">
<label for="exampleInputEmail1">Password</label>

                <input name="password" class="form-control" type="password" placeholder="Mot de passe*">
</div>
            </section>
            <button type="submit"  class="btn btn-primary"name="submit">ME CONNECTER</button>
            <a id="linkconnect" href="inscription.php">Je dois m'inscrire</a>
</fieldset>

        </form>
    </section>
</main>



<?php include('includes/footer.php'); ?>
<script src="js/script_form.js"></script>

<script src="js/script_search.js"></script>


</body>
</html>

