<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$serveur= "localhost";
$user= "parisi";
$pwd= "22222Mm@";
$db= "NEXTGEN";

$co= new mysqli($serveur, $user, $pwd, $db);

require "../model/m.php";

if(isset($_POST["USER"]))
{
    $value= $_POST["USER"];
    echo (insert($co, "USER", "USERS", $value ));
}

?>