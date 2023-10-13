<?php
function select($co, $key, $table, $where, $value){
    $sql= "SELECT"+ $key+ " FROM " +$table +" WHERE "+ $where+ "="+ $value;
    $r= $co-> query($sql);
    
    if ( $r-> num_row > 0)
    {
        while($row= $r-> fetch_assoc())
        {
            echo $row["$key"];
        }
    }
    else{
        echo "y'a nada ici";
    }
   
}

function insert($co, $key, $table, $value){
    $conn = $co;
    
    $sql= "INSERT INTO ". $table." (". $key. ") VALUES (" .$value .")";
    echo $sql;
    echo ($conn-> query($sql));
    if ($conn-> query($sql) === TRUE)
    {
        echo  $value +"enregisté";
    }
    else{
        echo "erreur lors de la création";
    }
    echo "test";
   
}

function update($co, $key, $table,$value1, $where, $value2){
    $sql= "UPDATE"+ $table+ " SET " +$key +"= " +$value1 +" WHERE "+ $where+ "="+ $value2;
    $r= $co-> query($sql);
    
    if ($co-> query($sql) === TRUE)
    {
        echo $key+ " deleted";
    }
    else{
        echo "error of deletion".$co->error;
    }
   
}

function delete($co ,$key , $table, $where, $value){
    $sql= "DELETE FROM " +$table +" WHERE "+ $where+ "="+ $value+ ";";
    $r= $co-> query($sql);
    
    if ($co-> query($sql) === TRUE)
    {
        echo $key+ " deleted";
    }
    else{
        echo "error of deletion".$co->error;
    }
   
}

?>