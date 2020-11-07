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
        <form action="traitement/traitement_connexion.php" method="post">
            <section id ="new-user">
                <h3>DÉJÀ UN COMPTE ?</h3>
                <a href="inscription.php">INSCRIPTION</a>
            </section>
            <h4>connectez-vous</h4>
            <section id="box-connect">
                <input name="email" type="text" placeholder="login*">
                <input name="password" type="password" placeholder="Mot de passe*">
            </section>
            <button type="submit" name="submit">ME CONNECTER</button>
            <a id="linkconnect" href="inscription.php">Je dois m'inscrire</a>
        </form>
    </section>
</main>





</body>
</html>

<?php include('includes/footer.php'); ?>
