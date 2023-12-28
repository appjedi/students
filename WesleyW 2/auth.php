
    <?php
      session_start();
      $username = $_POST['username'];
      $password = $_POST['password'];
      include_once("dao.php");
      $db = new Database();
      $roleId=$db->auth($username, $password);

      if($roleId== 0){
        echo "<h1>login failed</h1>";
      }
      else if($roleId== 1){
        $_SESSION['roleId']=1;
       header("location: index.php");
      }else if($roleId== 2){
        $_SESSION['roleId']=2;
        header("location: index.php");
      }
    ?>