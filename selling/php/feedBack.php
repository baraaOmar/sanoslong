<?php
function  conn(){
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "sanoslong";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    return $conn;
     }
$feedSql="select f_name,l_name,text,profile_picture from user join feedback on(user.user_id=feedback.user_id)";
$result = conn()->query($feedSql);
$out="";
if ($result->num_rows > 0) {$i=0;
    // output data of each row
    while($row = $result->fetch_assoc()) {
     
     $myopj["name"]=  $row["f_name"]. $row["l_name"];
     $myopj["text"]= $row["text"];
     $myopj["profile_picture"]=$row["profile_picture"];
       $arr[$i]=$myopj;  $i++;  }
$json=json_encode($arr);
   echo $json;
} else {
    echo "0 results";

}

?>