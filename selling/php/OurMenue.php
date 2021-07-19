<?php

function  conn(){
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "sanoslong";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    return $conn;
     } 
     
        $sql = "SELECT `meal_id`, `name`, `price`, `img`, `ingredients`, `calori`, `love`, `star`, `remove` FROM `meal` WHERE remove =0";
       $result = conn()->query($sql);
       $out="";$i=0;
       if ($result->num_rows > 0) {
           // output data of each row
           while($row = $result->fetch_assoc()) {
           

$myopj["meal_id"]=rand(1000000,9000000).$row["meal_id"];
            $myopj["name"]= $row["name"];
             $myopj["calori"]= $row["calori"];
           
             $myopj["price"]=$row["price"];
             $myopj["star"]= $row["star"];
             $myopj["love"]= $row["love"];
             $myopj["ingredients"]=$row["ingredients"];
             $myopj["img"]=$row["img"];
             $arr[$i]=$myopj;  $i++;  }
             $json=json_encode($arr);
          echo($json);
       } else {
           echo "0 results";
    
       }


?>