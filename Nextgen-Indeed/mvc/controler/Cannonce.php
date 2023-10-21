<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

$serveur= "localhost";
$user= "parisi";
$pwd= "22222Mm@";
$db= "NEXTGEN"; 

$co= new mysqli($serveur, $user, $pwd, $db);

require "../model/Mannonce.php";

if(isset($_GET["displayAnnonce"]))
{  
    echo (display($co, "JOB_ID", "ANNONCES"));
}
if(isset($_GET["selectAnnonce"]))
{ 
    $annonceId= $_GET["selectAnnonce"];
    echo (select ($co, "JOB_ID", "CORP_ID", "USER_ID", "DATE", "SHORT_DESC", "FULL_DESC", "ADRESSE", "SALAIRE", "HORAIRES", "AVANTAGES", "ANNONCES",  $annonceId));
}

if(isset($_GET["selectAnnonce2"]))
{   
    $annonceId= $_GET["selectAnnonce2"];
    echo (select2 ($co, "JOB_ID", "CORP_ID", "USER_ID", "DATE", "SHORT_DESC", "FULL_DESC", "ADRESSE", "SALAIRE", "HORAIRES", "AVANTAGES", "ANNONCES",  $annonceId));
}

if(isset($_POST["date"]))
{   
    echo (insert ($co, "JOB_ID","CORP_ID", "USER_ID", "DATE", "SHORT_DESC", "FULL_DESC", "ADRESSE", "SALAIRE", "HORAIRES", "AVANTAGES", "ANNONCES", ($_POST["jobId"]), ($_POST["corpId"]),($_POST["userId"]), ($_POST["date"]), ($_POST["short"]), ($_POST["full"]), ($_POST["adresse"]), ($_POST["salaire"]), ($_POST["horaires"]), ($_POST["avantage"])));
}

if(isset($_POST["updateDate"]))
{   
    echo (update ($co, "DATE", "SHORT_DESC", "ADRESSE", "ANNONCES", $_POST["updateDate"], $_POST["updateShort"], $_POST["updateAdresse"], "JOB_ID", $_POST["updateJobId"]));
}

if(isset($_GET["deleteId"]))
{   
    $annonceId= $_GET["deleteId"];
    echo (delete ($co, "ANNONCES", "JOB_ID", $annonceId ));
}
?>