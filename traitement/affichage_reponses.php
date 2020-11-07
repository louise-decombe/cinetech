<?php
//affichage des reponse

require '../classes/db.php';
require '../classes/Response.php';

$bdd = new DB("localhost","root","","cinetech");
$reponse = new Response($bdd);


if (isset($_GET['id_comment']) && isset($_GET['id_film']) && !isset($_GET['compteur']) ) {
    $id_comment = $_GET['id_comment'];
    $id_film = $_GET['id_film'];

    $reponses = $reponse->GetResponseByIdComment($id_comment,$id_film);

    echo json_encode($reponses);
}

if (isset($_GET['compteur']) && isset($_GET['id_comment']) && isset($_GET['id_film'])){
    $id_comment = $_GET['id_comment'];
    $id_film = $_GET['id_film'];


    echo json_encode($reponse->CountResponseByIdComment($id_comment,$id_film));
}







?>