<?php //code to set agree on =1 so this action for add new supscriber
 function Con()
 {
 $dbhost = "localhost";
 $dbuser = "root";
 $dbpass = "";
 $db = "sanoslong";
 $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
 
 return $conn;
 } 
 //$dateStart= $_POST['date_start']; $dateEnd=$_POST['date_end'];;
  //  $period= $_POST['period'];
//	$name= $_POST['name'];
//	$date= $_POST['date'];
  //  $time= $_POST['time'];
  
$count=0;
/*
 //   $obj = JSON.parse($result);
  
  $con=con();
$sql="update admin set first ='jom' where admin_id=1";//تجربة
$result=$con->query($sql);

    // output data of each row
  //true code to get user_id
  $boolean=1;
$s="SELECT user_id FROM user where user_name like'baraa omar'";//i get user id 
if(!empty($result=$con->query($s))){
if ($result->num_rows > 0) {
    // output data of each row
   $row = $result->fetch_assoc();
$id=$row["user_id"]; 
}}else{ $boolean=0;} 
 //$lastSub="select max(date_start),max(time_start) where user_id='$id'";
    
//$date_last_sup="SELECT date FROM `subscrip` where user_id ='$s' ORDER BY date ASC";//last supscription xx

//$period="select period from period,p_sub where p_sub.period_id=period.period_id AND user_id=1 and date_start=2019-07-03 and time_start=08:03:06 and approved=1";//period for distinct sub
//true code to return period
/*
$period="select period from period,p_sub where p_sub.period_id=period.period_id AND p_sub.user_id=1 and date_start='2019-07-03' and time_start='08:03:06' and approved=1";

$resut=$con->query($period);
if(!empty($resut)){
if ($resut->num_rows > 0) {
    // output data of each row
   $row = $resut->fetch_assoc();
$period_=$row["period"]; 
    }}else {$boolean=0; echo $boolean;}
*/
  //  $checkIn="select date_start from p_sub where date_start<='$dateStart' and  DATE_ADD(date_start,INTERVAL '$period_' month)>='$dateStart' and  approved=1 and user_id= ".$id;

  //DATE_ADD('$dateStart',INTERVAL 7 day)<='$dateEnd'and
    //here code to ensure that check is true
///$result=$con->query($checkIn);
//if(!empty($result)){
//if ($result->num_rows > 0  ) {
    // output data of each row
  // $row = $result->fetch_assoc(); echo "true";
//i didnt need this return value 
  //  }}else $boolean=0;
  
//get from js
//$getFoodForEachMeal="SELECT food from food,subscrip where food.food_id=subscrip.food_id AND date='d' and type='1'"
//if($dateEnd>=$date_last_sup && $dateStart>=$date_last_sup)
/*
$c=con();
$selectFood="SELECT food.name FROM subscrip, food where subscrip.food_id=food.food_id and subscrip.date='2019-12-02' and type='1' and user_id=0";
$result = $c->query($sql); 
if ($result === TRUE) {
   echo"bbbbb";
    if ($result->num_rows > 0 )//meal for each day
    while($row=$result->fetch_assoc()){
        echo"b";
    }} */
$i=0;$j=0;$con=con();
     //code to know num of day
//if($boolean===1)

while( $i<7){//to go on each day 1---7
    
    for($j=0;$j<5;$j++){//to go on each meal type
        //  $selectFood="SELECT food.name FROM subscrip, food where subscrip.food_id=food.food_id and subscrip.date=DATE_ADD('2019-12-02',INTERVAL 0 day) and type='0' and user_id=0";
        $sql = "SELECT food.name FROM subscrip, food where subscrip.food_id=food.food_id and subscrip.date=DATE_ADD('2019-12-02',INTERVAL 0 day) and type='1' and user_id=0";
 
 {
       
        if ($result->num_rows > 0 )//meal for each day
        while($row=$result->fetch_assoc()){
        $myOpj["name"]=$row[$i][$j] ;
        $arr[$i][$j]=$myOpj;  } 
    }}
    $i++; //send food
}
$json=json_encode($arr);
echo($json);

//else { echo "Error: " . $selectFood . "<br>" . $con->error;} 
?>