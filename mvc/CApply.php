<?php

    $serveur = "localhost";
    $user = "phpmyadmin";
    $pwd = "Mmjf_Indeed2023";
    $db = "NEXTGEN";

    $co = new mysqli($serveur, $user, $pwd, $db);

    if(!$co){
        echo 'Not connected to the database';
    }

    require 'model.php';


    if(isset($_POST["username"])){

        echo (insert($co,"MESSAGE", "EXPEDITEUR", "DESTINATAIRE", "JOB_ID", "DATE", "MESSAGERIE", ($_POST["message"]), ($_POST["username"]), ($_POST["corpo"]), ($_POST["job_id"]), ($_POST["date"])));

        if ($co->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $co->error;
        }
    };

    if(isset($_POST["username2"])){

        echo (insert2($co,"MESSAGE", "EXPEDITEUR", "DESTINATAIRE", "JOB_ID", "DATE", "MESSAGERIE", ($_POST["message2"]), ($_POST["username2"]), ($_POST["corpo"]), ($_POST["job_id"]), ($_POST["date2"])));

        if ($co->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $co->error;
        }
    };

    if(isset($_GET['Selectmessage'])){

        $job_id = $_GET['Selectmessage'];
        echo (select($co, "MESSAGE", "EXPEDITEUR", "JOB_ID", "DATE", "MESSAGERIE", $job_id));
    
    }

?>