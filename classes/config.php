<?php
// classes requises
require 'db.php';
require 'user.php';
require 'wishlist.php';
//la session démarre dans le header 
session_start();

$db = new DB();
$user = new User($db);
$wishlist = new Wishlist($db);

//var_dump($user);

//traitement de la déconnexion
if (isset($_POST["deco"])) {
    $user->disconnect();
}
?>
