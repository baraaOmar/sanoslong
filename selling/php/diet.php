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
//from js
$con=con();
  $period= $_POST['period'];
	$name= $_POST['name'];
	$date= $_POST['date'];
   $time= $_POST['time'];
   $date_cur;
  //get user id
   $s="SELECT user_id FROM user where user_name like'$name'";//i get user id 
   if(!empty($result=$con->query($s))){
   if ($result->num_rows > 0) {
       // output data of each row
      $row = $result->fetch_assoc();
   $id=$row["user_id"]; 
   }}else{ $boolean=0;} 
   $date_cur=$date;
 $i=0;$j=0; $str;
 while( $i<7){//to go on each day 1---7
   // date_add($date_cur,date_interval_create_from_date_string("$i days"));
   $checkIn="select date_start from p_sub where date_start<='$date' and  DATE_ADD(date_start,INTERVAL '$period' month)>=DATE_ADD('$date',INTERVAL '$i' day) and  approved=1 and user_id= ".$id;
  
   $checkEnd="select date_start from p_sub where   DATE_ADD(date_start,INTERVAL '$period' month)>=DATE_ADD('$date',INTERVAL '$i' day) and  approved=1 and user_id= ".$id;
   if(!empty($result=$con->query($checkEnd))){$str="not sub";}
   if(!empty($result=$con->query($checkIn))){
    $d=  date('Y-m-d', strtotime($date. ' + '.$i .'days'));
  // $date_cur=date( 'Y-m-d', strtotime(' +' .$i.' days'));
   
   
    for($j=0;$j<5;$j++){//to go on each meal type
 $sql = "SELECT food.name FROM subscrip, food where subscrip.food_id=food.food_id and subscrip.date=DATE_ADD('$date',INTERVAL '$i' day) and type='$j' and user_id=0  ";
 $result = $con->query($sql);
 if($result===false or $result->num_rows <= 0){$str="no meal";
  $myOpj["name"]=$str ;
 $myOpj["date"]= $d;
  $arr[$i][$j]=$myOpj; 
 }else{
 
   // output data of each row
    while($row = $result->fetch_assoc()) {
         $myOpj["name"]=$row["name"] ;
         $myOpj["date"]=$d ;
        $arr[$i][$j]=$myOpj; 
    
    }}}
   
    $i++; }}$json=json_encode($arr);
    echo($json);
 ?>
