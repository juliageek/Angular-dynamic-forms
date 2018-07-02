<?php
require 'intercomGeneralSettings.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");

$name = $request->name;
$email = $request->email;

function createLead($name, $email, $client){
    $client->leads->create([
        'email' => $email,
        'custom_attributes' => ['name' => $name]
    ]);
}

try {
    createLead($name, $email, $client);
}
catch(Exception $e){
    print_r($e);
}
?>
