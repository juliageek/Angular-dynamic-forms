<?php
$mysqli = new mysqli('127.0.0.1', 'root', 'tonymacaroni123', 'dynamic-forms') or die('Error connecting to MySQL server.');

if ($mysqli->connect_errno) {
    error_log(print_r("Connect failed: %s\n", $mysqli->connect_error), true);
    exit();
}

?>