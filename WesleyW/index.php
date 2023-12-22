<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Welcome</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
  </head>
  <body>
    <h1>General Good</h1>
    <table border="1">
      <tr><th>Description</th><th>Price</th><th>Quantity</th><th>Action</th></tr>
    <?php
      session_start();
      $roleId = isset($_SESSION["roleId"]) ? $_SESSION["roleId"] :0;
      if($roleId==1) // admin
      {
        echo "<p><a href='admin.php'>Admin Dashboard</a> | <a href='logout.php'>Logout</a> | <a href='manage-items.php'>Manage Items</a></p>";
      }else if( $roleId == 0) {
        echo "<p><a href='login.php'>Login</a> | <a href='viewcart.php'>View Cart</a> | <a href='contact-us.html'>Contact Us</a></p>";
      }else {
        echo "<p><a href='customer.php'>Customer Dashboard</a> | <a href='logout.php'>Logout</a> | <a href='viewcart.php'>View Cart</a> | <a href='contact-us.html'>Contact Us</a></p>";
      }
      include_once("dao.php");
      $db = new Database();
      $items=$db->getItems();
    //  var_dump($items);
      foreach ($items as $item){
        $id = $item['itemId'];
        echo "<tr><td>" .$item['itemDescription'] . "</td><td>" . $item['price']. "</td><td>" . $item['quantity'] . "</td>"
        . "<td><a href='add2cart.php?id=$id'>Add To Cart</a></td></tr>";
      }

    ?>
    </table>
  </body>
</html>
