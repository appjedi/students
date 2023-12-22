
    <?php
      session_start();
      $username = $_POST['username'];
      $password = $_POST['password'];
      include_once("dao.php");
      $db = new Database();
      $user=$db->auth($username, $password);
     

      if($user== null){
        echo "<h1>login failed</h1>";
      }
      $roleId=$user['roleId'];
      $_SESSION['user']=$user;
      if($roleId== 1){
        $_SESSION['roleId']=1;
        header("location: index.php");
      }else if($roleId== 2){
        $_SESSION['roleId']=2;
        header("location: index.php");
      }
    ?>