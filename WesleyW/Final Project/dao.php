 <?php
class Database
{
    public function getConn($idx=1) 
    {
        $dsn = "mysql:dbname=wesley;host=127.0.0.1;port=3306";
        $user = "root";
        $pwd = "Jedi2023";
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
    public function getItems ()
    {
        $stmt = $this->query("SELECT * FROM items ");   
        return $stmt->fetchAll();
    }
    public function getItemsInCart ($items)
    {
        $query = "SELECT * FROM items WHERE itemId IN ($items)";
        $stmt = $this->query($query);
        
        return $stmt->fetchAll();
    }
    function deleteItem ($id)
    {
        $delete = "DELETE FROM items WHERE itemId = ?";
        $stmt = $this->exec($delete, [$id]);
    }
    function addItem ($values)
    {
        $insert = "INSERT INTO items(categoryId,itemDescription,price,quantity) VALUES(?,?,?,?)";
        $stmt = $this->exec($insert, $values);
    }
    function purchase ($cart, $customer)
    {
        try {
            $values = [
                $customer['lastName'], 
                $customer['firstName'],
                $customer['address'],
                $customer['city'],
                $customer['state'],
                $customer['zipCode'],
                $customer['creditCardNumber'],
                $customer['creditCardExpDate'],
                $customer['creditCardSecurityCode']
            ];
            $sql = "INSERT INTO orders(lastName,firstName,address,city,state,zipCode,creditCardNumber,creditCardExpDate,
            creditCardSecurityNumber,dateOrdered)VALUES(?,?,?,?,?,?,?,?,?,SYSDATE());";
            $db = $this->getConn(2);
            $stmt =$db->prepare($sql);
            $stmt->execute($values);
            $orderId = $db->lastInsertId();
            $items = explode(",", $cart);
            $sql = "INSERT INTO order_item(orderId, itemId)VALUES(?,?);";
            $stmt =$db->prepare($sql);
            $ct=0;
            foreach ($items as $itemId)
            {
                $stmt->execute([$orderId, $itemId]);
                $ct++;
            }
            return $orderId;
        }catch (PDOException $ex)
        {
            echo "Error:" . $ex;
            return -1;
        }
    }
    public function auth ($username, $password) {
        $stmt = $this->exec("SELECT userId, username,lastname,firstname,street,city,zip,roleId FROM users WHERE username=? AND password=?", [$username, $password]);
        if($stmt->rowCount() <1)
        {
            return null;
        }
        $user=$stmt->fetch();
        return $user;
    }
}

?>


