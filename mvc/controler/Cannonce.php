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
    echo (select ($co, "JOB_ID", "CORP_ID", "USER_ID", "DATE", "SHORT_DESC", "FULL_DESC", "ADRESSE", "SALAIRE", "HORAIRES", "AVANTAGES", "ANNONCES",  $annonceId));
}

if(isset($_POST["date"]))
{   
    echo (insert ($co, "JOB_ID","CORP_ID", "USER_ID", "DATE", "SHORT_DESC", "FULL", "ADRESSE", "SALAIRE", "HORAIRES", "AVANTAGE", "USERS", ($_POST["jobId"]), ($_POST["corpId"]),($_POST["userId"]), ($_POST["date"]), ($_POST["short"]), ($_POST["full"]), ($_POST["adresse"]), ($_POST["salaire"]), ($_POST["horaires"]), ($_POST["avantge"])));
}

if(isset($_POST["updateAnnonce"]))
{   
    echo (update ($co, "DATE", "SHORT_DESC", "FULL_DESC", "ADRESSE", "SALAIRE", "HORAIRES", "AVANTAGES", "USERS", $_POST["date"], $_POST["short"], $_POST["full"], $_POST["adress"], $_POST["salaire"], $_POST["horaires"], $_POST["avantage"], "JOB_ID", $_POST["jobId"]));
}

if(isset($_GET["deleteId"]))
{   
    $userId= $_GET["deleteId"];
    echo (delete ($co, "USERS", "USER_ID", $userId ));
}


?>