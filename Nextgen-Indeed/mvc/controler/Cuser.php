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
    echo (insertUser ($co, "USER","EMAIL", "PWD", "USER_ID", "JOB_ID", "USERS", ($_POST["user"]), ($_POST["email"]), ($_POST["pwd"]), ($_POST["userId"]), ($_POST["jobId"])));
    
    header("Location:http://localhost/Nextgen-Indeed/pages/accueil.html");
    exit();
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

if (($_SERVER['REQUEST_METHOD'] === 'POST') !== null) {
    $data = json_decode(file_get_contents('php://input'), true);

    $username = $data['username'];
    $password = $data['password'];

    $query = "SELECT User_Name, Pwd, Id FROM USER WHERE User_Name = ? LIMIT 1";
    $value = $co->prepare($query);
    $value->bind_param("s", $username); 
    $value->execute();
    $result = $value->get_result();
    $user = $result->fetch_assoc();

    // var_dump($user);

    if ($password === $user['Pwd']) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }

    $value->close();
    $co->close();
}

?>