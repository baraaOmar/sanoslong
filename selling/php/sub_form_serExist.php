<?php
 function conn(){
  
        $dbhost = "localhost";
        $dbuser = "root";
        $dbpass = "";
        $db = "sanoslong";
        $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
        return $conn;
        
}

$userName= $_POST['userName'];
$password= $_POST['password'];

$feedSql="SELECT user_name,pass FROM user WHERE user_name='$userName' AND pass='$password'";
$result = conn()->query($feedSql);

if ($result->num_rows >0) {
    echo "user exist";
// output data of each row
}


 
else {

  echo "user doesnt exist";

}


?>