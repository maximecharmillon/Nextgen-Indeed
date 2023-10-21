<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

$serveur= "localhost";
$user= "parisi";
$pwd= "22222Mm@";
$db= "NEXTGEN"; 

$co= new mysqli($serveur, $user, $pwd, $db);

require "../model/Muser.php";

if(isset($_GET["selectUser"]))
{ 
     $userId= $_GET["selectUser"];
    echo (selectUser ($co, "USER", "EMAIL", "PWD", "USER_ID", "JOB_ID", "USERS", $userId));
}

if(isset($_POST["user"]))
{   
    echo (insertUser ($co, "USER","EMAIL", "PWD", "JOB_ID", "USERS", ($_POST["user"]), ($_POST["email"]), ($_POST["pwd"]), ($_POST["jobId"])));
    // a revoir
}

if(isset($_POST["updateUser"]))
{   
    echo (updateUser ($co, "USER", "EMAIL", "PWD", "USERS", $_POST["updateUser"], $_POST["updateEmail"], $_POST["updatePwd"], "USER_ID", $_POST["updateUserId"]));
}

if(isset($_GET["deleteId"]))
{   
    $userId= $_GET["deleteId"];
    echo (deleteUser ($co, "USERS", "USER_ID", $userId ));
}


if(isset($_POST["id"]))
{   
    echo (deleteId( $co, "IDS"));
    echo (selectId ( $co, "USER", "USER_ID", "USERS", $_POST["id"]));
    
    
} 
if(isset($_POST["insertId"]))
{
    echo (insertId ($co, "ID", "IDS", $_POST["insertId"] ));
}

if(isset($_GET["findId"]))
{
    echo (displayId( $co, "ID", "IDS"));
}



if (isset($_POST["pwd"])) {

    $username = $data['username'];
    
    $query = "SELECT PWD FROM USERS WHERE User_Name = "+ $username;
    $value = $co->prepare($query);
    $value->bind_param("s", $username); 
    $value->execute();
    $result = $value->get_result();
    $user = $result->fetch_assoc();

    // var_dump($user);
    echo $user["PWD"];



    $value->close();
    $co->close();
}

?>