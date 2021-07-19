<?php
 function  conn(){
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$db = "sanoslong";
$conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
return $conn;
 } 

$sql = "SELECT time_start,date_start,user_name,mobile,period,type  FROM p_sub,period,user,usermobile WHERE usermobile.id_user=1 and period.period_id=p_sub.period_id  and
user.user_id=p_sub.user_id and approved=1 and type=0 and SYSDATE() between date_start and ADDDATE(date_Start, INTERVAL period MONTH)";


$result = conn()->query($sql);
       $out="";$i=0;
       if ($result->num_rows > 0) {
           // output data of each row
           while($row = $result->fetch_assoc()) {
            
          
             $myopj["time_start"]= $row["time_start"];
             $myopj["period"]= $row["period"];
          
             $myopj["date_start"]=$row["date_start"];
           
        
             $myopj["mobile"]=$row["mobile"];
             $myopj["user_name"]=$row["user_name"];
           //  $myopj["address"]= $row["City"]+", "+$row["Street"];
             $arr[$i]=$myopj;  $i++;  }
             $json=json_encode($arr);
          echo($json);
       } else {
        echo "0@#$%^&*()_+=";

    
       }  ?>