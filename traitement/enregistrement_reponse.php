<?php session_start();

//enregistrement des reponses
require '../classes/db.php';
require '../classes/Response.php';

$bdd = new DB("localhost","root","","cinetech");
$reponse = new Response($bdd);

$id_comment = $_GET['id_comment'];
$content_response = $_POST['content_reponse'];
$id_user = $_SESSION['user']['id']; 
$id_film = $_POST['id_film'];



$reponse->AddResponse($id_comment,$content_response,$id_user,$id_film);

?>