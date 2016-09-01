<?php
$passphrase = "citadel";
$drivefolder = "https://drive.google.com/folderview?id=0B6-A0_C25Xw7SU9MaUhpMU14c2s&usp=sharing";
if(strcmp($_POST["passphrase"], $passphrase) === 0) {
  echo "<h1>match</h1>";
  echo '<script>
           window.location = "http://www.google.com";
      </script>';
} else {
  echo $_POST["passphrase"];
}

?>
