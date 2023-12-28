<?php
    session_start();
    if(!isset($_SESSION['roleId']))
    {
        die ("<h1><font color='red'>Not Logged In</font></h1><h3><a href='login.php'>Login</a></h3>");
    }
    if($_SESSION['roleId']!=1)
    {
        die ("<h1><font color='red'>Not Authorized</font></h1><h3><a href='login.php'>Login</a></h3>");
    }
    if(!isset($_GET["id"]))
    {
        die("<h1><font color='red'>No ID</font></h1><h3><a href='manage-items.php'>Login</a></h3>");
    }
    $id = $_GET['id'];
    include_once("dao.php");
    $db = new Database();

    $item=$db->getItem($id);
    $cat = $item['categoryId'];
    $desc = $item['itemDescription'];
    $price = $item['price'];
    $quantity = $item['quantity'];

     //var_dump($item);
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Admin</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
  </head>
  <p><a href='index.php'>Home</a></p>
  <body>
    <h1>Modify Item!!</h1>
   <div>
      <hr/>
    <p>Category</p>
    <form method='POST' action='update-item.php'>
      <select name='categoryId'>
<?php


    
    echo "<option value='0'>Category</option>";
    if($cat=='1')
      echo "<option selected value='1'>Electronics</option>";
    else
      echo "<option value='1'>Electronics</option>";

    if($cat=='2')
      echo "<option selected value='2'>Computers</option>";
    else
      echo "<option value='2'>Computers</option>";

    if($cat=='3')
      echo "<option selected value='3'>Clothing</option>";
    else
      echo "<option value='3'>Clothing</option>";      
    
    echo "</select><br/>";
    echo "<input type='hidden' name='itemId' value='$id'/>";
    echo "<p>Description:<br/> <input type='text' name='itemDescription' required value='$desc'/></p>";
    echo "<p>Price:<br/> <input type='number' name='price' required value='$price'/></p>";
    echo "<p>Quantity:<br/> <input type='number' name='quantity' required value='$quantity'/></p>";
  ?>
      <p><button>Update Item</button></p>
    </form>
</div>

</body>
</html>
