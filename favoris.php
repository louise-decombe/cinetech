<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Favoris</title>
</head>
<body>

<?php include('includes/header.php') ?>
<?php if (isset($_SESSION['user'])) { ?>

<div class="container"> 



<h2>Retrouvez ici vos favoris</h2>

<div class="container">



</div>
</div>
    <?php }else{

echo "vous n'avez pas le droit d'accéder à cette page";

    } ?>

<?php include('includes/footer.php') ?>
</body>
</html>