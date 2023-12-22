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
    <h1>Purchase</h1>
    <form method="POST" action="checkout.php">
     
      <p>
        Last Name:<br />
        <input type="text" name="lastName" />
      </p>
      <p>
        First Name:<br />
        <input type="text" name="firstName" />
      </p>
      <p>
        Address:<br />
        <input type="text" name="address" />
      </p>
      <p>
        City:<br />
        <input type="text" name="city" />
      </p>
      <p>
        State:<br />
        <input type="text" name="state" />
      </p>
      <p>
        Zip Code:<br />
        <input type="text" name="zipCode" />
      </p>
      <p>
        Credit Card#:<br />
        <input type="text" name="creditCardNumber" />
      </p>
      <p>
        Expiration Date:<br />
        <input type="text" name="creditCardExpDate" />
      </p>
      <p>
        Security Code:<br />
        <input type="text" name="creditCardSecurityCode" />
      </p>
      <p>
        <button>Purchase</button>
      </p>
    </form>
    <table border="1">
      <tr><th>Description</th><th>Price</th></tr>
<?php
// (name, address, credit card, items purchased)
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
    
<h1><a href='index.php'>Continue Shopping</a></h1>

</body>
</html>
