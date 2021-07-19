<?php
function Con()
{
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$db = "sanoslong";
$conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);

return $conn;
} 
$con=con();
  $period= $_POST['period'];
	$name= $_POST['name'];
	$date= $_POST['date'];
   $time= $_POST['time'];
   $start= $_POST['start'];$i=0;$bool=false;
   if($date>=$start){//i have this date in sub
while($i<7){
    $d=  date('Y-m-d', strtotime($date. ' + '.$i .'days'));
    if($d<date('Y-m-d', strtotime($start. ' + '.$period .'months'))){
        for($j=0;$j<5;$j++){
            $sql = "SELECT food.name FROM subscrip, food where subscrip.food_id=food.food_id and subscrip.date=DATE_ADD('$date',INTERVAL '$i' day) and type='$j' and user_id=0  ";
            $result = $con->query($sql);
            $row = $result->fetch_assoc();
 if( $result->num_rows > 0){ 
    $myOpj["name"]=$row["name"] ;
    $myOpj["date"]=$d ; 
   $arr[$i][$j]=$myOpj;  $bool=true;
 } else {
   $myOpj["name"]="no meal";
   $myOpj["date"]=$d;
$arr[$i][$j]=$myOpj; $bool=true;

        }
    }


}$i++;

   }
   if( $bool===true){$json=json_encode($arr);
    echo($json);}else {echo "the date is not in subscription period ";}
   }
?>