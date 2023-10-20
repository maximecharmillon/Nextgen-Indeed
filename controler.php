<?php


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

require "modelSQL.php";

if (isset($_POST["createCorps"])) {
    
    echo (CreateCorp ($co, $NameCorp, $Id, $Job_Id, $E_mail, $User_Id));
    return header("Location:http://localhost/Nextgen-Indeed/pages/accueil.html");
}

?>