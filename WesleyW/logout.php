<?php
    session_start();

    unset($_SESSION["roleId"]);

    header("location: index.php");

?>