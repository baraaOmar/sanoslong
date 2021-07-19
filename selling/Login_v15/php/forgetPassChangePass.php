<?php
include 'connectionDataBase.php';
$userName= $_POST['userName'];
//$emailForgetPass= $_POST['emailForgetPass'];
$newPasswordForgetPass=$_POST['newPasswordForgetPass'];
$feedSql="UPDATE user set pass='$newPasswordForgetPass' where user_name='$userName'";
$result = conn()->query($feedSql);
echo"done";



?>