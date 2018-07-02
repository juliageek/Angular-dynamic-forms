<?php
function saveUserData($mysqli, $request, $newdate) {
    $query = "SELECT * FROM users WHERE email = '" .$request->email . "';";
    $result = $mysqli->query($query);
    if ($result->fetch_assoc()) {
        return 'exists';
    }
    else {
        $query = "INSERT INTO users (firstname, lastname, email, phone, birthdate, company, location, last_page_viewed)";
        $query .= "VALUES ('" . $request->firstname ."', '" . $request->lastname . "', '" . $request->email . "', '" . $request->phone ."', '" . $newdate . "', '" . $request->company . "', '" . $request->location . "', '" . NULL . "');";

        if (!$mysqli->query($query)) {
            return $mysqli->error;
        } else {
            return 'success';
        }
    }
}

?>