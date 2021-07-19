<?php
 function conn(){
  
        $dbhost = "localhost";
        $dbuser = "root";
        $dbpass = "";
        $db = "sanoslong";
        $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
        return $conn;
        
}

$maelName= $_POST['mealName'];
$mealPrice= $_POST['mealPrice'];
$mealCalory= $_POST['mealCalory'];
$mealType= $_POST['mealType'];
$mealIngrediant= $_POST['mealIngrediant'];
$mealImage=$_POST['mealImage'];

$feedSql="INSERT INTO `meal`( `name`, `price`, `img`, `ingredients`, `calori`, `love`, `star`,`remove`) VALUES ('$maelName' ,'$mealPrice','$mealImage','$mealIngrediant' ,'$mealCalory',0,0,0 )";
if(conn()->query($feedSql)===true){
        
 echo("insertDone");}
 else{
         acho("there is aproblem  in this process");
 }

?>