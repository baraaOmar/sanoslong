<?php
 function  conn(){
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$db = "sanoslong";
$conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
return $conn;
 } 

$sql = "SELECT dateRequest,time_start,timeRequest,date_start,user_name,mobile,Street,City,paid,period,type,approved,price-paid as due FROM p_sub,period,user,usermobile WHERE usermobile.id_user=1 and period.period_id=p_sub.period_id  and
user.user_id=p_sub.user_id";


$result = conn()->query($sql);
       $out="";$i=0;
       if ($result->num_rows > 0) {
           // output data of each row
           while($row = $result->fetch_assoc()) {
            
            $myopj["dateRequest"]= $row["dateRequest"];
             $myopj["time_start"]= $row["time_start"];
             if($row["type"]==1)
             $myopj["type"]= "resturant";
             if($row["type"]==0)
             $myopj["type"]= "diet";
            
             $myopj["paid"]=$row["paid"];
             $myopj["period"]= $row["period"];
             $myopj["timeRequest"]= $row["timeRequest"];
             $myopj["date_start"]=$row["date_start"];
             $myopj["due"]=$row["due"];
             $myopj["approved"]=$row["approved"];

             $myopj["mobile"]=$row["mobile"];
             $myopj["user_name"]=$row["user_name"];
           //  $myopj["address"]= $row["City"]+", "+$row["Street"];
             $arr[$i]=$myopj;  $i++;  }
             $json=json_encode($arr);
          echo($json);
       } else {
        echo "0@#$%^&*()_+=";

    
       }  ?>