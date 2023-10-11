<?php

header("Access-Control-Allow-Origin: *");

if(isset($_POST["jobId"]))
{

    $job= $_POST["jobId"];

    if($job== "42")
    {
        echo "bonjour";
    }
    else{
        echo "il a pas dit bonjour";
    }
    
}
    
?>