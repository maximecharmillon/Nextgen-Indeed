<?php
function selectUser($co, $jobId, $corpId, $userId, $date, $short, $full, $adress, $salaire, $horaires, $avantages, $table, $valJobId){
    $conn= $co;
    $sql= "SELECT ". $jobId. ", ". $corpId. ", ". $userId. ", ". $date. ", ". $short. ", ". $full. ", ". $adress. ", ". $salaire. ", ". $horaires. ", ". $avantages. " FROM " .$table ." WHERE ". $jobId. "=". $valJobId;
    $result= $conn-> query($sql);
    if( $result-> num_rows> 0)
    {
        while( $r= $result-> fetch_assoc())
        {
            echo " date: ".$r[$date], "<br> ", $r[$short];
            echo "<p id=full> description: ".$r[$full], "<br>adress: ", $r[$adress], "<br>salaire: ", $r[$salaire], "<br>horaires: ", $r[$horaires], "<br>avantage: ", $r[$avantages], "</p>";            
        }
    }
    else{
        echo "m";
    }
}

function insertUSer($co, $jobId, $corpId, $userId, $date, $short, $full, $adress, $salaire, $horaires, $avantages, $table, $valJobId, $valCorpId, $valUserId, $valDate, $valShort, $valFull, $valAdress, $valSalaire, $valHoraires, $valAvantages,){
    $conn = $co;

    $sql= "INSERT INTO ". $table." ( ". $jobId. ", ". $corpId. ", ". $userId. ", ". $date. ", ". $short.  ", ". $full. ", ". $adress. ", " . $salaire. ", ". $horaires. ", ". $avantages. " ) VALUES ( '". $valJobId. "', '".  $valCorpId. "', '".  $valUserId. "', '".  $valDate. "', '".  $valShort. "', '". $valFull. "', '".  $valAdress. "', '".  $valHoraires. "', '".  $valSalaire. "', '".  $valAvantages. "' )";
   
    $conn-> query($sql);

}

function updateUser($co, $user, $email, $pwd, $table, $valUser, $valEmail, $valPwd, $userId, $valUserId){
    $sql= "UPDATE ". $table. " SET " .$user ."= '" .$valUser. "', ".$email ."= '" .$valEmail. "', ".$pwd ."= '" .$valPwd."' WHERE ". $userId. "='". $valUserId. "'";
    echo $sql;
    $co-> query($sql);
    
    if ($co-> query($sql) === TRUE)
    {
        echo $valUser+ " deleted";
    }
    else{
        echo "error of updatetion".$co->error;
    }
   
}

function deleteUser($co , $table, $userId, $valUserId){
    $conn= $co;

    $sql= "DELETE FROM " .$table ." WHERE ". $userId. "=". $valUserId;
    echo $sql;

    $conn-> query($sql);

}

?>