<?php
session_start();
$cart = isset($_SESSION['cart'])?$_SESSION['cart']:"";
$id=$_GET['id'];
$list = explode(",", $cart);
foreach ($list as $item)
{
    if($id==$item)
    {
        die ("<h1><font color='red'>Item already in cart</font></h1><h3><a href='index.php'>Continue shopping</a></h3>");
    }
}
if($cart=="")
{
    $cart=$id;
}else{
    $cart .=",".$id;
}
$_SESSION['cart']=$cart;
echo "<h1><font color='green'>Item added to cart</font></h1><h3><a href='index.php'>Continue shopping</a></h3>"
?>