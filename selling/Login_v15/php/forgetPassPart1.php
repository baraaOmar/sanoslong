<?php
include 'connectionDataBase.php';
     $userNameForgetPass= $_POST['userNameForgetPass'];
     $emailForgetPass= $_POST['emailForgetPass'];
     
$feedSql="SELECT user_name,email FROM user WHERE user_name='$userNameForgetPass' AND email='$emailForgetPass'";
$result = conn()->query($feedSql);

if ($result->num_rows > 0) {
  
    // output data of each row
    if($row = $result->fetch_assoc()) {
     
     $myopj["userNameForgetPass"]=  $row["user_name"];
     $myopj["emailForgetPass"]= $row["email"];
    
       }
$json=json_encode($myopj);
   echo $json;
} else{
  $feedSql="SELECT user_name,email FROM admin WHERE user_name='$userNameForgetPass' AND email='$emailForgetPass'";
$result = conn()->query($feedSql);

if ($result->num_rows > 0) {
  
    // output data of each row
    if($row = $result->fetch_assoc()) {
     
     $myopj["userNameForgetPass"]=  $row["user_name"];
     $myopj["emailForgetPass"]= $row["email"];
    
       }
$json=json_encode($myopj);
   echo $json;
} 
else {
  /*  $myopj["name"]=  "0!@#$%^&*()_+=";
    $myopj["password"]= "0!@#$%^&*()_+=";
    $arr[0]=$myopj;   
    $json=json_encode($arr); */
       echo "0@#$%^&*()_+=";
  
}
}


?>