<?php
function select($co, $user, $email, $pwd, $userId, $jobId, $table, $valUserId){
    $conn= $co;
    $sql= "SELECT ". $user. ", ". $email. ", ". $pwd. ", ". $userId. ", ". $jobId. " FROM " .$table ." WHERE ". $userId. "=". $valUserId;
    
    $result= $conn-> query($sql);
    if( $result-> num_rows> 0)
    {
        while( $r= $result-> fetch_assoc())
        {
            
            echo " name: ".$r[$user], ", email: ", $r[$email], ", pwd; ", $r[$pwd];
        }
    }
    else{
        echo "m";
    }
}

function insert($co, $user, $email, $pwd, $userId, $jobId, $table, $valUser, $valEmail, $valPwd, $valUserId, $valJobId){
    $conn = $co;

    $sql= "INSERT INTO ". $table." ( ". $user. ", ". $email. ", ". $pwd. ", ". $userId. ", ". $jobId. " ) VALUES ( '". $valUser. "', '".  $valEmail. "', '".  $valPwd. "', '".  $valUserId. "', '".  $valJobId. "' )";
   
    $conn-> query($sql);

}

function update($co, $user, $email, $pwd, $table, $valUser, $valEmail, $valPwd, $userId, $valUserId){
    $sql= "UPDATE ". $table. " SET " .$user ."= '" .$valUser. "', ".$email ."= '" .$valEmail. "', ".$pwd ."= '" .$valPwd."' WHERE ". $userId. "='". $valUserId. "'";
    echo $sql;
    $co-> query($sql);
    
    if ($co-> query($sql) === TRUE)
    {
        echo $valUser+ " deleted";
    }
    else{
        echo "error of update2tion".$co->error;
    }
   
}

function delete($co , $table, $userId, $valUserId){
    $conn= $co;

    $sql= "DELETE FROM " .$table ." WHERE ". $userId. "=". $valUserId;
    echo $sql;

    $conn-> query($sql);

}

?>