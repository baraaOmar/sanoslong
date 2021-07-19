<?php

function  conn(){
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "sanoslong";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    return $conn;
     } 
     $id= $_POST['id'];
     $value= $_POST['value'];
     
        $sql = "INSERT INTO order_meal(user_id, meal_id, price, time, location, amount, extra, isReady) VALUES ('1','$id','$value','SYSDATE()','[value-5]','4','[value-7]','0')";
       $result = conn()->query($sql);
       
if($result===TRUE){
    echo "insert is done";
}else{echo "there is aproblem";}
      
         
           

?>