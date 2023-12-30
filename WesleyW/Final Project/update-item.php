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
    if(!isset($_POST['categoryId'])
        || !isset($_POST['price']) 
        || !isset($_POST['itemId']) 
        || !isset($_POST['quantity'])
        || !isset($_POST['itemDescription']))
    {
      die ("Missing Data");
    }
    $itemId =$_POST['itemId'];
    $categoryId=$_POST['categoryId'];
    $price=$_POST['price'];
    $quantity=$_POST['quantity'];
    $itemDescription=$_POST['itemDescription'];
    include_once("dao.php");
    $db = new Database();
    $values = [$categoryId, $itemDescription, $price, $quantity, $itemId];
    $items=$db->updateItem($values);
    //  var_dump($items);
     header("location: manage-items.php");
    ?>