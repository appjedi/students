<?php
    session_start();
    $email=$_POST['email'];
    $name=$_POST['name'];
    $message=$_POST['message'];
    
    $mailMessage = "<p>Email: $email</p><p>Name: $name</p><p>Message: $message</p>";

    //email("admin@mystore.com", "Message from customer", $mailMessage);
    echo "<h1>Your Message was sent</h1>";

    echo $mailMessage;

    echo "<h1><a href='index.php'>Continue Shopping</a></h1>";
?>

    


