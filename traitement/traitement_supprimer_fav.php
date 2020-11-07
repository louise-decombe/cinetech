<?php

require '../classes/config.php';

$supprimer_id= $_POST['supprimer_id'];
$response = $wishlist->deleteFav($supprimer_id);

echo $response;
?>