
      <?php include('includes/header.php') ?>
      <?php if (isset($_SESSION['user'])) { ?>
      <main id="main">
      </main>
      
      <div class="container">
         <h2>Retrouvez ici vos favoris</h2>
         <div class="container">
            
            <div class="favoris-serie">
               <h1>Séries</h1>
            </div>
            <div class="favoris-film">
               <h1>Films</h1>
            </div>
         </div>
      </div>
      <?php }else{
         echo "vous n'avez pas le droit d'accéder à cette page";
         
             } ?>
      <?php include('includes/footer.php') ?>
            <!--  script qui correspond au traitement de la wishlist (affichage suppression)-->
            <script src="js/script_search.js"></script>

            <script src="js/script_wishlist.js"></script>

   </body>
</html>