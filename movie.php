<?php 
include 'includes/header.php';




if (!isset($_GET['id'])){
    header('location: index.php');
}


?>
<main class="main_movie">

    <section class="section_movie">
        <div class="presentation_img">
            <img id="presentation_img" src="" alt="">
        </div>
        <div class="presentation_div">
            <h1 id="presentation_title"></h1>
            <div id="categories"></div>
            <span id="slogan" class="text-success"></span>
            <p id="presentation_p"></p>
            <p id="presentation_parution"></p>
            <div id="saisons"></div>
            <p id="production"></p>
            <p id="note"></p>

        </div>
        
    </section>
  
    <section class="section_distribution">
        <h1 id="title_actors" class="display">Acteurs et actrices</h1>
        <div id="distribution"></div>
    </section>
    <section id="commentaires">
        <span id="span_erreur"></span>
      
        <h2>Commentaires</h2>
        <hr>
      
            <?php if (isset($_SESSION['user'])) :?>
                <button  class="btn btn-secondary mb-2" id="affiche_com" >Voir les commentaires</button>
            
            <?php else :?>
                <button  class="btn btn-secondary mb-2" id="affiche_com" value='non_co'>Voir les commentaires</button>

            <?php endif ;?>
            
            
            <section class="formulaire_commentaire " id="com">
            
               
            
            <p class=" bg-success mt-5 " id="message"></p>
            <span id="co"></span>
            </section>
        
        <span id="erreur_form"></span>
        <?php if (isset($_SESSION['user'])) :?>
            <form class="formulaire_commentaire" action="traitement/enregistrement_com.php?id_film=<?= $_GET['id'] ?>" method="post">
                <span id="erreur_form" class="text-danger"></span>
                
                <textarea class="form-control" name="comment" id="comment" cols="30" rows="5"></textarea>
                <div class="text-right">
                    <input type="submit" value="envoyer" name="valider_commentaire" id="btn_commentaire" class="btn-secondary btn m-2">
                </div>

            </form>
        <?php endif; ?>
    </section>
    <div class="text-center m-4">
        
        <button class="btn btn-primary btn1 "><a class="text-muted" href="search.php">Retour à la recherche</a></button>
        <button class="btn btn-success  btn1 "><a class="text-muted" href="index.php">Accueil</a></button>
    </div>
</main>

<?php include 'includes/footer.php' ?>


</body>
</html>

<script src="js/script_movie.js"></script>
<script src="js/fonctions.js"></script>
<script src="js/script_commentaires.js"></script>


