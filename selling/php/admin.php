<?php
include 'y.php';
conn();
showsubscriper();
function showsubscriper(){
    $sql ="SELECT user_name,date_start,time_start,period,approved FROM p_sub,user,period WHERE (user.user_id=p_sub.user_id AND period.period_id=p_sub.period_id)";

    $result = conn()->query($sql);
    $out="";

    if ($result->num_rows > 0) {
        // output data of each row
        $i=0;
       // $myOpj=new stdClass();
        while($row = $result->fetch_assoc()) {
            $myOpj["name"]= $row["user_name"];
          $myOpj["date"]= $row["date_start"]; 
            $myOpj["time"]=$row["time_start"] ;
            $myOpj["period"]=$row["period"] ;
            $myOpj["approved"]=$row["approved"] ;
            $arr[$i]=$myOpj;
       $i++;
        }$json=json_encode($arr);
        echo $json;
    } else {
        echo "0 results";
 
    }}
  //  offf();
 
?>
