<?php

$host = 'localhost';
$username = 'phpmyadmin';
$password = 'bddpass123';
$database = 'Nextgen';

$co= new mysqli($host, $username, $password, $database);

if ($co->connect_error) {
    die("Connection failed: " . $co->connect_error);
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



