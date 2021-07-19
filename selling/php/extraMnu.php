<?php 
function Conn()
{
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$db = "sanoslong";
$conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);

return $conn;
} 
$sql="SELECT id, extra FROM extra ";
$result=conn()->query($sql);
$i=0;
if(conn()->query($sql)==true){
if($result->num_rows >0)
{
    while($row = $result->fetch_assoc()) 
    {  $myOpj["extra"]=$row["extra"];
  
$arr[$i]=$myOpj;$i++;}

$json=json_encode($arr);
echo $json;}
else{
echo "no extra";
}}
?>