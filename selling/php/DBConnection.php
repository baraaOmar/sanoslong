<?php
$test ="localhost";
$pass="";
$user="root";
$DBname="sanoslong";
$conn= new mysqli($test,$user,$pass,$DBname);

mysqli_query($conn,"SET NAMES utf8;");

	mysqli_query($conn,"SET CHARACTER_SET utf8;");
if($conn->connect_error){
die("Connection Faild");
}



?>