<?php
$passphrase = "citadel";
$drivefolder = "https://drive.google.com/folderview?id=0B6-A0_C25Xw7SU9MaUhpMU14c2s&usp=sharing";
echo "<h1>hi</h1>";
if(strcmp($_POST["passphrase"], $passphrase) === 0) {
  echo '<script type="text/javascript">
           window.location = "' . $drivefolder .'"
      </script>';
} else {
  echo $_POST["passphrase"];
}

?>
