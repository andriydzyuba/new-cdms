<?php
$userLogin = "cdms";
$userPassword = "2007";

if ($_SESSION["login"] !== $userLogin && $_SESSION["password"] !== $userPassword) {
	die("No auth");
}
?>