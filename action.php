<?php
	$fname=$_POST['fname'];
	$lname=$_POST['lname'];
	$email=$_POST['email'];
	$message=$_POST['subject'];
	$subject="Contact Form";
	$formcontent="From $fname $lname \n Message: $message";
	$recipient="alma_djedovic04@hotmail.com";
	$mailheader="From: $email \r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die ("Error!");
	echo "Thank You!";
	echo "<a href='index.html'>Return</a>";
?>