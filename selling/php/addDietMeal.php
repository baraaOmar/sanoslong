<?php
function Con()
{
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$db = "sanoslong";
$conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);

return $conn;
} 
$con=con();
$food="select name,calory from food ";
$result = $con->query($food);$i=0;
while($row = $result->fetch_assoc()) {
    $myOpj["name"]=$row["name"] ;
    $myOpj["calory"]=$row["calory"] ;
   $arr[$i]=$myOpj; 
$i++;
}

$json=json_encode($arr);
echo($json);
?>