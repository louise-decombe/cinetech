<?php

class Comment {

    private $bdd;
    private $connect;
    private $id_user;
    private $id_movie;
    private $comment;

    public function __construct($bdd){
        $this->connect = $bdd->connectDb();
    }

    public function addComment($id_user,$id_movie,$comment){
        if ( !empty($comment) ){
            $this->comment = $comment;
            $this->id_user = $id_user;
            $this->id_movie = $id_movie;

            //requete//
            $requete = $this->connect->prepare("INSERT INTO `comment`(`id_user`, `id_film`, `content_comment`, `create_At`) VALUES (?,?,?,NOW() )" );
            $requete->execute([$this->id_user,$this->id_movie,$this->comment]);

            //success//
            echo  true;
             
            

        }
        else{
            //envois erreur ajax
           $erreur = "Ce champ ne peut etre vide";
           echo json_encode(["erreur" => $erreur]);
        }
    }


    public function GetCommentsById($id) {
        //requete//
        $requete = $this->connect->prepare("SELECT comment.id,`id_user`,`id_film`,`content_comment`,`create_At`,user.login FROM comment INNER JOIN user ON comment.id_user=user.id where id_film = ? ");
        $requete->execute([$id]);
        $resultat = $requete->fetchAll(PDO::FETCH_ASSOC);
        return $resultat;
    }

    
}



?>