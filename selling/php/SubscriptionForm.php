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
$mobilePhone= $_POST['mobilePhone'];
$subscriptionPeriod= $_POST['subscriptionPeriod'];
$subscriptionType= $_POST['subscriptionType'];


$feedSql="SELECT user_name,pass,user_id FROM user WHERE user_name='$userName' AND pass='$password'";
$result = conn()->query($feedSql);

if ($result->num_rows >0) {
  
// output data of each row
if($row = $result->fetch_assoc()) {
    $userid=$row["user_id"];
   
    $feedSql3="INSERT INTO `usermobile`(`id-user`, `mobile`) VALUES ('$userid' ,'$mobilePhone')";
    conn()->query($feedSql3);
    $sql = "INSERT INTO `p_sub`(`date_start`, `time_start`, `user_id`, `period_id`, `approved`, `dateRequest`, `timeRequest`, `paid`, `type`) VALUES ('0000-00-00','00:00:00.000000','$userid',1,0,SYSDATE(),NOW(),0,1)";
   if( conn()->query($sql)===true)

{echo ("subscription request sent");}
else{
  echo("there is aproblem  in this process");
  }
}
} 



?>