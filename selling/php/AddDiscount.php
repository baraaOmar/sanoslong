<?php
function conn(){
  
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "sanoslong";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    return $conn;
    
}$meal=$_POST['meal'];
$value=$_POST['value'];
//$timeS=$_POST['timeS'];
//$timeS=$_POST['timeS'];
$dateS=$_POST['dateS'];
$dateF=$_POST['dateF'];
$timeS=$_POST['timeS'];
$timeF=$_POST['timeF'];
$sql="INSERT INTO `m_sale`( `value`, `timeS`, `timeF`, `dateS`, `dateF`, `meal_id`) VALUES ('$value','$timeS','$timeF','$dateS','$dateF',3)";
if(conn()->query($sql)===true){
echo("insert is done");}
else{
    echo("there is aproblem  in this process");
}

?>