<?php

$serveur= "localhost";
$user= "parisi";
$pwd= "22222Mm@";
$db= "NEXTGEN";

$co= new mysqli($serveur, $user, $pwd, $db);

function CreateCorp ($co, $NameCorp, $Job_Id, $E_mail, $User_Id) {
    global $co; 
    $request = "INSERT INTO CORP (CORP, JOB_ID, EMAIL, USER_ID) VALUES ($NameCorp, $Job_Id, $E_mail, $User_Id);";

    $co -> query($request); 
}

function ReadCorp ($co, $NameCorp, $Job_Id, $E_mail, $User_Id) {
    global $co ; 
    $request = "SELECT CORP, EMAIL, JOB_ID FROM CORP ;"; 

    $result = $co -> query($request); 

    if ($result -> num_rows > 0) {
        while ($values = $result -> fetch_assoc()) {
            echo "Corporation : " . $values[$NameCorp], ", EMAIL :". $values[$E_mail];
        }
    } else {
        echo "Not found"; 
    }
}

function UpdateCorps ($co, $NameCorp, $E_mail, $newValueName, $newValueEmail) {
    global $co; 
    $requestName = "UPDATE CORP SET CORP='$newValueName' WHERE CORP='$NameCorp';"; 
    $requestMail = "UPDATE CORP SET EMAIL='$newValueEmail' WHERE CORP='$NameCorp';"; 

    $co -> query($requestName) ;

    if ($co -> query($requestName) === TRUE) {
        echo $newValueName + "updated";
    } else {
        echo "Update error";
    }


    $co -> query($requestMail) ;

    if ($co -> query($requestMail) === TRUE) {
        echo $newValueEmail + "updated";
    } else {
        echo "Update error";
    }
}


function DeleteCorp ($co, $NameCorp, $Id, $Job_Id, $E_mail, $User_Id) {
    global $co ; 
    $request = "DELETE FROM CORP WHERE CORP = '$NameCorp';"; 

    $co -> query($request) ; 

    if ($co->affected_rows > 0) {
        echo "Delete successful";
    } else {
        echo "Delete error";
    }

}



?>
