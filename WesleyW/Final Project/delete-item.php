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
    if(!isset($_GET['id']))
    {
      die ("No ID");
    }
    $id=$_GET['id'];
    include_once("dao.php");
    $db = new Database();
    $items=$db->deleteItem($id);
    //  var_dump($items);
    header("location: manage-items.php");
    ?>