<?php
function selectUser($co, $user, $email, $pwd, $userId, $jobId, $table, $valUserId){
    $conn= $co;
    $sql= "SELECT ". $user. ", ". $email. ", ". $pwd. ", ". $userId. ", ". $jobId. " FROM " .$table ." WHERE ". $userId. "=". $valUserId;
    
    $result= $conn-> query($sql);
    if( $result-> num_rows> 0)
    {
        while( $r= $result-> fetch_assoc())
        {
            echo " name: ".$r[$user], "<br>email: ", $r[$email], "<br>password: ", $r[$pwd];
        }
    }
}

function insertUSer($co, $user, $email, $pwd, $jobId, $table, $valUser, $valEmail, $valPwd, $valJobId){
    $conn = $co;

    $sql= "INSERT INTO ". $table." ( ". $user. ", ". $email. ", ". $pwd. ", ". $jobId. " ) VALUES ( '". $valUser. "', '".  $valEmail. "', '".  $valPwd. "', '".  $valJobId. "' )";
    echo $sql;
   
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
        echo "error of update2tion".$co->error;
    }
   
}

function deleteUser($co , $table, $userId, $valUserId){
    $conn= $co;

    $sql= "DELETE FROM " .$table ." WHERE ". $userId. "=". $valUserId;
    echo $sql;

    $conn-> query($sql);

}

?>