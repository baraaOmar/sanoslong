<?php
 
//include 'connectionDataBase.php';
function  conn(){
     $dbhost = "localhost";
     $dbuser = "root";
     $dbpass = "";
     $db = "sanoslong";
     $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
     return $conn;
      } 
     $userName= $_POST['userName'];
     $password= $_POST['password'];
     $firstName= $_POST['firstName'];
     $lastName= $_POST['lastName'];
     $emailUp= $_POST['emailUp'];
     $city= $_POST['city'];
     $street= $_POST['street'];
     $confirmPasswordUp= $_POST['confirmPasswordUp'];
    // $profilePicture= $_POST['profilePicture'];
    $feedSql="select user_name from user where user_name like";
    $result = conn()->query($feedSql);
    if ($result->num_rows > 0) {
  
$feedSql="INSERT INTO `user` ( `f_name`, `l_name`, `pass`, `email`, `City`, `Street`, `subscription`, `profile_picture`, `user_name`) VALUES ('$firstName', '$lastName', '$password', '$confirmPasswordUp', '$emailUp', '$city', '$street', '0', '.m,m', '$userName');";
$result = conn()->query($feedSql);
    }
echo "sign up  done";
?>