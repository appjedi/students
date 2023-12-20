<?php
function getConn($idx=1) 
{
    if($this->conn)
    {
        return $this->conn;
    }
    try {
        $dsn = "mysql:dbname=wesley;host=127.0.0.1;port=3306";
        $user = "root";
        $pwd = "Jedi2023";
        $this->conn = new PDO($dsn, $user, $pwd);

        return $this->conn;
    }catch (PDOException $ex)
    {
        return null;
    }
    }
?>