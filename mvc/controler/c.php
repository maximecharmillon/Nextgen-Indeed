<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

$serveur= "localhost";
$user= "parisi";
$pwd= "22222Mm@";
$db= "NEXTGEN"; 

$co= new mysqli($serveur, $user, $pwd, $db);

require "../model/m.php";

if(isset($_GET["selectUser"]))
{ 
     $userId= $_GET["selectUser"];
    echo (select ($co, "USER", "EMAIL", "PWD", "USER_ID", "JOB_ID", "USERS", $userId));
}

if(isset($_POST["user"]))
{   
    echo (insert ($co, "USER","EMAIL", "PWD", "USER_ID", "JOB_ID", "USERS", ($_POST["user"]), ($_POST["email"]), ($_POST["pwd"]), ($_POST["userId"]), ($_POST["jobId"])));
}

if(isset($_POST["updateUser"]))
{   
    echo (update ($co, "USER", "EMAIL", "PWD", "USERS", $_POST["updateUser"], $_POST["updateEmail"], $_POST["updatePwd"], "USER_ID", $_POST["updateUserId"]));
}

if(isset($_GET["deleteId"]))
{   
    $userId= $_GET["deleteId"];
    echo (delete ($co, "USERS", "USER_ID", $userId ));
}


?>