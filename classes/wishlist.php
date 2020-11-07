<?php

class Wishlist
{
 

  private $bdd;
  private $connect;
  private $id_user;
  private $id_film;

  public function __construct($db){
      $this->connect = $db->connectDb();
  }
  // sélection de tout les élements des wishlist
  public function select()
  {

    $req = $this->connect->prepare("SELECT * FROM wishlist ORDER BY id desc");
    $req->execute();
    $data_wishlist = $req->fetchAll();

    return $data_wishlist;
  }


  // ajout d'un film à la liste des favoris
  public function ajoutFav($id_user, $id_film, $type)
  {

      $query = $this->connect->prepare("INSERT INTO wishlist (id_user, id_film, type_movie_tv)
      VALUES(:id_user,:id_film, :type_movie_tv)");
      $query->bindParam(':id_user', $id_user);
      $query->bindParam(':id_film', $id_film);
      $query->bindParam(':type_movie_tv', $type);
      $query->execute();

  
  }

  // suppression d'un favoris
  public function deleteFav($supprimer_id)
  {
    try {
      $req = $this->connect->prepare("DELETE FROM wishlist WHERE id_film = ?");
      $req->execute([$supprimer_id]);

      return json_encode(["msg" => "suppression ok"]);
    } catch (PDOException $error) {
      echo  $error->getMessage();
    }
  }

// affichage de la liste en fonction de l'id users
  public function afficherFav($id_user)
  {
    try {
      $req = $this->connect->prepare("SELECT * FROM wishlist WHERE id_user = ? AND type_movie_tv 	 ='movie' ");
      $req->execute([$id_user]);
      $fav = $req->fetchall();
      return $fav;
    } catch (PDOException $error) {
      echo  $error->getMessage();
    }
  }

  public function afficherFavSerie($id_user)
  {
    try {
      $req = $this->connect->prepare("SELECT * FROM wishlist WHERE id_user = ? AND type_movie_tv 	 ='tv' ");
      $req->execute([$id_user]);
      $fav = $req->fetchall();
      return $fav;
    } catch (PDOException $error) {
      echo  $error->getMessage();
    }
  }

};
?>
