<?php

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

   
    $ln = $_POST['ln'];
    $email=test_input($_POST['email']);
    $mobile = test_input($_POST['mobile']);
    $address = test_input($_POST['address']);
    $pass = test_input($_POST['pass']);
    $cpass=$_POST['cpass'];

    $errors = array(); 
    
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sanouslong";
$emptyUserName=false;
$emptyEmail=false;
$emptyPass=false;
$err=false;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

 // form validation: ensure that the form is correctly filled ...
  // by adding (array_push()) corresponding error unto $errors array
  if (empty($ln)) { array_push($errors, "Username is required");$emptyUserName=true; }
  if (empty($email)) { array_push($errors, "Email is required"); $emptyEmail=true;}
  if (empty($pass)) { array_push($errors, "Password is required"); $emptyPass=true;}
  if ($pass != $cpass) {
	array_push($errors, "The two passwords do not match"); $err =true;
  }


if(!$emptyUserName && !$emptyEmail && !$emptyPass && !$err){

  // Validate password strength
$uppercase = preg_match('@[A-Z]@', $pass);
$lowercase = preg_match('@[a-z]@', $pass);
$number    = preg_match('@[0-9]@', $pass);
$specialChars = preg_match('@[^\w]@', $pass);

if(!$uppercase || !$lowercase || !$number || !$specialChars || strlen($pass) < 8) {
    echo 'Password should be at least 8 characters in length and should include at least one upper case letter, one number, and one special character.';
}
else{
$sql = "insert into user (user_name,email,mobile,address,pass)Values('".$ln."' ,'".$email."','".$mobile."','".$address."','".$pass."')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
}
}
else echo print_r($errors);

$conn->close();

}
?>