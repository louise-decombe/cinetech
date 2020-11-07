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
         <div class="container">
      <h2> Bienvenue sur votre profil <?php echo $_SESSION['user']['login'];?></h2>
  
            <tr class="table-primary">
               <th scope="row">Primary</th>
               <td><a href="favoris.php"> <i class="far fa-heart"></i> FAVORIS</a></td>
               <td><a href="contact.php"> <i class="far fa-envelope"></i> NOUS CONTACTER</a></td>
               <td>
                  <form action="index.php" method="post">
                     <input id="deco-profile" name="deco" value="SE DECONNECTER" type="submit"/>
                  </form>
               </td>
            </tr>
            <article id="profile-infos">
               <h2>Mes informations</h2>
               <p><?= $_SESSION['user']['login'] ?></p>
               <form class='onglet' method='POST'>
                  <input id="link-modif" name="modifier" value="modifier" type="submit"/>
               </form>
               <form class='onglet' method='POST'>
                  <input id="link-modif" name="change_password" value="changer le mot de passe" type="submit"/>
               </form>
            </article>
            <?php if(isset($_POST['modifier'])){?>
            <section class="modify">
               <a href="profil.php">x</a>
               <h3>MODIFIER MES INFOS</h3>
               <form action="profil.php" method='POST'>
                  <section>
                     <input type="text" name="login" placeholder="<?=$_SESSION['user']['login']?>">
                  </section>
                  <button type="submit" name="modify_infos">ACTUALISER</button>
               </form>
            </section>
            <?php }
               if(isset($_POST['change_password'])){?>
            <section class="modify">
               <a href="profil.php">x</a>
               <h3>CHANGER LE MOT DE PASSE</h3>
               <form action="profil.php" method='POST'>
                  <section>
                     <input type="password" name="new_password" placeholder="nouveau password">
                     <input type="password" name="check_password" placeholder="confirmer le password">
                  </section>
                  <button type="submit" name="modify_password">ENREGISTRER LE NOUVEAU MOT DE PASSE</button>
               </form>
            </section>
            <?php } }else{
               echo "vous n'avez pas le droit d'accéder à cette page";
               }?>
         </div>
      </main>
   </body>
</html>
<?php include('includes/footer.php') ?>