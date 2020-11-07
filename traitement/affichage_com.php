<?php
//script pour allez chercher les commentaires 

require '../classes/Comment.php';
require '../classes/db.php';

$db = new DB("localhost", "root", "", "cinetech");
$commentaire = new Comment($db);

//recuperation de l id du film par le get
$id_film = $_GET['id_film'];

$commentaires = $commentaire->GetCommentsById($id_film);

echo json_encode($commentaires);



?>