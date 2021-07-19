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
    $period= $_POST['period'];
	$name= $_POST['name'];
	$date= $_POST['date'];
    $time= $_POST['time'];
    $con=con();
    //$obj = JSON.parse($result);
   // $user_id=conn()->query("SELECT user_id from user WHERE f_name||l_name ="+$obj->name);
       //conn()->query("insert into user(f_name) values('baraa')");
      // conn()->query("update p_sub set approved=1 where user_id=3 and date =".$obj->date."and time=".$obj->time);
      // echo $result;
       //SELECT user_id from user WHERE f_name||l_name =
   // function show_detail(){
//SELECT user_id FROM `p_sub`,user,period  WHERE f_name="" AND l_name="" AND p_sub.period_id=p_sub.period_id AND p_sub.date_start="" AND p_sub.time_start="" AND period.period="";
    
//$sql="update admin set first ='zft' where admin_id=1";
$s="SELECT user_id FROM user where user_name ='$name'";
$result=$con->query($s);
if ($result->num_rows > 0) {$i=0;
    // output data of each row
   $row = $result->fetch_assoc();
$id=$row["user_id"]; $i++;
    }
$qur="update p_sub,period set approved=1 where date_start='$date' and time_start ='$time' and period.period= $period and period.period_id=p_sub.period_id and user_id=$id";

if ($con->query($qur) === TRUE) {
    echo "New record updated successfully";
} else {
    echo "Error: " . $s . "<br>" . $con->error;
}
	   
	   




?>