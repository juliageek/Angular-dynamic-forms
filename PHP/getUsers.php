<?php
require 'mysqliConnection.php';

error_reporting(3);

header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');

function getUsers($mysqli) {
    $query = "SELECT firstname, lastname, email, birthdate, company, location, phone FROM users;";
    $result = $mysqli->query($query);
    if (!$result) {
        echo json_encode($mysqli->error);
    }
    else {
        $users = [];
        while ($row = $result->fetch_assoc()) {
            array_push($users, $row);
        }
        echo json_encode($users);
    }
}

getUsers($mysqli);

?>