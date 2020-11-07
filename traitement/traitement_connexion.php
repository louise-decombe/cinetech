<?php
   
   // chargement des classes
   require('../classes/config.php');
   
   // utilisation de connect dans la classe user
   if (isset($_POST['submit'])) {
        $user->connect(
            $_POST['email'],
            $_POST['password']
        );


        // retour à la page précédente pour le moment
        header("location:../profil.php"); 
    }
    ?>