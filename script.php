<?php

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