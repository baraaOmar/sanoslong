<?php
$a = array(array("01", "A", "130"),
array("01", "B", "100"));
for ($i = 0; $i <2; $i++) {
   
  
    $myopj["id"]= $a[$i][0];
    $myopj["name"]= $a[$i][1];
    $myopj["Qt"]= $a[$i][2];
    $arr[$i]=$myopj; 
   
} $json=json_encode($arr);
echo($json); 
?>