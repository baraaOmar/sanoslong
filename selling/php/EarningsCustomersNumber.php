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
$date_start= $_POST['date_start'];
$date_end= $_POST['date_end'];

$sql1 = "SELECT IFNULL(sum(paid),0) as total FROM p_sub,period WHERE period.period_id=p_sub.period_id and ADDDATE(date_start, INTERVAL period MONTH) between '$date_start'and '$date_end'  AND date_start BETWEEN '$date_start' AND '$date_end' AND approved=1";
$result1 = conn()->query($sql1);
if($row = $result1->fetch_assoc())

$myopj["total"]= $row["total"];



$sql2 = "SELECT  IFNULL(sum(order_meal.price*amount)-sum(order_meal.price*amount* IFNULL(value/100,0)),0) as result FROM meal,order_meal,m_sale WHERE date between'$date_start' and '$date_end' and isReady=1 and m_sale.sale_id=order_meal.sale_id and meal.meal_id =order_meal.meal_id ";
$result2 = conn()->query($sql2);
     
if ($result2->num_rows > 0) {
           // output data of each row
         if( $row = $result2->fetch_assoc())
            
          
             $myopj["result"]= $row["result"];
        
             $arr[0]=$myopj;  
             $json=json_encode($arr);
         
         
          echo($json);
         
       } else echo "0@#$%^&*()_+=";
  
       
      
       ?>
    