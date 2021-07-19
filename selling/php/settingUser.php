<?php
function  conn(){
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "sanoslong";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    return $conn;
     } 
     $sql = "SELECT  email, CONCAT(City, Street) AS address,  user_name,mobile FROM user,usermobile WHERE usermobile.id_user=1 AND user.user_id=1";
     $result = conn()->query($sql);
     $out="";$i=0;
     if ($result->num_rows > 0) {
         // output data of each row
         while($row = $result->fetch_assoc()) {
         


          $myopj["user_name"]= $row["user_name"];
          $myopj["mobile"]= $row["mobile"];
           $myopj["email"]= $row["email"];
           $myopj["address"]=$row["address"];
        
           $arr[$i]=$myopj;  $i++;  }
           $json=json_encode($arr);
        echo($json);
     } else {
         echo "0 results";
  
     }

     
     ?>