<?php
// connexion php/sql 

$serveur= "localhost";
$user= "parisi";
$pwd= "22222Mm@";
$db= "NEXTGEN";

$co= new mysqli($serveur, $user, $pwd, $db);

if( $co-> connect_error)
{
    die("errreeuuurrrrr");
}
else
{
    echo "la co est bonne\n";
}



$SELCECTid= "SELECT JOB_ID FROM ANNONCES";
echo $SELCECTid;


// connexion js/php
header("Access-Control-Allow-Origin: *");

$jobId= 44;
if(isset($_POST["display"]))
{
    echo $jobId;
}

if(isset($_POST["button"]))
{

    $description= $_POST["button"];

    if($description== "42")
    {
        echo "bonjour";
    }
    else{
        echo "il a pas dit bonjour";
    }
    
}
    
?>