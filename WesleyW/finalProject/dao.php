 <?php
class Database
{
    private $conn=null;
    public function getConn($idx=1) 
    {
        if($this->conn)
        {
            return $this->conn;
        }
        try {
            $dsn = "mysql:dbname=dev;host=127.0.0.1;port=3306";
            $user = "root";
            $pwd = "Jedi2023";
            $this->conn = new PDO($dsn, $user, $pwd);

            return $this->conn;
        }catch (PDOException $ex)
        {
            return null;
        }
    }
    public function query($query) {
        try {
            $db = $this->getConn();
            $stmt = $db->query($query);

            return $stmt->fetchAll();
        }catch (PDOException $ex)
        {
            return null;
        }
    }
    public function exec ($sql, $values=null)
    {
         $db = $this->getConn();
         $stmt =$db->prepare($sql);
         $stmt->execute($values);
         return $stmt;
    }
    public function call ($sql)
    {
         $db = $this->getConn(1);
         $stmt =$db->prepare($sql);
         $stmt->execute();
         return $stmt;
    }
    public function test() {
        $stmt = $this->query("SELECT * FROM users ");

        while ($row = $stmt->fetch()) {
            echo $row['username'] . "<br />\n";
        }
    }
    public function getItems ()
    {
       
        $stmt = $this->query("SELECT * FROM items ");
        
        return $stmt->fetchAll();
    }
    public function getItemsInCart ($items)
    {
       
        $stmt = $this->query("SELECT * FROM items WHERE itemId IN ($items)");
        
        return $stmt->fetchAll();
    }
    public function auth ($username, $password) {
        $stmt = $this->exec("SELECT * FROM users WHERE username=? AND password=?", [$username, $password]);
        if($stmt->rowCount() <1)
        {
            return 0;
        }
        $user=$stmt->fetch();
        return $user["roleId"];
    }
    public function close()
    {
        try {
            $conn->close();
            $conn=null;
        }catch (PDOException $ex)
        {

        }
    }
}

?>


