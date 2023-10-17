<?php
function select($co, $jobId, $corpId, $userId, $date, $short, $full, $adress, $salaire, $horaires, $avantages, $table, $valJobId){
    $conn= $co;
    $sql= "SELECT ". $jobId. ", ". $corpId. ", ". $userId. ", ". $date. ", ". $short. ", ". $full. ", ". $adress. ", ". $salaire. ", ". $horaires. ", ". $avantages. " FROM " .$table ." WHERE ". $jobId. "=". $valJobId;
    $result= $conn-> query($sql);
    if( $result-> num_rows> 0)
    {
        while( $r= $result-> fetch_assoc())
        {
            
            echo " description: ".$r[$full], "<br>adress: ", $r[$adress], "<br>salaire: ", $r[$salaire], "<br>horaires: ", $r[$horaires], "<br>avantage: ", $r[$avantages];            
        }
    }
    
}
function select2($co, $jobId, $corpId, $userId, $date, $short, $full, $adress, $salaire, $horaires, $avantages, $table, $valJobId){
    $conn= $co;
    $sql= "SELECT ". $jobId. ", ". $corpId. ", ". $userId. ", ". $date. ", ". $short. ", ". $full. ", ". $adress. ", ". $salaire. ", ". $horaires. ", ". $avantages. " FROM " .$table ." WHERE ". $jobId. "=". $valJobId;
    $result= $conn-> query($sql);
    if( $result-> num_rows> 0)
    {
        while( $r= $result-> fetch_assoc())
        {
            echo " date: ".$r[$date], "<br>", $r[$short];
        }
    }
    
}

function insert($co, $jobId, $corpId, $userId, $date, $short, $full, $adress, $salaire, $horaires, $avantages, $table, $valJobId, $valCorpId, $valUserId, $valDate, $valShort, $valFull, $valAdress, $valSalaire, $valHoraires, $valAvantages,){
    $conn = $co;

    $sql= "INSERT INTO ". $table." ( ". $jobId. ", ". $corpId. ", ". $userId. ", ". $date. ", ". $short.  ", ". $full. ", ". $adress. ", " . $salaire. ", ". $horaires. ", ". $avantages. " ) VALUES ( '". $valJobId. "', '".  $valCorpId. "', '".  $valUserId. "', '".  $valDate. "', '".  $valShort. "', '". $valFull. "', '".  $valAdress. "', '".  $valHoraires. "', '".  $valSalaire. "', '".  $valAvantages. "' )";
   
    $conn-> query($sql);

}

function update($co, $date, $short, $full, $adress, $salaire, $horaires, $avantages, $table, $valDate, $valShort, $valFull, $valAdress, $valSalaire, $valHoraires, $valAvantage, $jobId, $valJobId){
    $sql= "UPDATE ". $table. " SET " .$date ."= '" .$valDate. "', ".$short ."= '" .$valShort. "', ".$full ."= '" .$valFull. "', ". $adress ."= '" .$valAdress. "', ".$salaire ."= '" .$valSalaire. "', ".$horaires ."= '" .$valHoraires. "', ".$avantages ."= '" .$valAvantage."' WHERE ". $jobId. "='". $valJobId. "'";
    echo $sql;
    $co-> query($sql);
    
    if ($co-> query($sql) === TRUE)
    {
        echo $valJobId+ " update";
    }
    else{
        echo "error of updatetion".$co->error;
    }
   
}

function delete($co , $table, $jobId, $valJobId){
    $conn= $co;

    $sql= "DELETE FROM " .$table ." WHERE ". $jobId. "=". $valJobId;
    echo $sql;

    $conn-> query($sql);

}

?>