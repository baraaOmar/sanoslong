<?php
 function  conn(){
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$db = "sanoslong";
$conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
return $conn;
 } 


 
 $date_start= $_POST['date_start'];
 $date_end= $_POST['date_end'];
 $Difference_In_Day=$_POST['Difference_In_Day'];
 
 
 
 
 $j=0;


 while($j<$Difference_In_Day){
$check="SELECT approved,date_start FROM p_sub,period WHERE approved=1 and user_id=1 AND ADDDATE('$date_start', INTERVAL '$j' DAY) BETWEEN date_start and ADDDATE(date_Start, INTERVAL period MONTH)  AND  p_sub.period_id=period.period_id";
$re = conn()->query($check);


$i=0;
if ($re->num_rows > 0)
{

  
  
    while($i<5){
$sql = "SELECT name,mealType FROM meal,subscriptionresturant WHERE mealType='$i' and date_meal_ordered=ADDDATE('$date_start', INTERVAL '$j' DAY)  and meal.meal_id =subscriptionresturant.meal_id";
 $result = conn()->query($sql);
  
       if ($result->num_rows > 0) {
           // output data of each row
           while($row = $result->fetch_assoc()) {
            
            $myopj["name"]= $row["name"];
             $myopj["mealType"]= $row["mealType"];
            
          
             $arr[$j][$i]=$myopj;  }
          
         
       } else {
        $myopj["name"]= "------";
             $myopj["mealType"]= -1;
             $arr[$j][$i]=$myopj;
          }
          $i++; 
         
         } 
      
      
     }
    /* else{ $myopj["name"]= "400-";
      $myopj["mealType"]= "-1";
      $arr[$j][0]=$myopj; $arr[$j][1]=$myopj; $arr[$j][2]=$myopj; $arr[$j][3]=$myopj; $arr[$j][4]=$myopj;} */ 
     $j++;
  
} $json=json_encode($arr);echo($json);  
          //$sql = "SELECT date_meal_ordered,time_meal_ordered,paid,period,date_meal_wanted,approved,time_meal_wanted,price-paid as due FROM subscriptionresturant,period WHERE user_id=1";
 /*   $myopj["date_meal_ordered"]= $row["date_meal_ordered"];
             $myopj["time_meal_ordered"]= $row["time_meal_ordered"];
            
             $myopj["paid"]=$row["paid"];
             $myopj["period"]= $row["period"];
             $myopj["date_meal_wanted"]= $row["date_meal_wanted"];
             $myopj["time_meal_wanted"]=$row["time_meal_wanted"];
             $myopj["due"]=$row["due"];
             $myopj["approved"]=$row["approved"]; */
       


          //   SELECT approved,date_start FROM p_sub,period WHERE approved=1 and user_id=1 AND ADDDATE("2017-06-15", INTERVAL 1 DAY) BETWEEN date_start and ADDDATE(ADDDATE("2017-06-15", INTERVAL 1 DAY), INTERVAL period MONTH)AND "2017-06-15" BETWEEN date_start and ADDDATE("2017-06-15", INTERVAL period MONTH) AND p_sub.period_id=period.period_id

       /* <?php
 function  conn(){
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$db = "sanoslong";
$conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
return $conn;
 } 


 
 //$date_start= $_POST['date_start'];
 //$date_end= $_POST['date_end'];
 //$Difference_In_Day=$_POST['Difference_In_Day'];
 
 
 
 
 $j=0;


 while($j<$Difference_In_Day){
$check="SELECT approved,date_start FROM p_sub,period WHERE approved=1 and user_id=1 AND ADDDATE('$date_start', INTERVAL '$j' DAY) BETWEEN date_start and ADDDATE(date_Start, INTERVAL period MONTH)  AND  p_sub.period_id=period.period_id";
$re = conn()->query($check);


$i=0;
if ($re->num_rows > 0)
{



    while($i<5){
$sql = "SELECT name,mealType FROM meal,subscriptionresturant WHERE mealType='$i' and date_meal_ordered=ADDDATE('$date_start', INTERVAL '$j' DAY)  and meal.meal_id =subscriptionresturant.meal_id";
 $result = conn()->query($sql);
  
       if ($result->num_rows > 0) {
           // output data of each row
           while($row = $result->fetch_assoc()) {
            
            $myopj["name"]= $row["name"];
             $myopj["mealType"]= $row["mealType"];
            
           
             $arr[$i][$j]=$myopj;  }
             $json=json_encode($arr);
          echo($json);
       } else {
        $myopj["name"]= "------";
             $myopj["mealType"]= -1;
          }
          $i++; 
       } 
       $json=json_encode($arr);
       echo($json);
      
    } $j++;
      
}
          //$sql = "SELECT date_meal_ordered,time_meal_ordered,paid,period,date_meal_wanted,approved,time_meal_wanted,price-paid as due FROM subscriptionresturant,period WHERE user_id=1";
 /*   $myopj["date_meal_ordered"]= $row["date_meal_ordered"];
             $myopj["time_meal_ordered"]= $row["time_meal_ordered"];
            
             $myopj["paid"]=$row["paid"];
             $myopj["period"]= $row["period"];
             $myopj["date_meal_wanted"]= $row["date_meal_wanted"];
             $myopj["time_meal_wanted"]=$row["time_meal_wanted"];
             $myopj["due"]=$row["due"];
             $myopj["approved"]=$row["approved"]; */
       


          //   SELECT approved,date_start FROM p_sub,period WHERE approved=1 and user_id=1 AND ADDDATE("2017-06-15", INTERVAL 1 DAY) BETWEEN date_start and ADDDATE(ADDDATE("2017-06-15", INTERVAL 1 DAY), INTERVAL period MONTH)AND "2017-06-15" BETWEEN date_start and ADDDATE("2017-06-15", INTERVAL period MONTH) AND p_sub.period_id=period.period_id

       
       ?>
     
      
    