<?php

session_start();   
/*
if (empty($_SESSION['count'])) {      // pour conter le nombre de fois de visite
   $_SESSION['count'] = 1;
} else {
   $_SESSION['count']++;
}
?>

<p>
 Bonjour visiteur, vous avez vu cette page <?php echo $_SESSION['count']; ?> fois.
</p>

<p>
 Pour continuer, <a href="form.php?<?php echo htmlspecialchars(SID); ?>">cliquez ici</a>.
</p>


$key = ini_get("session.upload_progress.prefix") . $_POST[ini_get("session.upload_progress.name")];
var_dump($_SESSION[$key]);
*/


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form action="upload.php" method="POST" enctype="multipart/form-data">
 <input type="hidden" name="<?php echo ini_get("session.upload_progress.name"); ?>" value="123" />
 <input type="file" name="file1" />
 <input type="file" name="file2" />
 <input type="submit" />
</form>
</body>
</html>
