<?php
function saveUserLogin($mysqli, $request, $encryptedPassword) {
    $query = "SELECT * FROM login WHERE email = '" .$request->email . "';";
    $result = $mysqli->query($query);
    if($result->fetch_assoc()) {
        return 'exists';
    } else {
        $query = "INSERT INTO login (email, username, password)";
        $query .= "VALUES ('" . $request->email . "', '" . $request->username . "', '" . $encryptedPassword ."');";

        if (!$mysqli->query($query)) {
            return $mysqli->error;
        }
        else {
            return 'success';
        }
    }
}

?>