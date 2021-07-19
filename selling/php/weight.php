<?php
function  conn(){
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$db = "sanoslong";
$conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
return $conn;
 } 
$i=0;
 $check="SELECT date,weight FROM weight WHERE user_id=1 ";
 $re = conn()->query($check);
 if ($re->num_rows > 0)
 {

    $myopj["date"]= $row["date"];
    $myopj["weight"]= $row["weight"];
    $arr[$i]=$myopj;  $i++;  }
 else echo("no data");


 ?>