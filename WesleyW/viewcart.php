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
    <h2>Shopping Cart</h2>
    <table border="1">
      <tr><th>Description</th><th>Price</th></tr>
<?php
    $cart = $_SESSION['cart'];
    include_once("dao.php");
    $db = new Database();
    $items=$db->getItemsInCart($cart);
    //  var_dump($items);
    $total=0;
    foreach ($items as $item){
        $id = $item['itemId'];
        $total += $item['price'];
        echo "<tr><td>" .$item['itemDescription'] . "</td><td>" . $item['price']. "</td></tr>";
    }
    echo "</table>";
    echo "<h3>Total $total</h3>";
?>
    
<h1><a href='index.php'>Continue Shopping</a> <a href='purchase.php'>Purchase</a></h1>

</body>
</html>
