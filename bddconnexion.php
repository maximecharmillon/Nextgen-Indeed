<?php
// connexion js/php

function display_jobId($jobId)
{
    header("Access-Control-Allow-Origin: *");

    if(isset($_POST["display"]))
    {
        echo $jobId;
    }
}

function display_full_desc()
{
    header("Access-Control-Allow-Origin: *");

    if(isset($_POST["button"]))
    {
        echo "futur fonction qui appel la description full";
    }
}

// connexion php/sql 

$serveur= "localhost";
$user= "phpmyadmin";
$pwd= "bddpass123";
$db= "Nextgen";

$co= new mysqli($serveur, $user, $pwd, $db);
if( $co-> connect_error){ 
    die("errreeuuurrrrr"); 
}
else{ 
    echo "la co est bonne\n"; 
}

$selectJobId= "SELECT Id FROM USER";
$displayJobId = $co-> prepare($selectJobId);
$displayJobId-> execute();
$displayJobId-> store_result();

if( $displayJobId-> num_rows> 0)
{  
    $displayJobId= $co-> query($selectJobId);
    while($row= $displayJobId-> fetch_assoc())
    {
        echo $row["Id"];
        display_jobId($row["Id"]);
        echo " C'est bon monsieur !!!\n";
    }
    display_full_desc();
}
else
{
    echo "il n'y a pas d'annonces";
} 
mysqli_close($co);
?>