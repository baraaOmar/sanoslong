<?php
 function  conn(){
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$db = "sanoslong";
$conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
return $conn;
 } 
 
    $sql = "SELECT first,last,job_position,picture FROM admin";
   $result = conn()->query($sql);
   $out="";$i=0;
   if ($result->num_rows > 0) {
       // output data of each row
       while($row = $result->fetch_assoc()) {
        
        $myopj["name"]= $row["first"]. $row["last"];
         $myopj["job_position"]= $row["job_position"];
        
         $myopj["picture"]=$row["picture"];
         $arr[$i]=$myopj;  $i++;  }
         $json=json_encode($arr);
      echo($json);
   } else {
       echo "0 results";

   }
 
?>