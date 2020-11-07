<?php

class Response {

    private $connect;
    private $bdd;
    private $id_user;

    public function __construct($bdd){
        $this->bdd = $bdd;
        $this->connect = $this->bdd->connectDb();
      
    }

    public function AddResponse($id_comment,$content_response,$id_user,$id_film){

        if (!empty($content_response)){
            $resquete = $this->connect->prepare('INSERT INTO `response`(`id_user`, `id_comment`, `content_response`, `id_film`) VALUES (?,?,?,?)');
            $resquete->execute([$id_user,$id_comment,$content_response,$id_film]);
            echo true;
        }
        else {
            echo json_encode(["erreur" => "Le champ ne peut etre vide"]);
        }
       
    }

    public function GetResponseByIdComment($id_comment,$id_film){
       $requete =  $this->connect->prepare("SELECT * FROM `response` INNER JOIN user on response.id_user = user.id where response.id_comment = ? and response.id_film = ?");
       $requete->execute([$id_comment,$id_film]);
       $resultat = $requete->fetchAll(PDO::FETCH_ASSOC);
       return $resultat;

    }

    public function CountResponseByIdComment($id_comment,$id_film){
        $requete =  $this->connect->prepare("SELECT count(*) from response where id_comment= ? and response.id_film= ?");
        $requete->execute([$id_comment,$id_film]);
        $resultat =$requete->fetch();
        return $resultat;
 
     }
}

?>