<?php
require 'intercomGeneralSettings.php';
header('Access-Control-Allow-Origin: *');

$leads = $client->leads->getLeads([]);

echo json_encode($leads);

?>
