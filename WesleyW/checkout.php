<?php
    session_start();
    if(!isset($_SESSION['cart']))
    {
        die ("<h1><font color='red'>Cart is empty</font></h1><h3><a href='index.php'>Continue shopping</a></h3>");
    }
?>
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
    
<?php
    $cart = $_SESSION['cart'];
    include_once("dao.php");
    $db = new Database();
    $orderId=$items=$db->purchase($cart,$_POST);
    //  var_dump($items);
    if($orderId>0)
    {
      echo "<h1><font color='green'>Purchase # $orderId</font></h1>";
    }else {
      echo "<h1><font color='red'>Cannot process your order at this time, try again later</font></h1>";
    }
?>
    
<h1><a href='index.php'>Continue Shopping</a> <a href='purchase.php'>Purchase</a></h1>

</body>
</html>
