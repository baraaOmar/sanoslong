<?php

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

   
    $email = test_input($_POST['email']);
    $pass = test_input($_POST['subject']);
    $npass = test_input($_POST['npass']);
    $cnpasss = test_input($_POST['cnpasss']);

    $errors = array(); 
    
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sanouslong";
$emptyNpass=false;
$emptyCNpass=false;
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
  if (empty($email)) { array_push($errors, "Email is required"); $emptyEmail=true;}
  if (empty($pass)) { array_push($errors, "Password is required"); $emptyPass=true;}
  if (empty($npass)) { array_push($errors, "New Password is required"); $emptyNpass=true;}
  if (empty($cnpasss)) { array_push($errors, "Confirm Password is required"); $emptyCNpass=true;}
  if ($npass != $cnpasss) {
	array_push($errors, "The two passwords do not match"); $err =true;
  }


if(!$emptyNpass && !$emptyEmail && !$emptyPass && !$emptyCNpass && !$err){

  // Validate password strength
$uppercase = preg_match('@[A-Z]@', $npass);
$lowercase = preg_match('@[a-z]@', $npass);
$number    = preg_match('@[0-9]@', $npass);
$specialChars = preg_match('@[^\w]@', $npass);

if(!$uppercase || !$lowercase || !$number || !$specialChars || strlen($npass) < 8) {
    array_push($errors, 'Password should be at least 8 characters in length and should include at least one upper case letter, one number, and one special character.');
    echo "error ".print_r($errors);
}
else{
$sql =  $sql = "update user set pass='". $npass."' WHERE email='". $email."' ";

if ($conn->query($sql) === TRUE) {
    echo "update successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
}
}
else echo "errors ".print_r($errors);

$conn->close();

}
?>