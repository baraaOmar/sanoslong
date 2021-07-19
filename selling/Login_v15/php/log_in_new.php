<?php
include 'connectionDataBase.php';
     $userName= $_POST['userName'];
     $password= $_POST['password'];
     
$feedSql="SELECT user_name,pass FROM admin WHERE user_name='$userName' AND pass='$password'";
$result = conn()->query($feedSql);

if ($result->num_rows > 0) {
  
    // output data of each row
    if($row = $result->fetch_assoc()) {
     
     $myopj["userName"]=  $row["user_name"];
     $myopj["password"]= $row["pass"];
    
       }
$json=json_encode($myopj);
   echo $json;
} 
else {
  $feedSql="SELECT user_name,pass FROM user WHERE user_name='$userName' AND pass='$password'";
$result = conn()->query($feedSql);

if ($result->num_rows > 0) {
  
    // output data of each row
    if($row = $result->fetch_assoc()) {
     
     $myopj["userName"]=  $row["user_name"];
     $myopj["password"]= $row["pass"];
    
       }
$json=json_encode($myopj);
   echo $json;
} 
else{
  /*  $myopj["name"]=  "0!@#$%^&*()_+=";
    $myopj["password"]= "0!@#$%^&*()_+=";
    $arr[0]=$myopj;   
    $json=json_encode($arr); */
    echo "0@#$%^&*()_+=";
  
}
}

?>