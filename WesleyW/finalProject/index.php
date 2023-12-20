<?php
    echo "<h1>Hello World!</h1>";
    include_once("dao.php");
    $db = new Database();
    $stmt = $db->query("SELECT * FROM users");
    $users=$stmt->fetchAll();
    foreach ($users as $user)
    {
        echo "<p>" . $user['username'] . "</p>";
    }
?>