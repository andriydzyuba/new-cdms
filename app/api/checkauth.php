<?php
$userLogin = "cdms";
$userPassword = "cdms";

if ($_SESSION["login"] !== $userLogin && $_SESSION["password"] !== $userPassword) {
	die("No auth");
}
?>