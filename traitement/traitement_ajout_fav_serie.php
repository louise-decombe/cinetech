<?php

require('../classes/config.php');



    $id_film = htmlspecialchars($_POST['id_serie']);
    $query = $db->query("SELECT * FROM wishlist WHERE id_film= $id_film");

if (count($query) >= 1 ){

    echo 'déjà ajouté à la liste des fav';

}else{

    $type= 'tv';
    $id_user = $_SESSION['user']['id'];
    //htmlspecialchars($_POST['id_user']);
    $id_film = htmlspecialchars($_POST['id_serie']);
    
    //htmlspecialchars($_POST['id']);
    
    $result = $wishlist->ajoutFav($id_user, $id_film, $type);
    
    

}





?>