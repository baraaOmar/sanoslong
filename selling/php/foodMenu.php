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
            $sql1=  "SELECT IFNULL( sum(value),0) as value FROM `m_sale` WHERE SYSDATE() BETWEEN dateS and dateF and meal_id=$row[meal_id]";
     $result1 = conn()->query($sql1);
     $out="";$i=0;
     if ($result1->num_rows > 0) 
     {
        while($row1 = $result1->fetch_assoc())
        $myopj["value"]= $row1["value"];
     }
    
$myopj["meal_id"]=rand(10000000,90000000).$row["meal_id"];
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