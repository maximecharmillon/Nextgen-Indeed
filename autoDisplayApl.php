<?php
$host = 'localhost';
$username = 'phpmyadmin';
$password = 'bddpass123';
$database = 'Nextgen';

$co = new mysqli($host, $username, $password, $database);

if ($co->connect_error) {
    die("Connection failed: " . $co->connect_error);
}

if (isset($_GET['jobId'])) {
    $jobId = $_GET['jobId'];

    $query = "SELECT User_Name, E_mail, phone_number FROM USER WHERE id = 2557";

    $result = $co->query($query);

    if ($result->num_rows > 0) {
        $data = $result->fetch_assoc();
        echo json_encode($data);
    } else {
        echo json_encode(array('error' => 'Job not found'));
    }
} else {
    echo json_encode(array('error' => 'Job ID not provided'));
}

if (($_SERVER['REQUEST_METHOD'] === 'POST') !== null) {
    $data = json_decode(file_get_contents('php://input'), true);

    $request = "INSERT INTO MESSAGES (Messages, Expediteur) VALUES ('" . $data["messages"] . "', '" . $data["username"] . "');";


    $result = $co->resquest($query);

}
?>
