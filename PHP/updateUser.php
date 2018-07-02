<?php
require 'mysqliConnection.php';
error_reporting(3);

header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');

$postdata = file_get_contents('php://input');
$request = json_decode($postdata);

$array =  (array) $request;

if(isset($array["birthdate"])) {
    $array["birthdate"] = date("Y-m-d",strtotime( str_replace('/', '-', $array["birthdate"])));
}

function updateUser($array, $mysqli) {
    $query = "UPDATE users SET";
    $comma = " ";
    foreach($array as $key => $val) {
        if(!empty($val)) {
            $query .= $comma . $key . " = '" . $mysqli->real_escape_string(trim($val)) . "'";
            $comma = ", ";
        }
    }

    $query .= " WHERE email = '" .$array["email"] . "';";

    if (!$mysqli->query($query)) {
        echo json_encode($mysqli->error);
    }
    else {
        echo json_encode("success");
    }

}

updateUser($array, $mysqli);

?>