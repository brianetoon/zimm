<?php
require ('PHPMailer/PHPMailerAutoload.php');
$data = file_get_contents('php://input');
$decodedData = json_decode($data);

$mail = new PHPMailer();
$mail->isSMTP();
$mail->Host = '2xz6-hs75.accessdomain.com';
$mail->SMTPAuth = true;
$mail->Username = "dan@zimmscentralvac.com"; //*
$mail->Password =  "Silverton41!"; //*
$mail->SMTPSecure = 'tls';
$mail->Port = 587;
$mail->From = 'dan@zimmscentralvac.com'; // *
$mail->addAddress('dan@zimmscentralvac.com'); // *
$mail->FromName = "Zimm's Central Vac Inquiry"; // *
$mail->WordWrap = 50;
$mail->isHTML(true);
$mail->Subject = "Zimm's Central Vac Inquiry from " . $decodedData->name; // *
$mail->Body    = 'From - ' . $decodedData->name . '<br><br>Email - ' . $decodedData->email . '<br><br>Phone - ' . $decodedData->phone . '<br><br>Message from sender - ' . $decodedData->message; // *
if(!$mail->Send()) {
    $error = 'Mail error: '.$mail->ErrorInfo;
    echo $error;
} else {
    $success = 'Message sent!';
    echo $success;
}