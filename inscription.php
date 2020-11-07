

<?php include('includes/header.php') ?>
<head>
   <script src="js/script_form.php"></script>
</head>
<body>
   <?php 
      ob_start();
      ?>
   <main>
   <?php
      // traitement de l'insert pour le moment pas dans la page traitement dédiée classe user
               if (isset($_POST['submit'])) {
                   $user->register(
                       $_POST['login'],
                       $_POST['password'],
                       $_POST['conf_password']
      	);
      
      
      }
               
      ?>
   <div class="container_register">
      <!-- formulaire d'inscription  -->
      <form action="inscription.php" class="container_formulaire form-group" id="container_formulaire" method="post">
         <h1>INSCRIPTION</h1>
         <!-- login  -->
         <label for="login">
            <span>Login</span><br/>
            <span id="disponible"></span>
            <input type="text" type="text" name="login" placeholder="login*" id="login" minlength="3" required>
            <ul class="input-requirements">
               <li>3 caractères minimum requis</li>
               <li>Caractères spéciaux non autorisés</li>
            </ul>
         </label>
   
         <!-- password  -->
         <label for="password">
            <span>Password</span><br/>
            <input class="" id="password" name="password" placeholder="mot de passe*" type="password" maxlength="100" minlength="8" required>
            <ul class="input-requirements">
               <li>Minimum 8 caractères</li>
               <li>Au moins 1 nombre</li>
               <li>Au moins une lettre minuscule</li>
               <li>Au moins une lettre majuscule</li>
               <li>Au moins un caractère spécial</li>
            </ul>
         </label>
         <!-- confirmation password  -->
         <label for="conf_password">
         <span>Confirmer password</span>
         <input  class="" type="password" name="conf_password"   placeholder="confirmer le mot de passe*" id="conf_password" maxlength="100" minlength="8" required>
         </label>
         <br>
         <input type="submit" class="btn btn-secondary" name="submit" value="inscription"> 
      </form>
   </div>
</body>
<script src="js/script_form.js"></script>
        <script src="js/script_search.js"></script>

</html>
<?php include('includes/footer.php'); ?>

