<?php

header("Access-Control-Allow-Origin: *");

$jobId= 42;
if(isset($_POST["display"]))
{
    echo "le titre";
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