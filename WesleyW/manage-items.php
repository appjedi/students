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
  <p><a href='index.php'>Home</a></p>
  <body>
    <h1>General Good</h1>
    <table border="1">
      <tr><th>Description</th><th>Price</th><th>Quantity</th><th>Delete</th></tr>
<?php
    $cart = $_SESSION['cart'];
    include_once("dao.php");
    $db = new Database();
    $items=$db->getItems();
    //  var_dump($items);
    foreach ($items as $item){
        $id = $item['itemId'];
        echo "<tr><td>" .$item['itemDescription'] . "</td><td>" . $item['price']. "</td><td>" . $item['quantity'] . "</td>"
        . "<td><a href='delete-item.php?id=$id'>Delete</a></td></tr>";
      }
    echo "</table>";
?>
    
<div>
      <hr/>
    <form method='POST' action='add-item.php'>
      <select name='categoryId'>
        <option value='0'>Category</option>
        <option value='1'>Electronics</option>
        <option value='2'>Computers</option>
        <option value='3'>Clothing</option>
    </select>
    Description: <input type='text' name='description' required/>
    Price: <input type='number' name='price' required/>
    Quantity: <input type='number' name='quantity' required/>
      <button>Add Item</button>
    </form>
</div>

</body>
</html>
