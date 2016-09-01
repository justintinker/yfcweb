<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

$passphrase = "citadel";
$drivefolder = "https://drive.google.com/folderview?id=0B6-A0_C25Xw7SU9MaUhpMU14c2s&usp=sharing";

$data           = array();      // array to pass back data

if(strcmp($_POST["passphrase"], $passphrase) === 0) {
  data['success'] = true;
  data['link'] = $drivefolder;
} else {
  data['success'] = false;
}
    echo json_encode($data);
?>
