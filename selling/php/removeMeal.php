<?php



function  conn(){
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "sanoslong";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    return $conn;
     } 
     
        $sql = "DELETE FROM `meal` WHERE meal_id=2";
         $result = conn()->query($sql);
      
    echo "deleted is done";
?>

