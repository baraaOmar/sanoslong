<?php
 function  conn(){
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$db = "sanoslong";
$conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
return $conn;
 } 
 
$check="SELECT approved,date_start FROM p_sub,period WHERE approved=1 and user_id=0 AND '2020-03-07' BETWEEN date_start and ADDDATE('2020-03-07', INTERVAL period MONTH) AND    p_sub.period_id=period.period_id";
$re = conn()->query($check);
if ($re->num_rows > 0)
{
$sql = "SELECT name,type FROM food_diet,subscrip WHERE date = '2020-04-19' and food_diet.food_id=subscrip.food_id and user_id=0";
 $result = conn()->query($sql);
       $out="";$i=0;
       if ($result->num_rows > 0) {
           // output data of each row
           while($row = $result->fetch_assoc()) {
            
            $myopj["name"]= $row["name"]." , ";
             $myopj["type"]= $row["type"];
             $arr[$i]=$myopj;  $i++;  }
             $json=json_encode($arr);
          echo($json);
       }  else {
         echo "there is no meal in this subscription period";
        }
    
       } else {
         echo "this day is not in subscription period";
        }
         
       
       ?>
    