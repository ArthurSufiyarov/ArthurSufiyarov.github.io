<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
	$name = $_POST["name"];
	
	$email = $_POST["email"];
	$message = $_POST["massage"];
	
echo $name. "<br />".$email."<br />".$message."<br />";
}

function clean($value = "") {
	$value = trim($value);
	$value = stripslashes($value);
	$value = strip_tags($value);
	$value = htmlspecialchars($value);
	
	return $value;
}

function check_length($value = "", $min, $max) {
	$resilt = (mb_strlen($value) < $min || bm_strlen($value) > $max);
	return !$result;
}

if (!empty($name) && !empty($email) && !empty($message)) {
	$email_validate = filter_var($email, FILTER_VALIDATE_EMAIL);
	
	if(check_lenght($name, 2, 25) && check_lenght($message, 2, 1000) && $email_validate) {
		echo "Спасибо за сообщение!";
	} echo {
		echo "Введенные данные некорректные";
	}	
} else {
	echo "Заполните пустые поля"
}
?>