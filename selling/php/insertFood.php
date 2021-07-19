<?php
function Con()
{
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$db = "sanoslong";
$conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);

return $conn;
} $con=con(); 
$Uname= $_POST['Uname'];
$Udate=$_POST['Udate'];
$foocal=$_POST['foocal'];
$type=$_POST['type'];$typ=-1;
if($type=="Break_fast"){
$typ=0;
}else if($type=="Sn"){
  $typ=1;
}else if($type=="Dinner"){
  $typ=2;
}else if($type=="Snack2"){
  $typ=3;
}else if($type=="Lunch"){
  $typ=4;
}


$s="SELECT user_id FROM user where user_name =$Uname";

if ($con->query($s)->num_rows > 0) 
{
    // output data of each row
    $result=$con->query($s); 
   $row = $result->fetch_assoc();
$id_u=$row["user_id"]; 
}
$sql="select food_id from food where CONCAT( name,calory) ='$foocal'";
$result = $con->query($sql);$i=0;
$row = $result->fetch_assoc();
if ($result->num_rows > 0) {
  // output data of each row
 
$id_f=$row["food_id"]; 
  }
  echo $Uname.$Udate.$foocal.$type;
  $addMeal="insert into subscrip values($typ,'$Udate',$id_u,$id_f)";//insert statment
  //$addMeal="insert into subscrip values(1,$Udate,1,2)"; 
  $con->query($addMeal);

?>