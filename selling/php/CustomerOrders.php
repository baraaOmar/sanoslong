<?php
 function  conn(){
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$db = "sanoslong";
$conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
return $conn;
 } 


 /*
 $name= $_POST['name'];
 $price= $_POST['price'];
 $extra=$_POST['extra'];
 $isReady= $_POST['isReady'];
 
 $location=$_POST['Difference_In_Day'];
 $date= $_POST['date_start'];
 $time= $_POST['date_end'];
 $value=$_POST['Difference_In_Day'];
 $amount=$_POST['Difference_In_Day'];
 */
$i=0;
$sql = "SELECT user_name,name,order_meal.price,extra,isReady,location,date,time,value,amount FROM meal,order_meal,m_sale,user WHERE m_sale.sale_id=order_meal.sale_id and meal.meal_id =order_meal.meal_id and user.user_id=order_meal.user_id";

$result = conn()->query($sql);
  
       if ($result->num_rows > 0) {
           // output data of each row
           while($row = $result->fetch_assoc()) {
            $myopj["user_name"]= $row["user_name"];
            $myopj["name"]= $row["name"];
             $myopj["price"]= $row["price"];
             $myopj["extra"]= $row["extra"];
             if($row["isReady"]==0)
             {$myopj["isReady"]= "NO";}
            else
            { $myopj["isReady"]= "YES";}
             $myopj["location"]= $row["location"];
             $myopj["date"]= $row["date"];
             $myopj["time"]= $row["time"];
             $myopj["value"]= $row["value"];
             $myopj["amount"]= $row["amount"];
            
           
             $arr[$i]=$myopj;  $i++;  }
             $json=json_encode($arr);
         
          $json=json_encode($arr);
          echo($json);
         
       } else{
          echo("no orders");
       }
  
       
      
       ?>
    