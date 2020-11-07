<?php session_start();

//enregistrement des commentaires en bdd
require '../classes/db.php';
require '../classes/Comment.php';

$bdd = new DB("localhost", "root", "", "cinetech");
$commentaire = new Comment($bdd);

//id user session
$id_user = $_SESSION['user']['id_user'];

$id_film = $_GET['id_film'];
$comment = $_POST['comment'];


$commentaire->addComment($id_user,$id_film,$comment);



?>