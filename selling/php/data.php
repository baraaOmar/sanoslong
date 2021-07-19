<?php
function OpenCon()
 {
 $dbhost = "localhost";
 $dbuser = "root";
 $dbpass = "";
 $db = "chat";
 $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
 
 return $conn;
 }
 
function CloseCon($conn)
 {
 $conn -> close();
 }
 function show(){
    $sql = "SELECT id FROM masseges";
    $result = OpenCon()->query($sql);
    echo "heee";
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            echo "id: ". $row["id"]."bb";
            echo "heee";
        }
    } else {
        echo "0 results";

    }
    OpenCon()->close();
           
 }
