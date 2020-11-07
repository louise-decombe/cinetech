<?php

require 'message_error.php';

class User
{

    private $id_user;
    public $login;
    public $password;
    public $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function connect($login, $password)
    {
        $connexion = $this->db->connectDb();
        $q = $connexion->prepare("SELECT * FROM user WHERE login = '$login'");
        $q->execute();
        $user = $q->fetch(PDO::FETCH_ASSOC);
        if (!empty($user)) {
            if (password_verify($password, $user['password'])) {
                $this->id = $user['id'];
                $this->login = $user['login'];
                $this->password = $user['password'];

                $_SESSION['user'] = [
                    'id' =>
                        $this->id,
                    'login' =>
                        $this->login,
                    'password' =>
                        $this->password
                ];


                return $_SESSION['user'];
            } else {
                $errors[] = "Le login ou le mot de passe est erroné.";
                $message = new messages($errors);
                echo $message->renderMessage();
            }
        } else {
            $errors[] = "Le login ou le mot de passe est erroné.";
            $message = new messages($errors);
            echo $message->renderMessage();
        }
    }

    public function register( $login, $password, $password_check)
    {
        $connexion = $this->db->connectDb();
        //var_dump($connexion);

         //login
        // $login_required = preg_match("/^(?=.*[A-Za-z]$)[A-Za-z][A-Za-z\-]{2,19}$/", $login);
        // if (!$login_required) {
        //     $errors[] = "Le login doit :<br>- Comporter entre 3 et 19 caractères.<br>- Commencer et finir par une lettre.<br>- Ne contenir aucun caractère spécial (excepté -).";
         //}

        $q = $connexion->prepare("SELECT login FROM user WHERE login = :login");
        $q->bindParam(':login', $login, PDO::PARAM_STR);
        $q->execute();
        $login_check = $q->fetch();
        if (!empty($login_check)) {
            $errors[] = "Ce login est déjà utilisé";
        }
        //password
        $password_required = preg_match(
            "/^(?=.*?[A-Z]{1,})(?=.*?[a-z]{1,})(?=.*?[0-9]{1,})(?=.*?[\W]{1,}).{8,20}$/",
            $password
        );
       // if (!$password_required) {
         //   $errors[] = "Le mot de passe doit contenir:<br>- Entre 8 et 20 caractères<br>- Au moins 1 caractère spécial<br>- Au moins 1 majuscule et 1 minuscule<br>- Au moins un chiffre.";
       // }
        if ($password != $password_check) {
            $errors[] = "Les mots de passe ne correspondent pas.";
        } else {
            $password_modified = password_hash($password, PASSWORD_BCRYPT, array('cost' => 10));
        }

        if (empty($login) or empty($password) or empty($password_check)) {
            $errors[] = "Tous les champs doivent être remplis.";
        }

        if (empty($errors)) {
            $q2 = $connexion->prepare(
                "INSERT INTO user (login, password) VALUES (:login,:password)"
            );
            var_dump($q2);
            $q2->bindParam(':login', $login, PDO::PARAM_STR);
            $q2->bindParam(':password', $password_modified, PDO::PARAM_STR);
            $q2->execute();
            header('location:connexion.php');
        }else {
            $message = new messages($errors);
            echo $message->renderMessage();
        }
    }

  
    public
    function disconnect()
    {
        $this->id = "";
        $this->login = "";
        $this->password = "";
        session_unset();
        session_destroy();
        header('location:index.php');
    }

    public
    function isConnected()
    {
        if (empty($_SESSION['user'])) {
            return false;
        } else {
            return true;
        }
    }

    public function refresh($id_user)
    {
        $connexion = $this->db->connectDb();
        $refresh = $connexion->prepare("SELECT * FROM user WHERE id = '$id_user'");
        $refresh->execute();
        $result_refresh = ($refresh->fetchAll());
        //var_dump($result_refresh);

            $this->id = $result_refresh[0]['id'];
            $this->login = $result_refresh[0]['login'];
            $this->password = $result_refresh[0]['password'];

            $_SESSION['user'] = [
                'id' =>
                    $this->id,
                'login' =>
                    $this->login,
                'password' =>
                    $this->password,
            ];

        return $_SESSION['user'];
    }



    public function profile($id_user)
    {
        $connexion = $this->db->connectDb();
        $q4 = $connexion->prepare("SELECT * FROM user WHERE id = $id_user");
        $q4->execute();
        $infos_user = $q4->fetchAll();
        var_dump($infos_user);

        return $infos_user;
    }


    public function modify_infos($id_user, $new_login)
    {
        $connexion = $this->db->connectDb();
   
        //UPDATE LOGIN
        if(isset($new_login))
        {
            $login_required = preg_match("/^(?=.*[A-Za-z]$)[A-Za-z][A-Za-z\-]{2,19}$/", $new_login);
            if (!$login_required)
            {
                $errors[] = "Le prénom doit :<br>- Comporter entre 3 et 19 caractères.<br>- Commencer et finir par une lettre.<br>- Ne contenir aucun caractère spécial (excepté -).";
            }

            if (empty($errors))
            {
            $update_f = "UPDATE user SET login=:login WHERE id = '$id_user' ";
            $update_login = $connexion -> prepare($update_f);
            $update_login->bindParam(':login',$new_login, PDO::PARAM_STR);
            $update_login->execute();
            }
        }

        if (!empty($errors))
        {
            $message = new messages($errors);
            echo $message->renderMessage();
        }

    }

    public function modify_password ($id_user, $new_password, $check_password)
    {
        $connexion = $this->db->connectDb();
        if(isset($new_password) && isset($check_password)){
            $password_required = preg_match("/^(?=.*?[A-Z]{1,})(?=.*?[a-z]{1,})(?=.*?[0-9]{1,})(?=.*?[\W]{1,}).{8,20}$/",$new_password);
            if (!$password_required) {
                $errors[] = "Le mot de passe doit contenir:<br>- Entre 8 et 20 caractères<br>- Au moins 1 caractère spécial<br>- Au moins 1 majuscule et 1 minuscule<br>- Au moins un chiffre.";
            }
            if ($new_password != $check_password) {
                $errors[] = "Les mots de passe ne correspondent pas.";
            } else {

                $password_modified = password_hash($new_password, PASSWORD_BCRYPT, array('cost' => 10));

                $update_pass = "UPDATE user SET password=:pass WHERE id = '$id_user' ";
                $update_password = $connexion -> prepare($update_pass);
                $update_password->bindParam(':pass',$password_modified, PDO::PARAM_STR);
                $update_password->execute();
            }
        }
        if (!empty($errors))
        {
            $message = new messages($errors);
            echo $message->renderMessage();
        }
    }


}
?> 