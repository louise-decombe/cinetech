<?php include('includes/header.php'); ?>
<?php
   if (isset($_SESSION['user'])) {
   if (isset($_POST["modify_infos"])) {
       $id_user= ($_SESSION['user']['id']);
       $user->modify_infos($id_user,$_POST['login']);
       $refresh = $user->refresh($id_user);
       //var_dump($refresh);
   }
   if (isset($_POST["modify_password"])) {
       $id_user= ($_SESSION['user']['id']);
       $user->modify_password($id_user, $_POST['new_password'],$_POST['check_password']);
   }
   /*if (isset($_POST["close_window"])) {
       $id_user= ($_SESSION['user']['id']);
       $user->modify_password($id_user, $_POST['new_password'],$_POST['check_password']);
   }*/
   ?>
<title>Profil</title>
</head>
<body>
   <main>
      <div class="container container_profil">
         <h2> Bienvenue sur votre profil <?php echo $_SESSION['user']['login'];?></h2>
         <tr class="table-primary">
            <hr><td><a href="favoris.php"> <i class="far fa-heart"></i> VOIR MES FAVORIS</a></td><hr>
            <td>
               <form action="index.php" method="post">
                  <input id="deco-profile" class="btn btn-warning" name="deco" value="DECONNEXION" type="submit"/>
               </form>
            </td>
         </tr>
         <article id="profile-infos">
            <h2>Mes informations</h2>
            <form class='onglet' method='POST'>
               <input id="link-modif" name="modifier" class="btn btn-primary" value="modifier login" type="submit"/>
            </form>
            <form class='onglet' method='POST'>
               <input id="link-modif" name="change_password" class="btn btn-primary" value="modifier mot de passe" type="submit"/>
            </form>
         </article>
         <?php if(isset($_POST['modifier'])){?>
         <section class="modify">
            <a href="profil.php">x</a>
            <h3>MODIFIER LOGIN</h3>
            <form action="profil.php" method='POST'>
               <section>
                  <input type="text" name="login" placeholder="<?=$_SESSION['user']['login']?>">
               </section>
               <button type="submit" class="btn btn-success" name="modify_infos">METTRE A JOUR</button>
            </form>
         </section>
         <?php }
            if(isset($_POST['change_password'])){?>
         <section class="modify">
            <a href="profil.php">x</a>
            <h3>MODIFIER MOT DE PASSE</h3>
            <form action="profil.php" method='POST'>
               <section>
                  <input type="password" name="new_password" placeholder="nouveau password" required>
                  <input type="password" name="check_password" placeholder="confirmer le password" required>
               </section>
               <button type="submit" class="btn btn-success" name="modify_password">ENREGISTRER LE MOT DE PASSE</button>
            </form>
         </section>
         <?php } }else{
            echo "vous n'avez pas le droit d'accéder à cette page";
            }?>
      </div>
   </main>

   <script src="js/script_search.js"></script>

<?php include('includes/footer.php') ?>

</body>
</html>
