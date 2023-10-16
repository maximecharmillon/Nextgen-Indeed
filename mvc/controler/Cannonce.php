<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

$serveur= "localhost";
$user= "parisi";
$pwd= "22222Mm@";
$db= "NEXTGEN"; 

$co= new mysqli($serveur, $user, $pwd, $db);

require "../model/Muser.php";

if(isset($_GET["selectAnnonce"]))
{ 
    $annonceId= $_GET["selectAnnonce"];
    echo (selectUser ($co, "JOB_ID", "CORP_ID", "USER_ID", "DATE", "SHORT_DESC", "FULL_DESC", "ADRESSE", "SALAIRE", "HORAIRES", "AVANTAGES", "ANNONCES",  $annonceId));
}

if(isset($_POST["date"]))
{   
    echo (insertUser ($co, "JOB_ID","CORP_ID", "USER_ID", "DATE", "SHORT_DESC", "FULL", "ADRESSE", "SALAIRE", "HORAIRES", "AVANTAGE" ($_POST["date"]), ($_POST["short"]), ($_POST["full"]), ($_POST["adresse"]), ($_POST["salaire"]), ($_POST["horaires"]), ($_POST["avantge"])));
}

if(isset($_POST["updateAnnonce"]))
{   
    echo (updateUser ($co, "USER", "EMAIL", "PWD", "USERS", $_POST["updateUser"], $_POST["updateEmail"], $_POST["updatePwd"], "USER_ID", $_POST["updateUserId"]));
}

if(isset($_GET["deleteId"]))
{   
    $userId= $_GET["deleteId"];
    echo (deleteUser ($co, "USERS", "USER_ID", $userId ));
}


?>