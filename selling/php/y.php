

<?php
//if($_POST['q']=='showTeam')
//showTeam();
//if($_POST['q']=='showFeed')
//showTeam();
//showfeed();

 function  conn(){
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$db = "sanoslong";
$conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
return $conn;
 }

   




//}

?>

