<?php

require('../classes/config.php');


$data = $wishlist->afficherFavSerie($_SESSION['user']['id']);


echo json_encode($data);


?>