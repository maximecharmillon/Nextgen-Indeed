<?php

$serveur= "localhost";
$user= "phpmyadmin";
$pwd= "bddpass123";
$db= "Nextgen";

$co= new mysqli($serveur, $user, $pwd, $db);

function getCreditentials () {
    global $co; 
    $request = "SELECT User_Name, Pwd FROM USER";
    
    $creditentials = $co-> prepare($request);
    $creditentials -> execute();
    $creditentials -> store_result();

    $result = array();
    $creditentials->bind_result($result['User_Name'], $result['Pwd']);
    $creditentials->fetch();

    return $result;
}

?>