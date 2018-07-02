<?php
require 'mysqliConnection.php';
$postdata = file_get_contents('php://input');
$request = json_decode($postdata);

$username = $request->username;
$password = $request->password;

function checkCredentials($username, $password, $mysqli) {
    $currentUser = [];
    $result = $mysqli->query("SELECT * FROM login WHERE username = '" . $username . "';");
    if ($result) {
        $user= $result->fetch_assoc();
        if ($user["username"] === $username) {
            if (password_verify($password, $user["password"])) {
                $currentUser["status"] = "logged in";
                $currentUser["username"]= $user["username"];
                $currentUser["email"]= $user["email"];
            }
            else {
                $currentUser["status"] = "wrong password";
                $currentUser["email"]= $user["email"];
            }
        }
        else {
            $currentUser["status"] = "unknown username";
        }
    }
    echo json_encode($currentUser);
}

checkCredentials($username, $password, $mysqli);

?>