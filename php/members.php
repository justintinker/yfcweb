<?php
$passphrase = "citadel";
$drivefolder = "https://drive.google.com/folderview?id=0B6-A0_C25Xw7SU9MaUhpMU14c2s&usp=sharing";
echo "<h1>enter</h1>";
echo "<h1>".$passphrase."</h1>";
if(strcmp($_POST["passphrase"], $passphrase) === 0) {
  echo "<h1>match</h1>";

} else {
  echo $_POST["passphrase"];
}

?>
