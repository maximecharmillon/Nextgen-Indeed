<?php

    function insert($co, $message, $username, $corpo, $job_id, $date, $table, $Valmessage, $Valusername, $Valcorpo, $Valjobid, $Valdate){
        $conn = $co;
        $sql = "INSERT INTO " . $table . " (" . $message . ", " . $username . ", " . $corpo . ", ". $job_id . ", ". $date .") VALUES ('" . $Valmessage . "', '" . $Valusername . "', '" . $Valcorpo . "', '". $Valjobid . "', '". $Valdate ."')";
        echo $sql; 
        $conn->query($sql);
    }

    function insert2($co, $message, $username, $corpo, $job_id, $date, $table, $Valmessage, $Valusername, $Valcorpo, $Valjobid, $Valdate){
        $conn = $co;
        $sql = "INSERT INTO " . $table . " (" . $message . ", " . $username . ", " . $corpo . ", ". $job_id . ", ". $date .") VALUES ('" . $Valmessage . "', '" . $Valusername . "', '" . $Valcorpo . "', '". $Valjobid . "', '". $Valdate ."')";
        echo $sql; 
        $conn->query($sql);
    }

    function select($co, $message, $username, $job_id, $date, $table, $Valjobid){
        $conn=$co;
        $sql = "SELECT $message, $date, $username FROM $table WHERE $job_id = $Valjobid";

        $result = $conn->query($sql);

        if ($result) {
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    echo "MESSAGE: " . $row[$message] . ", DATE: " . $row[$date] . ", EXPEDITEUR: " . $row[$username] . "<br>";
                }
            } else {
                echo "Aucun résultat trouvé.";
            }
        } else {
            echo "Erreur dans la requête : " . $conn->error;
        }
    }

    function update($co, $username, $date, $job_id, $table, $Valusername, $Valdate, $Valjobid){

        $conn = $co;
        $sql = "UPDATE $table SET $username = $Valusername, $date = $Valdate WHERE $job_id = $Valjobid";
        echo $sql;
        $conn->query($sql);

    }

    function deleted($co, $job_id, $table, $Valjobid){

        $conn = $co;
        $sql = "DELETE FROM $table WHERE $job_id = $Valjobid";

        if ($conn->query($sql) === TRUE) {
            echo "Record deleted successfully";
        } else {
            echo "Error deleting record: " . $conn->error;
        }

    }
?>