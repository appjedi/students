<?php
    session_start();

    unset($_SESSION["roleId"]);
    unset($_SESSION["cart"]);

    header("location: index.php");

?>