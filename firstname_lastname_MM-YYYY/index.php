<?php
$email = $subject = $message = "";
$emailErr = $subjectErr = $messageErr = "";

if($_SERVER["REQUEST_METHOD"] == "POST"){
  $email = fix_input($_POST["email"]);
  $subject = fix_input($_POST["subject"]);
  $message = fix_input($_POST["message"]);
  if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    $emailErr = "Must use a valid email.";
    echo $emailErr;
    echo "<br>";
  }
  if(empty($subject)){
    $subjectErr = "Subject is required.";
    echo $subjectErr;
    echo "<br>";
  }
  if(empty($message)){
    $messageErr = "Message is required.";
    echo $messageErr;
    echo "<br>";
  }
  if(!$emailErr && !$subjectErr && !$messageErr){
    echo "Input has been validated!";
  }
}

function fix_input($data){
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
