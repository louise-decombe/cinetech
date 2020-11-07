<?php session_start();
   

    require '../classes/db.php';
    require '../classes/Comment.php';
  

    $db = new DB("localhost", "root", "", "cinetech");
    $comment = new Comment($db);
    


        $messages = $comment->GetCommentsById($_GET["id"]);
        echo json_encode($messages);
  
    
    
    

    



?>