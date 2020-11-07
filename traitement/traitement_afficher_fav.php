<?php

require('../classes/config.php');


$data = $wishlist->afficherFav($_SESSION['user']['id']);


echo json_encode($data);


?>