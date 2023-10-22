<?php

    $serveur = "localhost";
    $user = "parisi";
    $pwd = "22222Mm@";
    $db = "NEXTGEN";

    $co = new mysqli($serveur, $user, $pwd, $db);

    if(!$co){
        echo 'Not connected to the database';
    }

    require '../model/Mcorp.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET["createCorps"])) {
 
 CreateCorp($co, $_POST["CORP"], $_POST["JOB_ID"], $_POST["EMAIL"], $_POST["USER_ID"]);

 echo "Corporation created successfully";
}

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET["readCorp"])) {

 ReadCorp($co, $NameCorp, $Job_Id, $E_mail, $User_Id);
}

if ($_SERVER['REQUEST_METHOD'] === 'PUT' && isset($_GET["updateCorp"])) {

 $data = json_decode(file_get_contents('php://input'), true);
 UpdateCorps($co, $data['CORP'], $data['EMAIL'], $data['NEW_CORP'], $data['NEW_EMAIL']);

 echo "Corporation updated successfully";
}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE' && isset($_GET["deleteCorp"])) {

 DeleteCorp($co, $NameCorp, $Id, $Job_Id, $E_mail, $User_Id);

 echo "Corporation deleted successfully";
}

?>