 <?php
class Database
{
    public function getConn($idx=1) 
    {
        $dsn = "mysql:dbname=test;host=127.0.0.1;port=3306";
        $user = "root";
        $pwd = "";
        $db = new PDO($dsn, $user, $pwd);

        return $db;
    }

    public function query($query) {
        $db = $this->getConn(2);
        $stmt = $db->query($query);

        return $stmt;
    }
    public function exec ($sql, $values=null)
    {
         $db = $this->getConn(2);
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
}
$db = new Database();
$rows = $db->query("SELECT * FROM users")->fetchAll();
foreach ($rows as $row)
{
    echo $row['username'];
}
?>


