<?php
require 'mysqliConnection.php';
require 'saveUserDetails.php';
require 'saveUserCredentials.php';

header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');

$postdata = file_get_contents('php://input');
$request = json_decode($postdata);

$olddate = $request->birthdate;
$newdate = date("Y-m-d",strtotime( str_replace('/', '-', $olddate)));

$encryptedPassword = password_hash($request->password, PASSWORD_DEFAULT);

$response1 = saveUserData($mysqli, $request, $newdate);
$response2 = saveUserLogin($mysqli, $request, $encryptedPassword);

if ($response1 === 'exists' && $response2 === 'exists'){
    $response = 'exists';
}
elseif ($response1 === 'success' && $response2 === 'success'){
    $response = 'success';
}
else {
    $response = 'error';
}

echo json_encode($response);

?>
